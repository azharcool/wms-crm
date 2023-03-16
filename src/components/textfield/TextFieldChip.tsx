import { FormControl, InputProps, TextField } from "@mui/material";
import Chip from "@mui/material/Chip";

interface IChip {
  id: string;
  value: string;
}

interface ITextFieldChip extends InputProps {
  id: string;
  chips: IChip[];
  label?: string;
  size?: "small" | "medium";
  handleDelete?: (_: IChip) => void;
  style?: any;
  handleKeyDown?: (_: string) => void;
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
  } = props;
  return (
    <FormControl>
      <TextField
        id="chip"
        InputProps={{
          startAdornment: chips.map((item) => {
            return (
              <Chip
                key={item.id}
                label={item.value}
                sx={{
                  marginX: 1,
                }}
                onDelete={() => handleDelete && handleDelete(item)}
              />
            );
          }),
        }}
        label={label}
        name="chip"
        size={size}
        style={style}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => handleKeyDown && handleKeyDown(e.key)}
      />
    </FormControl>
  );
}

export default TextFieldChip;
