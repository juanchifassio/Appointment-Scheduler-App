import { FC } from "react";
import {
  FormControl,
  FormLabel,
  Box,
  FormHelperText,
  Input,
  Select,
  Textarea,
  Flex,
  Button,
} from "@chakra-ui/react";

interface Props {
  onclick: Function;
}

const SignUpPersonalData: FC<Props> = (props) => {
  const submitPD = () => {
    props.onclick();
  };
  return (
    <Box mx={200} mt={50}>
      <FormControl>
        <FormLabel htmlFor="first-name">First name</FormLabel>
        <Input id="first-name" placeholder="First name" isRequired />
        <FormLabel htmlFor="last-name">Last name</FormLabel>
        <Input id="last-name" placeholder="Last name" isRequired />
        <FormLabel htmlFor="service">Service</FormLabel>
        <Select>
          <option value="option1">Service 1</option>
          <option value="option2">Service 2</option>
          <option value="option3">Service 3</option>
        </Select>
        <FormLabel htmlFor="service-description">Service Description</FormLabel>
        <Textarea
          id="service-description"
          placeholder="Service Description"
          maxH={100}
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
