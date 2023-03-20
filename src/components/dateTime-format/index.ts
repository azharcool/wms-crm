import moment from "moment";

function DateTimeFormat(date: string) {
  return moment(date).format("MMMM Do YYYY, h:mm:ss");
}

export default DateTimeFormat;
