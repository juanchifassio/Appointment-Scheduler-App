import { Button } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();
  return (
    <>
      <Button onClick={logout} mr={50}>
        Logout
      </Button>
    </>
  );
};

export default LogoutButton;
