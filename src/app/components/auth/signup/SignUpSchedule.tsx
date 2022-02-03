import { FC, useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Select,
  Flex,
  Button,
  useToast,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import { appointmentsLength } from "../../../data/AppointmentsLength";
import { Weekdays } from "../../../data/Weekdays";
import { Hours } from "../../../data/Hours";
import { asd } from "../../functions/asd";
import { useNavigate } from "react-router-dom";

interface Props {
  error: Function;
}

const SignUpSchedule: FC<Props> = (props) => {
  const [appointmentLength, setAppointmentLength] = useState<number>(0);
  const [startHour, setStartHour] = useState<number>(0);
  const [endHour, setEndHour] = useState<number>(0);
  const [startWeekday, setStartWeekday] = useState<number>(0);
  const [endWeekday, setEndWeekday] = useState<number>(0);
  const [editIndex, setEditIndex] = useState<null | number>(null);

  const toast = useToast();
  const navigate = useNavigate();

  const toastErrorMsg = (error: string) => {
    toast({
      title: error,
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  };

  const submitSchedule = () => {
    if (appointmentLength !== 0 && startHour !== 0 && endHour > startHour) {
      if (startWeekday < endWeekday) {
        asd(appointmentLength, startHour, endHour);
        toast({
          title: "Successfully saved schedule.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
        navigate("/profile");
      } else {
        toastErrorMsg("Select a correct weekday interval");
      }
    } else {
      toastErrorMsg("Select a correct hour interval");
    }
  };

  useEffect(() => {
    props.error("loading");
  }, []);

  return (
    <Box mx={200} mt={50}>
      <FormControl>
        <Flex justify={"center"} w={"100%"} mt={10} mb={3}>
          <FormLabel htmlFor="appointment-length">
            Select your appointment length
          </FormLabel>
        </Flex>
        <Flex justify={"center"}>
          {appointmentsLength.map((length, index) => {
            return (
              <Button
                key={length.length}
                mx={2}
                colorScheme={editIndex === index ? "cyan" : "gray"}
                onClick={() => {
                  setAppointmentLength(parseInt(length.length));
                  setEditIndex((editIndex) =>
                    editIndex === index ? null : index
                  );
                }}
              >
                {length.length}
                {" min"}
              </Button>
            );
          })}
        </Flex>
        <Grid templateColumns="repeat(2, 1fr)" my={50}>
          <GridItem>
            <HStack mx={10}>
              <FormLabel
                htmlFor="start-hour"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                Start Hour:{" "}
              </FormLabel>
              <Select
                onChange={(e) => {
                  var hour = e.target.value.slice(0, -3);
                  setStartHour(parseInt(hour) * 60);
                }}
              >
                {Hours.map((hour) => {
                  return (
                    <option key={hour.hour} value={hour.hour}>
                      {hour.hour}
                    </option>
                  );
                })}
              </Select>
            </HStack>
          </GridItem>
          <GridItem>
            <HStack mx={10}>
              <FormLabel
                htmlFor="end-hour"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                End Hour:{" "}
              </FormLabel>
              <Select
                onChange={(e) => {
                  var hour = e.target.value.slice(0, -3);
                  setEndHour(parseInt(hour) * 60);
                }}
              >
                {Hours.map((hour) => {
                  return (
                    <option key={hour.hour} value={hour.hour}>
                      {hour.hour}
                    </option>
                  );
                })}
              </Select>
            </HStack>
          </GridItem>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" my={50}>
          <GridItem>
            <HStack mx={10}>
              <FormLabel htmlFor="start-weekday">Start Weekday: </FormLabel>
              <Select
                onChange={(e) => {
                  setStartWeekday(parseInt(e.target.value));
                }}
              >
                {Weekdays.map((day) => {
                  return (
                    <option key={day.day} value={day.id}>
                      {day.day}
                    </option>
                  );
                })}
              </Select>
            </HStack>
          </GridItem>
          <GridItem>
            <HStack mx={10}>
              <FormLabel htmlFor="end-weekday">End Weekday: </FormLabel>
              <Select
                onChange={(e) => {
                  setEndWeekday(parseInt(e.target.value));
                }}
              >
                {Weekdays.map((day) => {
                  return (
                    <option key={day.day} value={day.id}>
                      {day.day}
                    </option>
                  );
                })}
              </Select>
            </HStack>
          </GridItem>
        </Grid>
      </FormControl>
      <Flex justify={"center"} my={10}>
        <Button onClick={submitSchedule} variant="ghost">
          Next
        </Button>
      </Flex>
    </Box>
  );
};

export default SignUpSchedule;
