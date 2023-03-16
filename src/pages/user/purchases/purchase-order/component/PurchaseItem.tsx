import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import "react-perfect-scrollbar/dist/css/styles.css";

function PurchaseItem() {
  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
          background: "white",
        }}
      >
        <Checkbox checked={false} color="primary" onChange={() => {}} />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 0,
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
          }}
        >
          PO-233
        </Box>
      </TableCell>

      <TableCell
        sx={{
          width: 200,
          position: "sticky",
          left: 0,
        }}
      >
        Smart
      </TableCell>
      <TableCell
        sx={{
          width: 200,
          position: "sticky",
          left: 0,
        }}
      >
        new
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        INR 0.33
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0/0
      </TableCell>

      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>

      <TableCell
        sx={{
          position: "sticky",
          right: 0,
          background: "white",
        }}
      >
        <TableActionButton />
      </TableCell>
    </TableRow>
  );
}

export default PurchaseItem;
