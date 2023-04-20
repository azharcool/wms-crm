import { Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function PurchaseOrderListItem() {
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
          cursor: "pointer",
        }}
        onClick={() =>
          navigate(
            `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.purchaseOrders.details}/1`,
          )
        }
      >
        PO-1233
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        {/* inventory */}0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        Not Provided
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          // background: "white",
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          position: "sticky",
          right: 0,
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            // deleteProductAsync(item.id);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default PurchaseOrderListItem;
