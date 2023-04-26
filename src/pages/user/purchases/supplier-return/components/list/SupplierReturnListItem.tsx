import { Checkbox, TableCell, TableRow } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function SupplierReturnListItem() {
  const navigate = useNavigate();
  const theme = useTheme();

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
        onClick={() =>
          navigate(
            `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplierReturns.details}/1`,
          )
        }
      >
        <CustomTableText text="1" link />
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
      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          right: 0,
          cursor: "pointer",
        }}
      >
        <CustomTableText text="" />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default SupplierReturnListItem;
