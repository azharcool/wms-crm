import { Checkbox, TableCell, TableRow } from "@mui/material";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import palette from "theme/palette";

function AdjustmentReasonListItem() {
  const newtheme = useSelector((state: any) => state.theme);

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
        {/* name */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150
        }}
      >
        {/* operation */}
      </TableCell>
    </TableRow>
  );
}

export default AdjustmentReasonListItem;
