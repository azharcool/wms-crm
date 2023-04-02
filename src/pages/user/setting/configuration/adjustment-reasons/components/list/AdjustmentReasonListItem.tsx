import { Checkbox, TableCell, TableRow } from "@mui/material";
import { useAlert } from "components/alert";
import TableActionButton from "components/table/TableActionButton";
import useAdjustmentAction from "hooks/setting/adjustment/useAdjustmentAction";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import { IGetAdjustmentResponseData } from "types/setting/adjustment/getAdjustmentResponse";
import AdjustmentReasonsCreate from "../AdjustmentReasonsCreate";

interface IAdjustmentItem {
  item: IGetAdjustmentResponseData;
}

function AdjustmentReasonListItem(props: IAdjustmentItem) {
  const { item } = props;
  console.log("first----->", item.id);
  const [manageOpen, setManageOpen] = useState(false);
  const newtheme = useSelector((state: any) => state.theme);
  const alert = useAlert();
  const { deleteAdjustmentAsync } = useAdjustmentAction();

  const handleManage = () => {
    setManageOpen((s) => !s);
  };

  const handleAdjustmentDelete = async (id: any) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete Brand",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: async () => {
        await deleteAdjustmentAsync(id);
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
          <Checkbox color="primary" />
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
              handleAdjustmentDelete(item.id);
            }}
          >
            {/* <MenuItem
              disableRipple
              onClick={() => {
                handleManage();
              }}
            >
              Edit
            </MenuItem> */}
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
