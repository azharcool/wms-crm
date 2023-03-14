import {
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  InputProps,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

type IOnSelect = (_: SelectChangeEvent) => void;

interface Props extends InputProps {
  style?: any;
  label?: string;
  helperText?: string;
  icon?: React.ReactElement;
  iconEnd?: boolean;
  isSelect?: boolean;
  onSelectHandler?: IOnSelect;
  selectValue?: string | number;
  menuItems?: any[];
  className?: string;
  hasAllValue?: boolean;
  minDate?: any;
  length?: number;
  multiline?: boolean;
  rows?: number;
}

function CustomTextField(props: Props) {
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
    selectValue,
    menuItems,
    className,
    hasAllValue,

    minDate,
    length,
    size,
    rows,
    multiline,
  } = props;
  return (
    <FormControl sx={style}>
      {label && (
        <FormLabel
          htmlFor={name}
          sx={{
            // color: "inherit",
            fontSize: { xs: "1rem", xl: "1.3rem", fontWeight: "500" },
            marginTop: "5px",
            textTransform: "capitalize",
          }}
        >
          {label}
        </FormLabel>
      )}

      {!icon ? (
        <TextField
          defaultValue="Small"
          id="outlined-size-small"
          label="Size"
          size="small"
        />
      ) : (
        <>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" />
              </InputAdornment>
            }
            id="standard-adornment-password"
            // type={showPassword ? "text" : "password"}
          />
        </>
      )}
    </FormControl>
  );
}
export default CustomTextField;
