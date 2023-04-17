import { FormControl, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";

interface IBulkActionButton {
  onBulkHandle?: (status: string) => void;
  isDisabled?: boolean;
  isDelete?: boolean;
  moreMenuItem?: String[];
}

function BulkActionButton(props: IBulkActionButton) {
  const { onBulkHandle, isDisabled, isDelete = true, moreMenuItem } = props;

  const handleChange = (event: SelectChangeEvent) => {
    if (onBulkHandle) onBulkHandle(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select
        displayEmpty
        disabled={!isDisabled}
        inputProps={{ "aria-label": "Without label" }}
        size="small"
        value=""
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>Bulk Actions</em>
        </MenuItem>
        {isDelete && <MenuItem value="delete">Delete</MenuItem>}
        {moreMenuItem?.map((item) => {
          return <MenuItem value={String(item)}>{item}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
export default BulkActionButton;
