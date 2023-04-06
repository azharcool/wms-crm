import { FormControl, InputProps, TextField } from "@mui/material";
import Chip from "@mui/material/Chip";
import { SxProps, Theme } from "@mui/material/styles";

interface IChip {
  id: string;
  value: string;
}

interface ITextFieldChip extends InputProps {
  id: string;
  chips: IChip[];
  label?: string;
  handleDelete?: (_: IChip) => void;
  handleKeyDown?: (_: string) => void;
  sxForm?: SxProps<Theme>;
}

function TextFieldChip(props: ITextFieldChip) {
  const {
    label,
    size,
    chips,
    handleDelete,
    style,
    onChange,
    handleKeyDown,
    value,
    disabled,
    id,
    name,
    sx,
    sxForm,
  } = props;
  return (
    <FormControl sx={sxForm}>
      <TextField
        disabled={disabled}
        id={id}
        InputLabelProps={{ focused: false }}
        InputProps={{
          startAdornment:
            chips.length > 0 &&
            chips.map((item) => {
              return (
                <Chip
                  key={item.id}
                  label={item.value}
                  size={size}
                  sx={{
                    marginX: 1,
                  }}
                  onDelete={handleDelete ? () => handleDelete(item) : undefined}
                />
              );
            }),
        }}
        label={label}
        name={name}
        size={size}
        style={style}
        sx={sx}
        value={value}
        variant="outlined"
        onChange={onChange}
        onKeyDown={(e) => handleKeyDown && handleKeyDown(e.key)}
      />
    </FormControl>
  );
}

export default TextFieldChip;
