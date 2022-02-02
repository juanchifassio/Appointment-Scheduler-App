import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineEye } from "react-icons/ai";

const SignUpCredentials = () => {
  const [pass, setPass] = useState<string | null>(null);
  const [passConfirm, setPassConfirm] = useState<string | null>(null);
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showPassConfirm, setShowPassConfirm] = useState<boolean>(false);

  return (
    <>
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
          Passwords must be at least 6 characters, an uppercase letter and a
          number.
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
    </>
  );
};

export default SignUpCredentials;
