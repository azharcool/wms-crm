import moment from "moment";

function dateTimeFormat(date: string) {
  return moment(date).format("MMMM Do YYYY, h:mm:ss");
}

export default dateTimeFormat;
