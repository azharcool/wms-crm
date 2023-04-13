import {
  Autocomplete,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import palette from "theme/palette";

interface IAutoComplete {
  options: any[];
  label?: string;
  handleChange?: any;
  getOptionLabel?: any;
  helperText?: string;
  defaultValue?: string | number | Object;
  disabled?: boolean;
  id?: string;
}

function AutoComplete(props: IAutoComplete) {
  const {
    options,
    handleChange,
    helperText,
    label,
    id,
    getOptionLabel,
    defaultValue,
    disabled,
  } = props;

  return (
    <FormControl sx={{ width: "100%" }}>
      <Autocomplete
        disabled={disabled}
        getOptionLabel={getOptionLabel}
        id={id}
        renderInput={(params) => <TextField {...params} label={label} />}
        size="small"
        sx={{
          borderRadius: "8px",
          fontSize: { xs: "1rem", xl: "1.3rem" },
        }}
        onChange={handleChange}
        options={options}
        // value={value}
        defaultValue={defaultValue && defaultValue}
      />
      {helperText && (
        <FormHelperText id="my-helper-text" sx={{ color: palette.error.dark }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default AutoComplete;
