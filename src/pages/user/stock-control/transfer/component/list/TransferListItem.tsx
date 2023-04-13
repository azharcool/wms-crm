import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import StatusTableCell from "components/table/status-table-cell";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";

function TransferListItem() {
  const newtheme = useSelector((state: any) => state.theme);
  const navigate = useNavigate();

  const {
    stockControl: {
      layout,
      transfer: { details, general },
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
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
        }}
      >
        <Checkbox color="primary" />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 40,
          zIndex: 999,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`/${layout}/${details}/1/${general}`);
        }}
      >
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          {/* {item.sa || "-"} # */}-
        </Typography>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.lineItem || "-"} */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.qty || "-"} */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.value || "-"} */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.fromWarehouse || "-"} */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.toWarehouse || "-"} */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* <StatusTableCell
          success={item?.status !== 2}
          title={item?.status === 2 ? "InActive" : "Active"}
        /> */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
          whiteSpace: "nowrap",
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.expected || "-"} */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.created || "-"} */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.updated || "-"} */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.notes || "-"} */}-
      </TableCell>
      <TableCell
        sx={{
          position: "sticky",
          right: 0,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
        }}
      >
        <TableActionButton onDeleteHandle={() => {}} />
      </TableCell>
    </TableRow>
  );
}

export default TransferListItem;
