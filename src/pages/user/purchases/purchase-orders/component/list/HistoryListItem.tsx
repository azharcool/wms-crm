import HistoryIcon from "@mui/icons-material/History";
import { TableCell, TableRow } from "@mui/material";
import "react-perfect-scrollbar/dist/css/styles.css";

function HistoryListItem() {
  return (
    <TableRow>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        29/02/2023 03:12:33
      </TableCell>

      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        description
      </TableCell>

      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        Aasif sheikh
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        <HistoryIcon sx={{ fontSize: 20, color: "#333" }} />
      </TableCell>
    </TableRow>
  );
}

export default HistoryListItem;
