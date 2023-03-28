import { Box, Checkbox, Stack, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";

function GatePassListItem() {
  const newtheme = useSelector((state: any) => state.theme);
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