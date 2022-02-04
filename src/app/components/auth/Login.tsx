import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
  useDisclosure,
  Text,
  HStack,
  Spacer,
  useToast,
  InputGroup,
  IconButton,
  InputRightElement,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import SignUpButton from "./signup/SignUpButton";
import { AiOutlineEye } from "react-icons/ai";

const Login = () => {
  const [logInEmail, setLogInEmail] = useState<string | null>(null);
  const [logInPassword, setLogInPassword] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState<boolean>(false);

  const toast = useToast();

  const login = () => {
    if (logInEmail === null || logInPassword === null) {
      toast({
        title: "Credentials not valid",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      try {
        signInWithEmailAndPassword(auth, logInEmail, logInPassword);
        onClose();
      } catch (error) {
        console.log(error);
        toast({
          title: "Username or password incorrect",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <>
      <Button onClick={onOpen} size={"sm"}>
        Login
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                type="email"
                isRequired
                mb={3}
                onChange={(e) => {
                  setLogInEmail(e.target.value);
                }}
              />
              <FormLabel htmlFor="Password">Password</FormLabel>
              <InputGroup>
                <Input
                  id="Password"
                  type={show ? "text" : "password"}
                  isRequired
                  mb={3}
                  onChange={(e) => {
                    setLogInPassword(e.target.value);
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
                      setShow(!show);
                    }}
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button colorScheme="teal" w="100%" mt={5} mr={3} onClick={login}>
              Log In
            </Button>
            <HStack>
              <Text my={3}>Don't have an account yet?</Text>
              <Spacer />
              <SignUpButton s={"sm"} />
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Login;
