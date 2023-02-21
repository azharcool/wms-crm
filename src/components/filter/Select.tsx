import CancelIcon from "@mui/icons-material/Cancel";
import { Stack, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MUISelect from "@mui/material/Select";
import DateRangePicker from "components/DateRangePicker";
import palette from "theme/palette";

type IMenuItem = {
  id: number;
  value: string;
};

interface ISelect {
  menuItems?: IMenuItem[];
  isDateRange?: boolean;
  placeholder?: string;
  handleChange: (e: any) => void;
  handleFocus?: (e: any) => void;
  selectValue: string | boolean | number | undefined;
  name: string;
  isInput?: boolean;
  hasValues?: boolean;
  onClear?: () => void;
}

function Select(props: ISelect) {
  const {
    menuItems,
    isDateRange,
    placeholder,
    handleChange,
    handleFocus,
    selectValue,
    name,
    isInput,
    hasValues,
    onClear,
  } = props;

  return (
    <Stack alignItems="center" direction="row" gap={2} width="100%">
      {isDateRange ? (
        <Stack sx={{ width: "100%" }}>
          <DateRangePicker
            format="MMM Do, YYYY"
            label=""
            separator=""
            value={selectValue}
            onChange={handleChange}
          />
        </Stack>
      ) : isInput ? (
        <TextField
          name={name}
          placeholder={placeholder}
          sx={{ width: "100%" }}
          value={selectValue}
          onClick={handleFocus}
        />
      ) : (
        <MUISelect
          displayEmpty
          fullWidth
          inputProps={{ "aria-label": "Without label" }}
          name={name}
          value={selectValue}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>{placeholder}</em>
          </MenuItem>
          {menuItems?.map((menu) => {
            const value = hasValues
              ? Object.values(menu).join(",")
              : menu.value;
            return (
              <MenuItem key={menu.id} value={value}>
                <em>{menu.value}</em>
              </MenuItem>
            );
          })}
        </MUISelect>
      )}

      <CancelIcon
        sx={{
          color: palette.secondary.lightGray,
        }}
        onClick={onClear}
      />
    </Stack>
  );
}

export default Select;
