import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// eslint-disable-next-line import/no-extraneous-dependencies
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
// eslint-disable-next-line import/no-extraneous-dependencies
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  DateRange,
  DateRangePicker as MUIDateRangePicker,
} from "@mui/x-date-pickers-pro/DateRangePicker";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Dayjs } from "dayjs";
import { useState } from "react";

function DateRangePicker() {
  const [value, setValue] = useState<DateRange<Dayjs>>([null, null]);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{ start: "Check-in", end: "Check-out" }}
    >
      <MUIDateRangePicker
        renderInput={(startProps: any, endProps: any) => (
          <>
            <TextField {...startProps} style={{ width: "60%" }} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} style={{ width: "60%" }} />
          </>
        )}
        value={value}
        onChange={(newValue: any) => {
          setValue(newValue);
        }}
      />
    </LocalizationProvider>
  );
}

export default DateRangePicker;
