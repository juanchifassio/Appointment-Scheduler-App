import { FC, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useAuth } from "../../contexts/AuthContext";

interface Props {
  day: string;
}

const DayCard: FC<Props> = (props) => {
  const [asd, setAsd] = useState();

  const { currentUser, users } = useAuth();

  useEffect(() => {
    console.log(users);
  }, [currentUser, props]);

  return <Box>{props.day}</Box>;
};

export default DayCard;
