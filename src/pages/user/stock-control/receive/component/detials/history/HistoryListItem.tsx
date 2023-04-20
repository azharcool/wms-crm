import HistoryIcon from "@mui/icons-material/History";
import { IconButton, TableCell, TableRow } from "@mui/material";
import "react-perfect-scrollbar/dist/css/styles.css";

interface IHistoryListItem {
  item: any;
}

function HistoryListItem(_: IHistoryListItem) {
  return (
    <TableRow hover>
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
        <IconButton>
          <HistoryIcon sx={{ fontSize: 25, color: "#333" }} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default HistoryListItem;
