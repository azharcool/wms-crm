import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputAdornment,
  InputProps,
  TextField as InputField,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import palette from "theme/palette";

type IOnSelect = (_: SelectChangeEvent) => void;

interface IMenuOption {
  value: string;
  id: string | number;
}

interface Props extends InputProps {
  style?: any;
  label?: string;
  FieldLabel?: string;
  helperText?: string;
  icon?: React.ReactElement;
  iconEnd?: boolean;
  isSelect?: boolean;
  onSelectHandler?: IOnSelect;
  selectValue?: string | number;
  menuItems?: IMenuOption[];
  className?: string;

  name: string;
  minDate?: any;
  size?: "small" | "medium";
  length?: number;
  muliline?: boolean;
  rows?: number;
  id?: string;
}

function TextField(props: Props) {
  const {
    name,
    type,
    value,
    disabled,
    error,
    label,
    onChange,
    onSelectHandler,
    onBlur,
    placeholder,
    required,
    style,
    helperText,
    icon,
    iconEnd,
    isSelect,
    id,
    menuItems,
    className,
    minDate,
    length,
    size,
    rows,
    multiline,
    FieldLabel,
  } = props;

  return (
    <FormControl sx={style}>
      {FieldLabel && (
        <FormLabel
          htmlFor={name}
          sx={{
            // color: "inherit",
            fontSize: { xs: "1rem", xl: "1.3rem", fontWeight: "500" },
            marginTop: "5px",
            textTransform: "capitalize",
          }}
        >
          {FieldLabel}
        </FormLabel>
      )}

      {!isSelect ? (
        <InputField
          aria-describedby="my-helper-text"
          // autoComplete="current-password"
          className={className}
          color="success"
          disabled={disabled}
          error={error}
          id={id}
          inputProps={{
            maxLength: length,
            startAdornment: iconEnd ? null : (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
            endAdornment: iconEnd ? (
              <InputAdornment position="end">{icon}</InputAdornment>
            ) : null,
            min: minDate,
          }}
          label={label}
          multiline={multiline}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows}
          size={size}
          sx={{
            // backgroundColor: "#fff",
            borderRadius: "8px",
            fontSize: { xs: "1rem", xl: "1.3rem" },
          }}
          type={type}
          value={value}
          variant="outlined"
          onBlur={onBlur}
          onChange={onChange}
        />
      ) : (
        <Select
          displayEmpty
          className={className}
          disabled={disabled}
          error={error}
          size={size}
          // inputProps={{ "aria-label": "Without label" }}
          // sx={{ backgroundColor: "#fff" }}
          value={value?.toString()}
          onChange={onSelectHandler}
        >
          {placeholder && (
            <MenuItem value="">
              <em>{placeholder}</em>
            </MenuItem>
          )}

          {menuItems?.map((item) => {
            return (
              <MenuItem key={item.value} value={item.id}>
                {item.value}
              </MenuItem>
            );
          })}
        </Select>
      )}

      {helperText && (
        <FormHelperText id="my-helper-text" sx={{ color: palette.error.dark }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

TextField.defaultProps = {
  style: {
    width: "100%",
    marginBottom: "10px",
  },
  helperText: "",
};

export default TextField;
