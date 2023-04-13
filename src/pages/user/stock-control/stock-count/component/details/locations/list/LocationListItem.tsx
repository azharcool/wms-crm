import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";

function LocationListItem(props: { item: any }) {
  const { item } = props;
  const newtheme = useSelector((state: any) => state.theme);
  const navigate = useNavigate();
  const {
    stockControl: {
      layout,
      stock_count: { details },
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
      // sx={{
      //   width: 50,
      //   position: "sticky",
      //   left: 40,
      //   zIndex: 999,
      //   background: newtheme.isDarkMode
      //     ? "#26263D"
      //     : palette.background.default,
      //   cursor: "pointer",
      // }}
      // onClick={() => navigate(`/${layout}/${details}/1`)}
      >
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          -
        </Typography>
      </TableCell>
      <TableCell sx={{ minWidth: 170 }}>-</TableCell>
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
    </TableRow>
  );
}

export default LocationListItem;
