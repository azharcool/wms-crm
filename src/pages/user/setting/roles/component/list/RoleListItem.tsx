import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function RoleListItem() {
  const navigate = useNavigate();

  const {
    setting: {
      layout,
      role: { update, general, permission },
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
        }}
      >
        <Checkbox color="primary" />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 40,
          zIndex: 999,
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`/${layout}/${update}/1/${general}`);
        }}
      >
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          {/* {item.name || "-"} # */}-
        </Typography>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.descr || "-"} */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* {item.user || "-"} */}-
      </TableCell>
    </TableRow>
  );
}

export default RoleListItem;
