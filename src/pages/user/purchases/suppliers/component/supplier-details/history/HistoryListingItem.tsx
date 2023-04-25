import { TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";

function HistoryListingItem() {
  const navigate = useNavigate();
  return (
    <TableRow>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        Date
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

export default HistoryListingItem;
