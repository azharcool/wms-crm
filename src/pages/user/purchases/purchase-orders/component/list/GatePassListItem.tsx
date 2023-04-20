import { TableCell, TableRow } from "@mui/material";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";

function GatePassListItem() {
  const navigate = useNavigate();
  return (
    <TableRow>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        {/* numbe */}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        {/* createdat */}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        {/* numberplate */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        {/* invoicenumber */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        {/* fileUrl */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        {/* receive */}
      </TableCell>
    </TableRow>
  );
}

export default GatePassListItem;
