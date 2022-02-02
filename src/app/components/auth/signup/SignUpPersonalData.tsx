import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";

const SignUpPersonalData = () => {
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="first-name">First name</FormLabel>
        <Input id="first-name" placeholder="First name" />
        <FormLabel htmlFor="last-name">Last name</FormLabel>
        <Input id="last-name" placeholder="Last name" />
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
    </>
  );
};

export default SignUpPersonalData;
