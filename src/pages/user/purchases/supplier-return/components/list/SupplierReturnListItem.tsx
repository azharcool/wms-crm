import { Box, Checkbox, Stack, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";

function SupplierReturnListItem() {
  const newtheme = useSelector((state: any) => state.theme);
  const navigate = useNavigate();
  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          width: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
        }}
      >
        <Checkbox
          // checked={}
          color="primary"
          // onChange={}
        />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 40,
          zIndex: 999,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
          cursor: "pointer",
        }}
        onClick={() =>
          navigate(
            `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplierReturns.details}/1`,
          )
        }
      >
        1
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
       {/* lineitem */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* qty */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* supplier */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
       {/* total */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* status */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* alloc */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
      {/* fullfill */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* shipping */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* refund */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* created */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* updatedat */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* notes */}
      </TableCell>
    </TableRow>
  );
}

export default SupplierReturnListItem;
