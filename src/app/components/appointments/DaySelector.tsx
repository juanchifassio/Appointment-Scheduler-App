import { useState, FC } from "react";
import { Box, Text, Button, useToast } from "@chakra-ui/react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { set, ref, getDatabase } from "firebase/database";

interface Props {
  sMan: any;
  onclick: Function;
}

const DaySelector: FC<Props> = (props) => {
  const [day, setDay] = useState(null);
  const [dayDisp, setDayDisp] = useState();

  const toast = useToast();

  const handleDayClick = (e: any) => {
    setDay(e.toLocaleDateString());
    setDayDisp(e);
  };

  const disableDaysArray = (props: any) => {
    var dayArray = [0, 1, 2, 3, 4, 5, 6];
    var excludedDays = [];
    if (props !== undefined) {
      for (var i = 0; i < dayArray.length; i++) {
        if (i < props.startWeekday || i > props.endWeekday) {
          excludedDays.push(i);
        }
      }
      return excludedDays;
    } else {
      return dayArray;
    }
  };

  const saveDay = () => {
    if (day !== null) {
      set(
        ref(
          getDatabase(),
          `users/${props?.sMan.scheduleID}/appointments/${day}`
        ),
        {}
      );
      props.onclick();
    } else {
      toast({
        title: "You must select a day first!",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box>day Selector!!!!</Box>
      <DayPicker
        fromMonth={new Date(2022, 1)}
        showOutsideDays
        selectedDays={dayDisp}
        onDayClick={(e) => handleDayClick(e)}
        disabledDays={[
          {
            daysOfWeek: disableDaysArray(props.sMan.appointmentsInfo),
          },
        ]}
      />

      <Text>{day}</Text>
      <Box my={10}>
        <Button size="sm" onClick={saveDay}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default DaySelector;
