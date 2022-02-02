import { useState, FC } from "react";
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
} from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";

interface Props {
  onclick: Function;
}

const SignUpCredentials: FC<Props> = (props) => {
  const [pass, setPass] = useState<string>("");
  const [passConfirm, setPassConfirm] = useState<string>("");
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showPassConfirm, setShowPassConfirm] = useState<boolean>(false);

  const register = () => {
    if (pass === passConfirm) {
      if (pass.length > 5 && stringContainsNumber(pass) === false) {
        console.log("good");
        props.onclick();
      } else {
        console.log(
          "Password must be at least 6 character long and contain a number"
        );
      }
    } else {
      console.log("Passwords dont match");
    }
  };

  const stringContainsNumber = (string: string) => {
    let matchPattern = string.match(/\d+/g);
    if (matchPattern != null) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Box mx={300} mt={50}>
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
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
          Passwords must be at least 6 characters and a number.
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
