import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import useAdjustmentAction from "hooks/stock/adjustment/useAdjustmentAction";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAdjustment } from "redux/stock-control/adjustmentSlice";
import { useAppDispatch } from "redux/store";
import palette from "theme/palette";
import { GetAllAdjustmentResponseData } from "types/stock/adjustment/getAllAdjustmentResponse";

interface IAdjustmentListItem {
  item: GetAllAdjustmentResponseData;
}

function AdjustmentListItem(props: IAdjustmentListItem) {
  const newtheme = useSelector((state: any) => state.theme);
  const { deleteAdjustmentAsync } = useAdjustmentAction();
  const navigate = useNavigate();
  const {
    stockControl: {
      layout,
      adjustment: { details, generalDetails },
    },
  } = AppRoutes;
  const { item } = props;

  const dispatch = useAppDispatch();
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
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch(
            setAdjustment({
              id: item.id,
              name: item.sa,
            }),
          );
          navigate(`/${layout}/${details}/${item.id}/${generalDetails}`);
        }}
      >
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          {item.sa || "-"}
        </Typography>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {item.lineItem || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {item.qtyChange || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {item.totalQuantity || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {item.reason || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {item.referenceId || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {item.status || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {item.updatedOn || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {item.notes || "-"}
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
        <TableActionButton
          onDeleteHandle={() => {
            deleteAdjustmentAsync(item.id);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default AdjustmentListItem;
