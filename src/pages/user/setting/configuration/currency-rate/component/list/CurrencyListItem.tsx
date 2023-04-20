import { Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import CurrencyCreate from "../CurrencyCreate";

function CurrencyListItem() {
  const [manageOpen, setManageOpen] = useState(false);

  const newtheme = useSelector((state: any) => state.theme);

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
