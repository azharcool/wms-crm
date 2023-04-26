import { Box, Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import StatusTableCell from "components/table/status-table-cell";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function StockCountListItem(props: { item: any }) {
  const { item } = props;
  const navigate = useNavigate();
  const theme = useTheme();

  const {
    stockControl: {
      layout,
      stock_count: { details },
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
        onClick={() => navigate(`/${layout}/${details}/1`)}
      >
        <CustomTableText text="PO-1333" link />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText
          text={
            <StatusTableCell
              success={item?.status !== 1}
              title={item?.status === 1 ? "NEW" : "CANCELLED"}
            />
          }
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="Default Warehouse" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="Apr 11 2023 11:11:43" />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default StockCountListItem;
