import { Box } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import { responsive } from "../../../../utils/responsive";
import "react-multi-carousel/lib/styles.css";
import moment from "moment";
import DayCard from "./DayCard";

const CalendarCarrousel = () => {
  const dayFormatter = (date: Date) => {
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0");
    var yyyy = date.getFullYear();
    return `${mm}-${dd}-${yyyy}`;
  };
  const futureDate = () => {
    function addMonthsUTC(date: Date, count: number) {
      if (date && count) {
        var m,
          d = (date = new Date(+date)).getUTCDate();

        date.setUTCMonth(date.getUTCMonth() + count, 1);
        m = date.getUTCMonth();
        date.setUTCDate(d);
        if (date.getUTCMonth() !== m) date.setUTCDate(0);
      }
      return date;
    }
    return dayFormatter(addMonthsUTC(new Date(), 1));
  };

  function getDates(startDate: string, stopDate: string) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopdate = moment(stopDate);
    while (currentDate <= stopdate) {
      dateArray.push(moment(currentDate).format("D-M-YYYY"));
      currentDate = moment(currentDate).add(1, "days");
    }
    return dateArray;
  }

  const dayCards = getDates(dayFormatter(new Date()), futureDate()).map(
    (day) => {
      return <DayCard day={day} />;
    }
  );

  return (
    <Box>
      <Carousel responsive={responsive}>{dayCards}</Carousel>
    </Box>
  );
};
export default CalendarCarrousel;
