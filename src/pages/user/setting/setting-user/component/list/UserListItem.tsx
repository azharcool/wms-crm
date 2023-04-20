import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import NOImage from "assets/images/no-image.png";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function UserListItem() {
  const navigate = useNavigate();

  const {
    setting: {
      layout,
      user: { details, general, history },
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
        onClick={() => navigate(`/${layout}/${details}/1/${general}`)}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
          }}
        >
          <img
            alt="new"
            src={NOImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </Box>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* fullname */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* firstname */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* lastname */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* email */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* role */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* warehouse */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* status */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        {/* lastupdated */}-
      </TableCell>
    </TableRow>
  );
}

export default UserListItem;
