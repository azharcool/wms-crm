import { Checkbox, TableRow } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CustomBodyTableCell from "components/table/status-table-cell/CustomBodyTableCell";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import CurrencyCreate from "../CurrencyCreate";

function CurrencyListItem() {
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
            handleManage();
          }}
        >
          Currency
        </CustomBodyTableCell>
        <CustomBodyTableCell>Rate</CustomBodyTableCell>
      </TableRow>
      {manageOpen ? (
        <CurrencyCreate handleClose={handleManage} open={manageOpen} />
      ) : null}
    </>
  );
}

export default CurrencyListItem;
