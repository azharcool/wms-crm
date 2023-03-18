import { FormControl, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";

interface IBulkActionButton {
  onBulkHandle?: (status: string) => void;
}

function BulkActionButton(props: IBulkActionButton) {
  const { onBulkHandle } = props;

  const handleChange = (event: SelectChangeEvent) => {
    if (onBulkHandle) onBulkHandle(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        size="small"
        value=""
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Bulk Actions</em>
        </MenuItem>
        <MenuItem value="delete">Delete</MenuItem>
      </Select>
    </FormControl>
  );
}
export default BulkActionButton;
