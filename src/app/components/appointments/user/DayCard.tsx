import { FC, useState } from "react";
import { Box, Flex, Heading, Stack, Spacer } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import _ from "lodash";

interface Props {
  day: string;
}

const DayCard: FC<Props> = (props) => {
  const [bg, setBg] = useState("gray.800");
  const { users } = useAuth();

  return (
    <Box>
      <Box borderWidth="2px" borderBottomColor="teal" bg={bg}>
        <Heading size={"md"} textAlign={"center"} py={3}>
          {props.day}
        </Heading>
      </Box>
      {users?.schedule.map((hour: any) => {
        return (
          <Box
            h={"80px"}
            borderWidth="1px"
            _hover={{
              background: "gray.700",
              color: "teal.500",
            }}
            onClick={() => {
              console.log("ogete");
            }}
          >
            <Flex fontWeight={500} mx={3} mt={2}>
              {hour}0
              <Spacer />
              {Object.keys(users.appointments).includes(props.day) === true
                ? _.toArray(users.appointments[props.day]).map((houur: any) => {
                    if (houur.hour === hour) {
                      return (
                        <Stack>
                          <Flex>Name: {houur.fullName}</Flex>
                          <Flex>Email: {houur.email}</Flex>
                          <Flex>Phone: {houur.phone}</Flex>
                        </Stack>
                      );
                    }
                  })
                : null}
              <Spacer />
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default DayCard;
