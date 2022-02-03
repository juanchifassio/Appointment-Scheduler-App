import { Box, Button, Heading, HStack, Stack, Link } from "@chakra-ui/react";
import Login from "../components/auth/Login";

const UnLoggedHomePage = () => {
  return (
    <Box minH={"91vh"}>
      <Box>this is the UnLoggedHomePage</Box>
      <HStack>
        <Heading>THIS WILL BE A PHOTO WITH A DESCRIPTION</Heading>
        <Stack>
          <Box>
            <Link href="/register" style={{ textDecoration: "none" }}>
              <Button>Sign Up</Button>
            </Link>
          </Box>
          <Box>
            <Login />
          </Box>
        </Stack>
      </HStack>
    </Box>
  );
};

export default UnLoggedHomePage;
