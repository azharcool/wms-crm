import { Autocomplete, TextField } from "@mui/material";
import React from "react";

interface IAutoComplete {
  options: any[];
  label?: string;
  handleChange?: any;
  getOptionLabel?: any;
}

function AutoComplete(props: IAutoComplete) {
  const { options, handleChange, label, getOptionLabel } = props;
  return (
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
  );
}

export default AutoComplete;
