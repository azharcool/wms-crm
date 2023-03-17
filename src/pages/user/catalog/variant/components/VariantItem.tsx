import {
  Box,
  Checkbox,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
// import "react-perfect-scrollbar/dist/css/styles.css";

function VariantItem() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(AppRoutes.CATALOG.variantsDetails);
  };

  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
          background: "white",
        }}
      >
        <Checkbox checked={false} color="primary" onChange={() => {}} />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 0,
        }}
      >
        <Box
          sx={{
            width: "40px",
            height: "40px",
          }}
        >
          <img
            alt="new"
            src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
            width="100%"
          />
        </Box>
      </TableCell>

      <TableCell
        sx={{
          width: 200,
          position: "sticky",
          left: 0,
        }}
      >
        <Box onClick={() => handleNavigation()}>
          <Tooltip title="TshirtXXL">
            <Typography sx={{ textDecoration: "underline" }}>
              TshirtXXL
            </Typography>
          </Tooltip>
        </Box>
        <Typography> TSXX-274606-3</Typography>
      </TableCell>
      <TableCell
        sx={{
          width: 200,
          position: "sticky",
          left: 0,
        }}
      >
        1
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      />
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        6712372552956
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      />
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>

      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        INR 0.00
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        INR 0.00
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        INR 0.00
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      />
      <TableCell
        sx={{
          minWidth: 200,
        }}
      />
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        azhar
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      />
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        Mar 14, 2023 14:40:35
      </TableCell>
      <TableCell
        sx={{
          position: "sticky",
          right: 0,
          background: "white",
        }}
      >
        <TableActionButton />
      </TableCell>
    </TableRow>
  );
}

export default VariantItem;