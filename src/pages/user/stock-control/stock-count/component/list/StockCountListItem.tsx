import { Box, Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import StatusTableCell from "components/table/status-table-cell";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function StockCountListItem(props: { item: any }) {
  const { item } = props;
  const navigate = useNavigate();
  const {
    stockControl: {
      layout,
      stock_count: { details },
    },
  } = AppRoutes;

  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          width: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox
          // checked={}
          color="primary"
          // onChange={}
        />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 40,
          zIndex: 999,

          cursor: "pointer",
        }}
        onClick={() => navigate(`/${layout}/${details}/1`)}
      >
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          PO-13817
        </Typography>
      </TableCell>
      <TableCell sx={{ minWidth: 170 }}>
        <Box>
          <StatusTableCell
            success={item?.status !== 1}
            title={item?.status === 1 ? "NEW" : "CANCELLED"}
          />
        </Box>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        Default Warehouse(Demo)
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        Apr 11,2023 09:54:04
      </TableCell>
    </TableRow>
  );
}

export default StockCountListItem;
