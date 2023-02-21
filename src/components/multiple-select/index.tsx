import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "react-perfect-scrollbar/dist/css/styles.css";
import palette from "theme/palette";

export type IMenuItems = { id: number; value: string }[];
type IHandler = string[];
interface IMultipleSelect {
  placeholder: string;
  menuItems: IMenuItems;
  onChangeHandler: (_: IHandler) => void;
  selectedMenuItem: IHandler;
}

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

function MultipeSelect(props: IMultipleSelect) {
  const { menuItems, onChangeHandler, selectedMenuItem, placeholder } = props;

  const handleChange = (event: SelectChangeEvent<typeof selectedMenuItem>) => {
    const {
      target: { value },
    } = event;
    onChangeHandler(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <Select
        displayEmpty
        multiple
        id="demo-multiple-checkbox"
        labelId="demo-multiple-checkbox-label"
        MenuProps={MenuProps}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>{placeholder}</em>;
          }
          return selected.map((i) => i.split(",")[1] || "").join(", ");
        }}
        sx={{
          backgroundColor: palette.background.default,
        }}
        value={selectedMenuItem}
        onChange={handleChange}
      >
        {menuItems.map((menu) => {
          const values = Object.values(menu).join(",");
          const isChecked = selectedMenuItem
            .find((i) => i.split(",")[0].trim() === String(menu.id))
            ?.split(",")[0]
            .trim();
          return (
            <MenuItem key={menu.id} value={values}>
              <Checkbox checked={Boolean(isChecked)} />
              <ListItemText primary={menu.value} />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default MultipeSelect;
