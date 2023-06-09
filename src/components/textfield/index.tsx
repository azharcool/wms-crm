import {
  FormControl,
  FormHelperText,
  FormLabel,
  InputAdornment,
  TextField as InputField,
  InputLabel,
  InputProps,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { SxProps, Theme } from "@mui/material/styles";
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
  icon?: React.ReactElement | string;
  startIcon?: React.ReactElement | string;
  endIcon?: React.ReactElement | string;
  iconEnd?: boolean;
  isSelect?: boolean;
  onSelectHandler?: IOnSelect;
  selectValue?: string | number;
  menuItems?: IMenuOption[];
  className?: string;
  onKeyDown?: React.KeyboardEventHandler<any>;
  name: string;
  minDate?: any;
  size?: "small" | "medium";
  length?: number;
  muliline?: boolean;
  rows?: number;
  id?: string;
  onClickIcon?: React.MouseEventHandler<HTMLDivElement>;
  nameRef?: any;
  darkDisable?: boolean;
  autoComplete?: string;
  maxInputLength?: number;
  sxMenuListProps?: SxProps<Theme>;
}

function TextField(props: Props) {
  const {
    name,
    type,
    value,
    disabled,
    error,
    nameRef,
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
    startIcon,
    endIcon,
    isSelect,
    id,
    menuItems,
    className,
    size,
    rows,
    multiline,
    FieldLabel,
    onClickIcon,
    darkDisable,
    onKeyDown,
    autoComplete,
    sxMenuListProps,
  } = props;

  const inputLabelProps =
    (value && (disabled || darkDisable)) || type === "date"
      ? { shrink: true, position: "top" }
      : {};

  return (
    <FormControl sx={style}>
      {FieldLabel && (
        <FormLabel
          htmlFor={name}
          sx={{
            // color: "inherit",
            fontSize: { xs: "0.6rem", xl: "1rem", fontWeight: "500" },
            marginTop: "5px",
            textTransform: "capitalize",
          }}
        >
          {FieldLabel}
        </FormLabel>
      )}

      {!isSelect ? (
        <InputField
          autoComplete={autoComplete}
          color="success"
          disabled={disabled}
          error={error}
          id={id}
          InputLabelProps={inputLabelProps}
          InputProps={{
            startAdornment: startIcon && (
              <InputAdornment
                position="start"
                sx={{ cursor: "pointer" }}
                onClick={onClickIcon}
              >
                {startIcon}
              </InputAdornment>
            ),

            endAdornment: endIcon && (
              <InputAdornment
                position="end"
                sx={{ cursor: "pointer" }}
                onClick={onClickIcon}
              >
                {endIcon}
              </InputAdornment>
            ),
          }}
          inputRef={nameRef}
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
            "& .MuiInputBase-input.Mui-disabled": {
              WebkitTextFillColor: darkDisable ? "#000000" : "inherit",
            },
          }}
          type={type}
          value={value}
          variant="outlined"
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={onKeyDown}
          aria-describedby="my-helper-text"
          // autoComplete="current-password"
          className={className}
        />
      ) : (
        <>
          <InputLabel id={id} size="small">
            {label}
          </InputLabel>
          <Select
            // displayEmpty
            className={className}
            disabled={disabled}
            error={error}
            id={id}
            label={label}
            labelId={id}
            MenuProps={{
              sx: {
                maxHeight: "300px",
              },
              MenuListProps: {
                sx: {
                  // default
                  ...sxMenuListProps,
                },
              },
            }}
            size={size}
            sx={{
              boxShadow: "none",
            }}
            value={value?.toString()}
            onChange={onSelectHandler}
          >
            <MenuItem disabled={Boolean(placeholder)} value="">
              <em>{placeholder || "None"}</em>
            </MenuItem>

            {menuItems?.map((item) => {
              return (
                <MenuItem key={item.value} value={item.id}>
                  {item.value}
                </MenuItem>
              );
            })}
          </Select>
        </>
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
