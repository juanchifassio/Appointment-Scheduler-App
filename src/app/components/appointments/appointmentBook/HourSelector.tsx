import { FC, useState, useEffect } from "react";
import { Box, Button, useToast, Text } from "@chakra-ui/react";

interface Props {
  sMan: any;
  onclick: Function;
  fetchHour: Function;
  day: string;
}
const HourSelector: FC<Props> = (props) => {
  const [editIndex, setEditIndex] = useState<null | number>(null);
  const [dispHours, setDispHours] = useState<any>([]);
  const [hour, setHour] = useState<String>("");

  const toast = useToast();

  const saveHour = () => {
    if (hour !== "") {
      props.fetchHour(hour);
      props.onclick();
    } else {
      toast({
        title: "You must select a hour.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    if (props.sMan.appointments !== undefined) {
      if (props.sMan.appointments[props.day] !== undefined) {
        console.log(props.sMan.appointments[props.day]);
        var bookedHours = Object.keys(props.sMan.appointments[props.day]);
        var scheduleHours = Object.values(props.sMan.schedule);
        var dispHours = scheduleHours.filter((item: any) => {
          return !bookedHours.includes(item);
        });
        setDispHours(dispHours);
      } else {
        setDispHours(props.sMan.schedule);
      }
    } else {
      setDispHours(props.sMan.schedule);
    }
  }, [props]);

  return (
    <>
      <Box my={10}>HourSelector</Box>
      {dispHours.map((hour: string, index: number) => {
        return (
          <Button
            key={hour}
            mx={2}
            colorScheme={editIndex === index ? "cyan" : "gray"}
            onClick={() => {
              setHour(hour);
              setEditIndex((editIndex) => (editIndex === index ? null : index));
            }}
          >
            {hour}
          </Button>
        );
      })}
      {dispHours.length === 0 ? (
        <Text>There are no available turns</Text>
      ) : (
        <>
          <Box my={10}>
            <Button size="sm" onClick={saveHour}>
              Next
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default HourSelector;
