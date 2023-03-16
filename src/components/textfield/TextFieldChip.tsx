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
}

function TextFieldChip(props: ITextFieldChip) {
  const { label, size, chips, handleDelete, style } = props;
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
        onChange={() => {}}
      />
    </FormControl>
  );
}

export default TextFieldChip;
