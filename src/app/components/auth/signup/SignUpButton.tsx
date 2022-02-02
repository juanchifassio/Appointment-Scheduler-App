import { Box, Link, Button } from "@chakra-ui/react";
import { FC } from "react";

interface Props {
  s: string;
}

const SignUpButton: FC<Props> = (props) => {
  return (
    <Box>
      <Link href="/register" style={{ textDecoration: "none" }}>
        <Button size={props?.s ? props.s : "md"}>Sign Up</Button>
      </Link>
    </Box>
  );
};

export default SignUpButton;
