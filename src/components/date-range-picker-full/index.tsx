/* eslint-disable import/no-extraneous-dependencies */

import { makeStyles } from "@material-ui/core/styles";

// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from "react";

import { addDays, subDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const useStyles = makeStyles({
  calender: {
    border: "1px solid #c4c4c4",
  },
});

type IState = {
  startDate: Date;
  endDate: Date;
  key: string;
}[];

export interface Props {
  handleChange: (range: any) => void;
}

function DateRangePickerFull(props: Props) {
  const { handleChange } = props;
  const classes = useStyles();

  const [state, setState] = useState<IState>([
    {
      startDate: subDays(new Date(), 0),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const handleOnChange = (ranges: any) => {
    const { selection } = ranges;
    handleChange(selection);
    setState([selection]);
  };
  return (
    <DateRangePicker
      //   showSelectionPreview

      className={`${classes.calender}`}
      direction="horizontal"
      months={2}
      ranges={state}
      onChange={handleOnChange}
    />
  );
}

export default DateRangePickerFull;
