import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TableActionButton from "components/table/TableActionButton";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function TransferListItem() {
  const navigate = useNavigate();
  const theme = useTheme();
  const {
    stockControl: {
      layout,
      transfer: { details, general },
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
      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          left: 60,
          zIndex: 999,
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`/${layout}/${details}/1/${general}`);
        }}
      >
        <CustomTableText text="-" link />
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
          cursor: "pointer",
        }}
      >
        <TableActionButton onDeleteHandle={() => {}} />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default TransferListItem;
