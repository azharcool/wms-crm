import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import useAdjustmentAction from "hooks/actions/stock/adjustment/useAdjustmentAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import AppRoutes from "routes/appRoutes";

function MovementListItem() {
  const { deleteAdjustmentAsync } = useAdjustmentAction();

  const {
    stockControl: {
      layout,
      adjustment: { details, generalDetails },
    },
  } = AppRoutes;

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
          //   checked={getSelectedAdjustmentByIdState}
          color="primary"
          //   onChange={select}
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
      >
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          {/* {item.sa || "-"} */}
        </Typography>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.lineItem || "-"} */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.qtyChange || "-"} */}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.reason || "-"} */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.referenceId || "-"} */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.status || "-"} */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.updatedOn || "-"} */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.notes || "-"} */}
      </TableCell>
      <TableCell
        sx={{
          position: "sticky",
          right: 0,
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            // deleteAdjustmentAsync(item.id);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default MovementListItem;
