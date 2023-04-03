import { TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import "react-perfect-scrollbar/dist/css/styles.css";

function HistoryListItem(props: { item: any }) {
  const { item } = props;

  return (
    <TableRow>
      <TableCell>-</TableCell>
      <TableCell>-</TableCell>
      <TableCell>-</TableCell>
      <TableCell>-</TableCell>
      <TableCell sx={{ textAlign: "center" }}>
        <TableActionButton
          onDeleteHandle={() => {
            // deleteSupplierAsync(item?.id);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default HistoryListItem;
