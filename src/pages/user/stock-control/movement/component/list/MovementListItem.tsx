import { useTheme } from "@mui/material/styles";
import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import useAdjustmentAction from "hooks/actions/stock/adjustment/useAdjustmentAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import AppRoutes from "routes/appRoutes";

function MovementListItem() {
  const { deleteAdjustmentAsync } = useAdjustmentAction();
  const theme = useTheme();

  const {
    stockControl: {
      layout,
      adjustment: { details, generalDetails },
    },
  } = AppRoutes;

  return (
    <TableRow>
      <CustomBodyTableCell
        padding="checkbox"
        sxProps={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox
          checked={false}
          sx={{
            color: theme.palette.primary.darkBlue,
            "&.Mui-checked": {
              color: theme.palette.primary.darkBlue,
            },
          }}
        />
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
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          right: 0,
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            // deleteAdjustmentAsync(item.id);
          }}
        />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default MovementListItem;
