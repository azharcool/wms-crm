import { Checkbox, TableCell, TableRow } from "@mui/material";
import { useAlert } from "components/alert";
import TableActionButton from "components/table/TableActionButton";
import useAdjustmentAction from "hooks/setting/adjustment/useAdjustmentAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import { IGetAdjustmentResponseData } from "types/setting/adjustment/getAdjustmentResponse";

interface IAdjustmentItem {
  item: IGetAdjustmentResponseData;
}

function AdjustmentReasonListItem(props: IAdjustmentItem) {
  const { item } = props;
  const newtheme = useSelector((state: any) => state.theme);
  const alert = useAlert();
  const { deleteAdjustmentAsync } = useAdjustmentAction();

  const handleAdjustmentDelete = async () => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete Brand",
      cancelText: "No",
      confirmText: "Yes",
      // onConfirm: async () => {
      //   await deleteAdjustmentAsync(item?.id);
      //   // refetch();
      // },
    });
  };

  return (
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
        onClick={() => {}}
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
        />
      </TableCell>
    </TableRow>
  );
}

export default AdjustmentReasonListItem;
