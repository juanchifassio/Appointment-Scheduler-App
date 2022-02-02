import { Box } from "@chakra-ui/react";
import SignUpCredentials from "../../components/auth/signup/SignUpCredentials";
import SignUpPersonalData from "../../components/auth/signup/SignUpPersonalData";

const SignUpPage = () => {
  return (
    <>
      <Box>signup Page</Box>
      <Box mx={600}>
        <SignUpCredentials />
        <SignUpPersonalData />
      </Box>
    </>
  );
};

export default SignUpPage;
