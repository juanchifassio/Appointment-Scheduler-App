import { useState, FC } from "react";
import { Box, Flex, Button, HStack, Spacer } from "@chakra-ui/react";
import SignUpCredentials from "../../components/auth/signup/SignUpCredentials";
import SignUpPersonalData from "../../components/auth/signup/SignUpPersonalData";
import { Step, Steps, useSteps } from "chakra-ui-steps";

interface Param {
  func: () => void;
}

const SignUpPage = () => {
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const signup = <SignUpCredentials onclick={nextStep} />;
  const personalInfo = <SignUpPersonalData onclick={nextStep} />;
  const schedule = <SignUpCredentials onclick={nextStep} />;

  const steps = [
    { label: "Sign Up", content: signup },
    { label: "Personal Info", content: personalInfo },
    { label: "Your Schedule", content: schedule },
  ];

  return (
    <Box mx={150}>
      <Flex flexDir="column" width="100%" my={50}>
        <Steps activeStep={activeStep}>
          {steps.map(({ label, content }) => (
            <Step label={label} key={label}>
              {content}
            </Step>
          ))}
        </Steps>
        {activeStep === steps.length ? (
          <Flex p={4}>
            <Button mx="auto" size="sm" onClick={reset}>
              Reset
            </Button>
          </Flex>
        ) : null}
      </Flex>
    </Box>
  );
};

export default SignUpPage;
