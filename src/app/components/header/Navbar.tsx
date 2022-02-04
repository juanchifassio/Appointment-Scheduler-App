import { Box, Text, HStack, Link, Spacer } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const { currentUser } = useAuth();
  return (
    <Box w="100%">
      <Box py={2} px={4} whiteSpace="nowrap" bg={"teal"}>
        <HStack>
          <Link href="/" mx={25} style={{ textDecoration: "none" }}>
            <Text fontWeight={500}>NAME WEON</Text>
          </Link>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Text fontWeight={500}>Home</Text>
          </Link>
          <Spacer />
          <Link href="/schedule-update" style={{ textDecoration: "none" }}>
            <Text fontWeight={500} mx={5}>
              Update Schedule
            </Text>
          </Link>
          <Box>
            <LogoutButton />
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
