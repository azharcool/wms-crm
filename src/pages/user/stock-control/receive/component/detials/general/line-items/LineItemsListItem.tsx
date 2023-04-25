import { Box, Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import "react-perfect-scrollbar/dist/css/styles.css";

interface ILineItemsListItem {
  item: any;
}

function LineItemsListItem(_: ILineItemsListItem) {
  return (
    <TableRow hover>
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
          left: 60,
          zIndex: 999,
          cursor: "pointer",
          // background: "white",
        }}
        // onClick={() => goToDetails("1")}
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
          minWidth: 170,
        }}
      >
        <Box>
          <Typography variant="h6">Speaker</Typography>
          <Typography>SPEAKER-796</Typography>
        </Box>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        Default Warehouse(Demo)
      </TableCell>
      <TableCell
        sx={{
          minWidth: 170,
        }}
      >
        Mar 29
      </TableCell>
    </TableRow>
  );
}

export default LineItemsListItem;
