import { Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import TaxesCreate from "../TaxesCreate";

function TaxesListItem() {
  const [manageOpen, setManageOpen] = useState(false);

  const handleManage = () => {
    setManageOpen((s) => !s);
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
