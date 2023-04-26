import { Checkbox, TableRow } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TableActionButton from "components/table/TableActionButton";
import CustomBodyTableCell from "components/table/status-table-cell/CustomBodyTableCell";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import TaxesCreate from "../TaxesCreate";

function TaxesListItem() {
  const [manageOpen, setManageOpen] = useState(false);

  const theme = useTheme();

  const handleManage = () => {
    setManageOpen((s) => !s);
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
            // checked={getSelectedAdjustmentReasonByIdState}
            sx={{
              color: theme.palette.primary.darkBlue,
              "&.Mui-checked": {
                color: theme.palette.primary.darkBlue,
              },
            }}
            // onChange={select}
          />
        </CustomBodyTableCell>

        <CustomBodyTableCell
          sx={{
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
        </CustomBodyTableCell>
        <CustomBodyTableCell>{/* {item.operations} */}</CustomBodyTableCell>
        <CustomBodyTableCell>{/* {item.operations} */}</CustomBodyTableCell>
        <CustomBodyTableCell>{/* {item.operations} */}</CustomBodyTableCell>
        <CustomBodyTableCell>{/* {item.operations} */}</CustomBodyTableCell>
        <CustomBodyTableCell
          sx={{
            position: "sticky",
            right: 0,
            cursor: "pointer",
            backdropFilter: "blur(2px)",
          }}
        >
          <TableActionButton
            onDeleteHandle={() => {
              //   handleAdjustmentDelete();
            }}
          >
            {/* Action button */}
          </TableActionButton>
        </CustomBodyTableCell>
      </TableRow>
      {manageOpen ? (
        <TaxesCreate view handleClose={handleManage} open={manageOpen} />
      ) : null}
    </>
  );
}

export default TaxesListItem;
