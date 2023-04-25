import { Box, Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

interface IReorderListItem {
  item: any;
}

function ReorderListItem(_: IReorderListItem) {
  const navigate = useNavigate();
  const {
    stockControl: {
      layout,
      reorder: { details },
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
          cursor: "pointer",
        }}
        onClick={() => navigate(`/${layout}/${details}/1}`)}
      >
        <Typography
          sx={{
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          {/* variant */}-
        </Typography>
      </TableCell>
      <TableCell sx={{ minWidth: 170 }}>
        <Box>
          <Typography>-</Typography>
        </Box>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* reader */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* desired */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* available */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* awaiting */}-
      </TableCell>
    </TableRow>
  );
}

export default ReorderListItem;
