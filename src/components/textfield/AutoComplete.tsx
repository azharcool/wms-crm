import {
  Autocomplete,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import React from "react";
import palette from "theme/palette";

interface IAutoComplete {
  options: any[];
  label?: string;
  handleChange?: any;
  getOptionLabel?: any;
  helperText?: string;
}

function AutoComplete(props: IAutoComplete) {
  const { options, handleChange, helperText, label, getOptionLabel } = props;
  return (
    <FormControl sx={{ width: "100%" }}>
      <Autocomplete
        options={options}
        size="small"
        sx={{
          borderRadius: "8px",
          fontSize: { xs: "1rem", xl: "1.3rem" },
        }}
        onChange={handleChange}
        getOptionLabel={getOptionLabel}
        renderInput={(params) => <TextField {...params} label={label} />}
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
