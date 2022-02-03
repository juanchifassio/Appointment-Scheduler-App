import { Box, Flex, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box w="100%">
      <Box py={2} px={4} justify="center" whiteSpace="nowrap" bg={"teal"}>
        <Link href="/">This is a Navbar</Link>
      </Box>
    </Box>
  );
};

export default Navbar;
