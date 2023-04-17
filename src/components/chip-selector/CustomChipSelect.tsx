import {
  FormControl,
  InputLabel,
  Select,
  Chip,
  MenuItem,
  Checkbox,
  ListItemText
} from "@mui/material";
import { Box } from "@mui/system";
import palette from "theme/palette";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface ICustomChipSelect {
  handleChange?: (e: any) => void;
  values?: string[];
  accessItems: string[];
  screenName: String;
  name: string;
}

function CustomChipSelect(Props: ICustomChipSelect) {
  const { accessItems, screenName, name, handleChange, values = [] } = Props;

  return (
    <FormControl sx={{ m: 1, width: 500 }}>
      <InputLabel size="small" id={name}>
        {screenName}
      </InputLabel>
      <Select
        id={name}
        multiple
        name={name}
        label={screenName}
        labelId={name}
        value={values}
        size="small"
        onChange={handleChange}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                key={value.toString()}
                size="small"
                sx={{
                  backgroundColor: palette.warning.dark,
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 15,
                }}
                label={value}
              />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {accessItems?.map((item) => (
          <MenuItem key={item} value={item}>
            <Checkbox checked={values?.indexOf(item) > -1} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomChipSelect;
