import { Box, Heading } from "@chakra-ui/react";
import CalendarCarrousel from "../../components/appointments/user/CalendarCarrousel";

const LoggedHomePage = () => {
  return (
    <Box minH={"91vh"}>
      <Heading>Upcoming Appointments</Heading>
      <CalendarCarrousel />
    </Box>
  );
};

export default LoggedHomePage;
