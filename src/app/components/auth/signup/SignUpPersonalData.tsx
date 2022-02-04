import { FC, useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Input,
  Select,
  Textarea,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import { services } from "../../../data/ServicesData";
import { useAuth } from "../../contexts/AuthContext";
import { getDatabase, ref, set } from "firebase/database";

interface Props {
  onclick: Function;
  error: Function;
}

const SignUpPersonalData: FC<Props> = (props) => {
  const [first, setFirst] = useState<string>("");
  const [last, setLast] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("a");
  const [otherService, setOtherService] = useState<string>("");
  const [serviceDesc, setServiceDesc] = useState<string>("");

  const toast = useToast();
  const { currentUser } = useAuth();

  const toastMsg = () => {
    toast({
      title: "Successfully saved personal data.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const toastErrorMsg = (msg: string) => {
    toast({
      title: msg,
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  const submitPD = () => {
    if (
      first !== "" &&
      last !== "" &&
      selectedService !== "" &&
      serviceDesc !== ""
    ) {
      if (selectedService !== "Other") {
        set(ref(getDatabase(), "users/" + currentUser.uid), {
          scheduleID: currentUser.uid,
          fname: first,
          lname: last,
          email: currentUser.email,
          service: selectedService,
          servicedesc: serviceDesc,
        });
        toastMsg();
        props.onclick();
      } else if (selectedService === "Other" && otherService !== "") {
        set(ref(getDatabase(), "users/" + currentUser.uid), {
          fname: first,
          lname: last,
          email: currentUser.email,
          service: otherService,
          servicedesc: serviceDesc,
        });
        toastMsg();
        props.onclick();
      } else {
        toastErrorMsg("You must fill all  fields.");
        props.error("error");
      }
    } else {
      toastErrorMsg("You must fill all  fields.");
      props.error("error");
    }
  };

  useEffect(() => {
    props.error("loading");
  }, []);

  return (
    <Box mx={200} mt={50}>
      <FormControl>
        <FormLabel htmlFor="first-name">First name</FormLabel>
        <Input
          id="first-name"
          placeholder="First name"
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />
        <FormLabel htmlFor="last-name">Last name</FormLabel>
        <Input
          id="last-name"
          placeholder="Last name"
          onChange={(e) => {
            setLast(e.target.value);
          }}
        />
        <FormLabel htmlFor="service">Service</FormLabel>
        <Select
          onChange={(e) => {
            setSelectedService(e.target.value);
          }}
        >
          {services.map((service) => {
            return (
              <option key={service.service} value={service.service}>
                {service.service}
              </option>
            );
          })}
        </Select>
        {selectedService === "Other" && (
          <>
            <FormLabel htmlFor="service">What service do you offer?</FormLabel>
            <Input
              id="service"
              onChange={(e) => {
                setOtherService(e.target.value);
              }}
            />
          </>
        )}
        <FormLabel htmlFor="service-description">Service Description</FormLabel>
        <Textarea
          id="service-description"
          placeholder="Service Description must be 100 characters long"
          maxH={100}
          onChange={(e) => {
            setServiceDesc(e.target.value);
          }}
        />
      </FormControl>
      <Flex justify={"center"} my={10}>
        <Button onClick={submitPD} variant="ghost">
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default SignUpPersonalData;
