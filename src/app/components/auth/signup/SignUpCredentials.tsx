import { useState, FC, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Box,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";
import { stringContainsNumber } from "../../functions/stringContainsNumber";

interface Props {
  onclick: Function;
  error: Function;
}

const SignUpCredentials: FC<Props> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [passConfirm, setPassConfirm] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showPassConfirm, setShowPassConfirm] = useState<boolean>(false);

  const toast = useToast();

  const toastErrorMsg = (msg: string) => {
    toast({
      title: msg,
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  const register = () => {
    if (email !== "") {
      if (pass === passConfirm) {
        if (
          pass.length > 5 &&
          stringContainsNumber(pass) === true &&
          pass.match(/[a-z]/i)
        ) {
          toast({
            title: "User created successfuly!",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
          props.onclick();
        } else {
          toastErrorMsg(
            "Password must be at least 6 character long and contain at least one letter and number"
          );
          props.error("error");
        }
      } else {
        toastErrorMsg("Passwords dont match");
        props.error("error");
      }
    } else {
      toastErrorMsg("Enter a valid email");
      props.error("error");
    }
  };

  const isError = pass === passConfirm;

  useEffect(() => {
    props.error("loading");
  }, []);

  return (
    <Box mx={300} mt={50}>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          id="email"
          type="email"
          isRequired
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormLabel htmlFor="Password">Password</FormLabel>
        <InputGroup>
          <Input
            id="Password"
            type={showPass ? "text" : "password"}
            isRequired
            mb={3}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <InputRightElement width="1.5rem">
            <IconButton
              aria-label="show/hide password"
              size="sm"
              icon={<AiOutlineEye />}
              fontSize={20}
              mr={4}
              onClick={() => {
                setShowPass(!showPass);
              }}
            />
          </InputRightElement>
        </InputGroup>
        <FormHelperText my={1} mb={2}>
          Passwords must be at least 6 characters and cointain at least one
          letter and number.
        </FormHelperText>
        <FormLabel htmlFor="ConfirmPassword">Confirm Password</FormLabel>
        <InputGroup>
          <Input
            id="ConfirmPassword"
            type={showPassConfirm ? "text" : "password"}
            isRequired
            mb={3}
            onChange={(e) => {
              setPassConfirm(e.target.value);
            }}
          />
          <InputRightElement width="1.5rem">
            <IconButton
              aria-label="show/hide password"
              size="sm"
              icon={<AiOutlineEye />}
              fontSize={20}
              mr={4}
              onClick={() => {
                setShowPassConfirm(!showPassConfirm);
              }}
            />
          </InputRightElement>
        </InputGroup>
        {!isError ? (
          <FormHelperText>Passwords do not match!</FormHelperText>
        ) : null}
      </FormControl>
      <Flex justify={"center"} my={10}>
        <Button onClick={register} variant="ghost">
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default SignUpCredentials;
