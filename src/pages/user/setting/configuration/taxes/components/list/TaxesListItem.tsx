import { Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import TaxesCreate from "../TaxesCreate";

// interface IAdjustmentItem {
//   item: IGetAdjustmentResponseData;
// }

function TaxesListItem() {
  //   const { item } = props;

  const [manageOpen, setManageOpen] = useState(false);
  const newtheme = useSelector((state: any) => state.theme);

  //   const select = () => {
  //     dispatch(setAdjustmentReasonId(Number(item.id)));
  //   };

  //   const alert = useAlert();
  //   const { deleteAdjustmentReasonAction } = useAdjustmentReasonAction();

  const handleManage = () => {
    setManageOpen((s) => !s);
  };

  //   const handleAdjustmentDelete = async () => {
  //     alert?.show({
  //       title: "Confirmation",
  //       message: "Do you really want to delete Adjustment Reason",
  //       cancelText: "No",
  //       confirmText: "Yes",
  //       onConfirm: async () => {
  //         await deleteAdjustmentReasonAction(Number(item.id));
  //         // refetch();
  //       },
  //     });
  //   };

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
            // checked={getSelectedAdjustmentReasonByIdState}
            color="primary"
            // onChange={select}
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
          Test
        </TableCell>
        <TableCell
          sx={{
            minWidth: 150,
          }}
        >
          {/* {item.operations} */}
        </TableCell>
        <TableCell
          sx={{
            minWidth: 150,
          }}
        >
          {/* {item.operations} */}
        </TableCell>
        <TableCell
          sx={{
            minWidth: 150,
          }}
        >
          {/* {item.operations} */}
        </TableCell>
        <TableCell
          sx={{
            minWidth: 150,
          }}
        >
          {/* {item.operations} */}
        </TableCell>
        <TableCell
          sx={{
            position: "sticky",
            right: 0,
          }}
        >
          <TableActionButton
            onDeleteHandle={() => {
              //   handleAdjustmentDelete();
            }}
          >
            {/* Action button */}
          </TableActionButton>
        </TableCell>
      </TableRow>
      {manageOpen ? (
        <TaxesCreate view handleClose={handleManage} open={manageOpen} />
      ) : null}
    </>
  );
}

export default TaxesListItem;
