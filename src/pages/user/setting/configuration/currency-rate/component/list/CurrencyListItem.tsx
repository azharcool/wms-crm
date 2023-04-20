import { Checkbox, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import CurrencyCreate from "../CurrencyCreate";

function CurrencyListItem() {
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
          <Checkbox color="primary" />
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
          Currency
        </TableCell>
        <TableCell
          sx={{
            minWidth: 150,
          }}
        >
          Rate
        </TableCell>
      </TableRow>
      {manageOpen ? (
        <CurrencyCreate handleClose={handleManage} open={manageOpen} />
      ) : null}
    </>
  );
}

export default CurrencyListItem;
