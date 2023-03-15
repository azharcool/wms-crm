import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import CustomSwitch from "components/custom-switch";
import TableActionButton from "components/table/TableActionButton";
import "react-perfect-scrollbar/dist/css/styles.css";

function BrandItem() {
  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          width: 60,
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
          left: 60,
          zIndex: 999,
          background: "white",
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
          left: 130,
          zIndex: 999,
          background: "white",
        }}
      >
        watches
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
          background: "white",
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
          background: "white",
        }}
      >
        {" "}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
          background: "white",
        }}
      >
        <CustomSwitch />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
          background: "white",
        }}
      >
        Mar 9, 2023 17:39:39
      </TableCell>

      <TableCell
        sx={{
          minWidth: 200,
          background: "white",
        }}
      >
        {" "}
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

export default BrandItem;
