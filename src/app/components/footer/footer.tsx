import { Center, Heading, Box } from "@chakra-ui/react";
import SocialMedia from "./Social";

const Footer = () => {
  return (
    <Box>
      <Center
        as={"footer"}
        h="5vh"
        justifyContent={"space-between"}
        px={10}
        bg={"teal"}
      >
        <Heading size="md">By Juan Martin Fassio</Heading>
        <SocialMedia />
      </Center>
    </Box>
  );
};

export default Footer;
