import HistoryIcon from "@mui/icons-material/History";
import { TableCell, TableRow } from "@mui/material";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import "react-perfect-scrollbar/dist/css/styles.css";

function HistoryListItem() {
  return (
    <TableRow>
      <CustomBodyTableCell>
        <CustomTableText text="29/02/2023 03:12:33" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text="description" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text="Aasif Sheikh" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <HistoryIcon sx={{ fontSize: 20, color: "#333" }} />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default HistoryListItem;
