import { Stack } from "@mui/material";
// eslint-disable-next-line import/no-extraneous-dependencies
import { DatePicker, Form } from "antd";

interface IDateRangeProps {
  format: string;
  separator: string;
  value: any;
  label: string;
  onChange: (e: any) => void;
}

function DateRangePicker(props: IDateRangeProps) {
  const { label, format, separator, value, onChange } = props;
  return (
    <Stack>
      <Form.Item label={label}>
        <DatePicker.RangePicker
          allowClear={false}
          format={format}
          separator={separator}
          style={{
            padding: "15px",
            width: "100%",
            color: "#000",
          }}
          value={value}
          onChange={onChange}
        />
      </Form.Item>
    </Stack>
  );
}
export default DateRangePicker;
