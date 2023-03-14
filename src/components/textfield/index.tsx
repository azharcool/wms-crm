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
import { styled } from "@mui/material/styles";
import * as React from "react";
import palette from "theme/palette";

type IOnSelect = (_: SelectChangeEvent) => void;

interface IOptios {
  value: string;
  id: number;
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
  menuItems?: any[];
  className?: string;
  hasAllValue?: boolean;
  name: string;
  minDate?: any;
  size: "small" | "medium" | undefined;
  length?: number;
  multiline?: boolean;
  rows?: number;
  id: string | undefined;
}

const CustomField = styled(InputField)({
  // "& input + fieldset": {
  //   border: "none",
  //   borderBottom: "1px solid transparent",
  // },
  // "& input:valid + fieldset": {
  //   borderColor: " green",
  //   borderWidth: 2,
  // },
  // "& input:invalid + fieldset": {
  //   borderColor: "red",
  //   borderWidth: 2,
  // },
  // "& input:valid:focus + fieldset": {
  //   borderLeftWidth: 6,
  //   padding: "4px !important", // override inline-style
  // },
});

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
    selectValue,
    menuItems,
    className,
    hasAllValue,
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
        <CustomField
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
          <MenuItem value="">
            <em>{placeholder}</em>
          </MenuItem>
          {menuItems?.map((item) => {
            const values = Object.values(item).join(",");
            return (
              <MenuItem key={item.value} value={hasAllValue ? values : item.id}>
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
