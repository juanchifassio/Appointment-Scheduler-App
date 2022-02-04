import { FC, useState } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";

interface Props {
  sMan: any;
  onclick: Function;
}
const HourSelector: FC<Props> = (props) => {
  const [editIndex, setEditIndex] = useState<null | number>(null);
  const [hour, setHour] = useState<String>("");

  const toast = useToast();

  const saveHour = () => {
    if (hour !== "") {
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

  return (
    <>
      <Box my={10}>HourSelector</Box>
      {props.sMan.schedule.map((hour: string, index: number) => {
        return (
          <>
            <Button
              key={index}
              mx={2}
              colorScheme={editIndex === index ? "cyan" : "gray"}
              onClick={() => {
                setHour(hour);
                setEditIndex((editIndex) =>
                  editIndex === index ? null : index
                );
              }}
            >
              {hour}
            </Button>
          </>
        );
      })}
      <Box my={10}>
        <Button size="sm" onClick={saveHour}>
          Next
        </Button>
      </Box>
    </>
  );
};

export default HourSelector;
