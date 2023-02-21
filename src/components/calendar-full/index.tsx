import { Box } from "@mui/system";
import moment from "moment";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Calendar, momentLocalizer } from "react-big-calendar";
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

const myEventsList = [
  {
    start: moment({ hours: 8 }).toDate(),
    end: moment({ hours: 10 }).toDate(),
    title: "Event 1",
  },
  {
    start: moment({ hours: 8 }).toDate(),
    end: moment({ hours: 10 }).toDate(),
    title: "Event 2",
  },
  {
    start: moment({ hours: 8 }).toDate(),
    end: moment({ hours: 10 }).toDate(),
    title: "Event 3",
  },
  {
    start: moment({ hours: 8 }).toDate(),
    end: moment({ hours: 10 }).toDate(),
    title: "Event 4",
  },
  {
    start: moment({ hours: 8 }).toDate(),
    end: moment({ hours: 10 }).toDate(),
    title: "Event 5",
  },
];

function CalendarFull() {
  const localizer = momentLocalizer(moment);
  return (
    <Box
      sx={{
        height: 500,
        width: "98%",
      }}
    >
      <Calendar
        events={myEventsList}
        localizer={localizer}
        style={{ height: 500, margin: "15px" }}
      />
    </Box>
  );
}
export default CalendarFull;
