import { TableCell, TableRow } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HistoryListItem() {
  const newtheme = useSelector((state: any) => state.theme);
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
       link
      </TableCell>

      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
       Description
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
