import { TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import "react-perfect-scrollbar/dist/css/styles.css";

function HistoryListItem(props: { item: any }) {
  const { item } = props;

  return (
    <TableRow>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell sxProps={{ textAlign: "center" }}>
        <TableActionButton
          onDeleteHandle={() => {
            // deleteSupplierAsync(item?.id);
          }}
        />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default HistoryListItem;
