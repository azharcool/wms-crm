import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";

function AdjustmentListItem() {
  const newtheme = useSelector((state: any) => state.theme);
  const navigate = useNavigate();
  const {
    stockControl: {
      layout,
      adjustment: { details, generalDetails },
    },
  } = AppRoutes;
  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          width: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
        }}
      >
        <Checkbox
          // checked={}
          color="primary"
          // onChange={}
        />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 40,
          zIndex: 999,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
          cursor: "pointer",
        }}
        onClick={() => navigate(`/${layout}/${details}/1/${generalDetails}`)}
      >
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          SA-1233
        </Typography>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* lineitems */}0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* qtychnage */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* total */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* reasion */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* refId */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* status */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* lastupdt */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* notes */}
      </TableCell>
      <TableCell
        sx={{
          position: "sticky",
          right: 0,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            // deleteProductAsync(item.id);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default AdjustmentListItem;
