import Autocomplete from "@mui/material/Autocomplete";
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
}
function CustomAutoComplete(props: ICustomAutomComplete) {
  const { options, id, inputlabel, setValue, inputValue, setInputValue } =
    props;
  return (
    <Autocomplete
      id={id}
      inputValue={inputValue}
      options={options}
      renderInput={(params) => <TextField {...params} label={inputlabel} />}
      value={null}
      onChange={(_: any, newValue) => {
        setValue(newValue);
        setInputValue("");
      }}
      onInputChange={(e, newValue) => {
        setInputValue(newValue);
      }}
    />
  );
}

export default CustomAutoComplete;
