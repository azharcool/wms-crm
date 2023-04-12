import Autocomplete from "@mui/material/Autocomplete";
import { SxProps, Theme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export interface IAutoCompleteOption {
  id: string;
  label: string;
}
interface ICustomAutomComplete {
  options: IAutoCompleteOption[];
  id: string;
  inputlabel: string;
  setValue: (_: IAutoCompleteOption | null) => void;
  inputValue: string;
  setInputValue: (_: string) => void;
  sxProps?: SxProps<Theme>;
  disabled?: boolean;
}

function CustomAutoComplete(props: ICustomAutomComplete) {
  const {
    options,
    id,
    inputlabel,
    setValue,
    inputValue,
    setInputValue,
    sxProps,
    disabled,
  } = props;

  return (
    <Autocomplete
      disabled={disabled}
      id={id}
      inputValue={inputValue}
      options={options}
      renderInput={(params) => <TextField {...params} label={inputlabel} />}
      size="small"
      sx={sxProps}
      value={null}
      onChange={(_: any, newValue) => {
        setValue(newValue);
        // setInputValue("");
      }}
      onInputChange={(e, newValue) => {
        setInputValue(newValue);
      }}
    />
  );
}

export default CustomAutoComplete;
