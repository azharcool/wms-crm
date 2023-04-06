import { Checkbox, TableCell, TableRow } from "@mui/material";
import { useAlert } from "components/alert";
import TableActionButton from "components/table/TableActionButton";
import useAdjustmentReasonAction from "hooks/setting/adjustment-reason/useAdjustmentReasonAction";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { getSelectedAdjustmentReasonById } from "redux/settings/configuration/adjustmentReasonSelector";
import { setAdjustmentReasonId } from "redux/settings/configuration/adjustmentReasonSlice";
import { RootState, useAppDispatch } from "redux/store";
import palette from "theme/palette";
import { IGetAdjustmentResponseData } from "types/setting/adjustment/getAdjustmentResponse";
import AdjustmentReasonsCreate from "../AdjustmentReasonsCreate";

interface IAdjustmentItem {
  item: IGetAdjustmentResponseData;
}

function AdjustmentReasonListItem(props: IAdjustmentItem) {
  const { item } = props;

  const [manageOpen, setManageOpen] = useState(false);
  const newtheme = useSelector((state: any) => state.theme);
  const getSelectedAdjustmentReasonByIdState = useSelector((state: RootState) =>
    getSelectedAdjustmentReasonById(state, Number(item.id)),
  );

  const dispatch = useAppDispatch();

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
        <TableCell
          padding="checkbox"
          sx={{
            minWidth: 60,
            position: "sticky",
            left: 0,
            zIndex: 999,
            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
          }}
        >
          <Checkbox
            checked={getSelectedAdjustmentReasonByIdState}
            color="primary"
            onChange={select}
          />
        </TableCell>

        <TableCell
          sx={{
            minWidth: 150,
            position: "sticky",
            left: 60,
            zIndex: 999,
            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
            cursor: "pointer",
          }}
          onClick={() => {
            handleManage();
          }}
        >
          {item.name}
        </TableCell>
        <TableCell
          sx={{
            minWidth: 150,
          }}
        >
          {item.operations}
        </TableCell>
        <TableCell
          sx={{
            position: "sticky",
            right: 0,
          }}
        >
          <TableActionButton
            onDeleteHandle={() => {
              handleAdjustmentDelete();
            }}
          >
            {/* Action button */}
          </TableActionButton>
        </TableCell>
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
