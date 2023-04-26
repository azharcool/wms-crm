import { TableCell, TableRow } from "@mui/material";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";

function GatePassListItem() {
  const navigate = useNavigate();
  return (
    <TableRow>
      <CustomBodyTableCell>
        <CustomTableText text="" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text="" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text="" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="" />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default GatePassListItem;
