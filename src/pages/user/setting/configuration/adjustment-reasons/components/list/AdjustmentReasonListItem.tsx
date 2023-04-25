import { Checkbox, TableRow } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useAlert } from "components/alert";
import TableActionButton from "components/table/TableActionButton";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import useAdjustmentReasonAction from "hooks/actions/setting/adjustment-reason/useAdjustmentReasonAction";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { getSelectedAdjustmentReasonById } from "redux/settings/configuration/adjustmentReasonSelector";
import { setAdjustmentReasonId } from "redux/settings/configuration/adjustmentReasonSlice";
import { RootState, useAppDispatch } from "redux/store";
import { IGetAdjustmentResponseData } from "types/setting/adjustment/getAdjustmentResponse";
import AdjustmentReasonsCreate from "../AdjustmentReasonsCreate";

interface IAdjustmentItem {
  item: IGetAdjustmentResponseData;
}

function AdjustmentReasonListItem(props: IAdjustmentItem) {
  const { item } = props;

  const [manageOpen, setManageOpen] = useState(false);
  const getSelectedAdjustmentReasonByIdState = useSelector((state: RootState) =>
    getSelectedAdjustmentReasonById(state, Number(item.id)),
  );

  const dispatch = useAppDispatch();
  const theme = useTheme();

  const select = () => {
    dispatch(setAdjustmentReasonId(Number(item.id)));
  };

  const alert = useAlert();
  const { deleteAdjustmentReasonAction } = useAdjustmentReasonAction();

  const handleManage = () => {
    setManageOpen((s) => !s);
  };

  const handleAdjustmentDelete = async () => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete Adjustment Reason",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: async () => {
        await deleteAdjustmentReasonAction(Number(item.id));
        // refetch();
      },
    });
  };

  return (
    <>
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
            checked={getSelectedAdjustmentReasonByIdState}
            sx={{
              color: theme.palette.primary.darkBlue,
              "&.Mui-checked": {
                color: theme.palette.primary.darkBlue,
              },
            }}
            onChange={select}
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
            handleManage();
          }}
        >
          {/* {item.name} */}
          <CustomTableText text={item?.name || ""} />
        </CustomBodyTableCell>
        <CustomBodyTableCell>
          {/* {item.operations} */}
          <CustomTableText text={item?.operations || ""} />
        </CustomBodyTableCell>
        <CustomBodyTableCell
          sxProps={{
            position: "sticky",
            right: 0,
            cursor: "pointer",
            backdropFilter: "blur(2px)",
          }}
        >
          <TableActionButton
            onDeleteHandle={() => {
              handleAdjustmentDelete();
            }}
          >
            {/* Action button */}
          </TableActionButton>
        </CustomBodyTableCell>
      </TableRow>
      {manageOpen ? (
        <AdjustmentReasonsCreate
          view
          adjustmentId={item.id}
          handleClose={handleManage}
          open={manageOpen}
        />
      ) : null}
    </>
  );
}

export default AdjustmentReasonListItem;
