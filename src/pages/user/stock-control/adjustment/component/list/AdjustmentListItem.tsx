import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import dateTimeFormat from "components/dateTime-format";
import TableActionButton from "components/table/TableActionButton";
import StatusTableCell from "components/table/status-table-cell";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import useAdjustmentAction from "hooks/actions/stock/adjustment/useAdjustmentAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedAdjustmentById } from "redux/stock-control/adjustmentSelector";
import {
  setAdjustment,
  setAdjustmentId,
} from "redux/stock-control/adjustmentSlice";
import { RootState, useAppDispatch } from "redux/store";
import AppRoutes from "routes/appRoutes";
import { GetAllAdjustmentResponseData } from "types/stock/adjustment/getAllAdjustmentResponse";

interface IAdjustmentListItem {
  item: GetAllAdjustmentResponseData;
}

function AdjustmentListItem(props: IAdjustmentListItem) {
  const { item } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const getSelectedAdjustmentByIdState = useSelector((state: RootState) =>
    getSelectedAdjustmentById(state, Number(item.id)),
  );

  const select = () => {
    dispatch(setAdjustmentId(item.id));
  };
  const { deleteAdjustmentAsync } = useAdjustmentAction();

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
      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          left: 60,
          zIndex: 999,
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
        <CustomTableText text={item.sa || "-"} link />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item.lineItem || "-"} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item.qtyChange || "-"} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item.totalQuantity || "-"} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item.reason || "-"} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText
          text={
            <StatusTableCell
              success={item?.status !== 2}
              title={item?.status === 2 ? "InActive" : "Active"}
            />
          }
        />
      </CustomBodyTableCell>
      <TableCell
        sx={{
          minWidth: 170,
          whiteSpace: "nowrap",
        }}
      >
        {dateTimeFormat(item.updatedOn) || "_"}
      </TableCell>
      <CustomBodyTableCell>
        <CustomTableText text={dateTimeFormat(item.updatedOn) || "_"} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item.notes || "-"} />
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          right: 0,
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            deleteAdjustmentAsync(item.id);
          }}
        />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default AdjustmentListItem;
