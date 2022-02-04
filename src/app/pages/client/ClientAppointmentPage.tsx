import { useEffect, useState } from "react";
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { useParams } from "react-router-dom";
import { getDatabase, ref, onValue } from "firebase/database";
import DaySelector from "../../components/appointments/DaySelector";
import HourSelector from "../../components/appointments/HourSelector";
import AppointmentConfirm from "../../components/appointments/AppointmentConfirm";

const ClientAppointmentPage = () => {
  const { nextStep, reset, prevStep, activeStep } = useSteps({
    initialStep: 0,
  });
  const [serviceMan, setServiceMan] = useState<any>({});

  const { id } = useParams();

  const daySelector = <DaySelector sMan={serviceMan} onclick={nextStep} />;
  const hourSelector = <HourSelector sMan={serviceMan} onclick={nextStep} />;
  const Confirm = <AppointmentConfirm sMan={serviceMan} onclick={nextStep} />;

  const steps = [
    { label: "Select a Day", content: daySelector },
    { label: "Select an hour", content: hourSelector },
    { label: "Confirm your appointment", content: Confirm },
  ];

  useEffect(() => {
    const user = ref(getDatabase(), `users/${id}`);
    onValue(user, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setServiceMan(data);
    });
  }, [id]);
  return (
    <Box h={"80vh"} mx={200} my={50}>
      <Heading>{`You are about to book a ${serviceMan.service} appoinment with ${serviceMan.fname} ${serviceMan.lname}`}</Heading>
      <Heading>{`Service Description: ${serviceMan.servicedesc}`}</Heading>
      <Box mx={150} minH={"86vh"}>
        <Flex flexDir="column" width="100%" my={50}>
          <Steps orientation="vertical" activeStep={activeStep}>
            {steps.map(({ label, content }) => (
              <Step label={label} key={label}>
                {content}
              </Step>
            ))}
          </Steps>
          {activeStep === steps.length ? (
            <Flex px={4} py={4} width="100%" flexDirection="column">
              <Heading fontSize="xl" textAlign="center">
                Woohoo! All steps completed!
              </Heading>
              <Button mx="auto" mt={6} size="sm" onClick={reset}>
                Reset
              </Button>
            </Flex>
          ) : (
            <Flex width="100%" justify="flex-end">
              <Button
                isDisabled={activeStep === 0}
                mr={4}
                onClick={prevStep}
                size="sm"
                variant="ghost"
              >
                Prev
              </Button>
            </Flex>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default ClientAppointmentPage;
