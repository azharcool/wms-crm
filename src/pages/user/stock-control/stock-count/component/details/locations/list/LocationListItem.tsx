import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import "react-perfect-scrollbar/dist/css/styles.css";

interface ILocationListItem {
  item: any;
}
function LocationListItem(_: ILocationListItem) {
  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          width: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox color="primary" />
      </TableCell>
      <TableCell>
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          -
        </Typography>
      </TableCell>
      <TableCell sx={{ minWidth: 170 }}>-</TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        -
      </TableCell>
    </TableRow>
  );
}

export default LocationListItem;
