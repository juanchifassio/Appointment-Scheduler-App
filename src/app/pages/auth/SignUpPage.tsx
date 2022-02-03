import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import SignUpCredentials from "../../components/auth/signup/SignUpCredentials";
import SignUpPersonalData from "../../components/auth/signup/SignUpPersonalData";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import SignUpSchedule from "../../components/auth/signup/SignUpSchedule";

const SignUpPage = () => {
  const { nextStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const [isLoading, setIsLoading] = useState<"loading" | "error">("loading");

  const signup = <SignUpCredentials onclick={nextStep} error={setIsLoading} />;
  const personalInfo = (
    <SignUpPersonalData onclick={nextStep} error={setIsLoading} />
  );
  const schedule = <SignUpSchedule error={setIsLoading} />;

  const steps = [
    { label: "Sign Up", content: signup },
    { label: "Personal Info", content: personalInfo },
    { label: "Your Schedule", content: schedule },
  ];

  return (
    <Box mx={150} minH={"86vh"}>
      <Flex flexDir="column" width="100%" my={50}>
        <Steps activeStep={activeStep} state={isLoading}>
          {steps.map(({ label, content }) => (
            <Step label={label} key={label}>
              {content}
            </Step>
          ))}
        </Steps>
      </Flex>
    </Box>
  );
};

export default SignUpPage;
