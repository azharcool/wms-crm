import { Box, Checkbox, Typography } from "@mui/material";
import palette from "theme/palette";
import { IColumn } from "./ContactTable";

interface IColumnListItem {
  name: string;
  isExist: boolean;
  column: IColumn;
  handleClick: (data: IColumn) => void;
}
function ColumnListItem(props: IColumnListItem) {
  const { name, isExist, handleClick, column } = props;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      onClick={() => {
        handleClick(column);
      }}
    >
      <Checkbox
        checked={!isExist}
        sx={{ padding: 0.6, color: palette.info.main }}
      />
      <Typography>{name}</Typography>
    </Box>
  );
}

export default ColumnListItem;
