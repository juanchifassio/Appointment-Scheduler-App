import { FC, useState } from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { set, ref, getDatabase } from "firebase/database";

interface Props {
  sMan: any;
  onclick: Function;
  hour: String;
  day: String;
}
const AppointmentConfirm: FC<Props> = (props) => {
  const [fullName, setFullName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [phone, setPhone] = useState<String>("");

  const confirmationEmail = () => {
    if (fullName !== "" && email !== "" && phone !== "") {
      set(
        ref(
          getDatabase(),
          `users/${props?.sMan.scheduleID}/appointments/${props.day}/${props.hour}`
        ),
        { fullName: fullName, email: email, phone: phone, confirmed: false }
      );
      props.onclick();
    }
  };

  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="name" my={5}>
          Full Name
        </FormLabel>
        <Input
          id="name"
          placeholder="Full name"
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
        <FormLabel htmlFor="email" my={5}>
          Email Address
        </FormLabel>
        <Input
          id="email"
          placeholder="Please enter your email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <FormLabel htmlFor="phone" my={5}>
          Phone Number
        </FormLabel>
        <Input
          id="phone"
          placeholder="Please enter your phone number"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </FormControl>
      <Box my={10}>
        <Button onClick={confirmationEmail} variant="ghost">
          Send Confirmation Email
        </Button>
      </Box>
    </Box>
  );
};

export default AppointmentConfirm;
