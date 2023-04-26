import {
  Box,
  Checkbox,
  Divider,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import LineItemsListItem from "./LineItemsListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },
  {
    id: crypto.randomUUID(),
    title: "Product",
  },

  {
    id: crypto.randomUUID(),
    title: "Ordered",
  },
  {
    id: crypto.randomUUID(),
    title: "Received",
  },
];

function LineItemsList() {
  return (
    <PerfectScrollbar>
      <Box sx={{ minWidth: 1050, minHeight: 500, pt: "25px" }}>
        <TableContainer component={Paper}>
          <Typography sx={{ margin: "16px" }} variant="h6">
            Line items
          </Typography>
          <Divider />
          <PerfectScrollbar>
            <Table
              sx={{
                height: "100%",
                mt: "20px",
              }}
            >
              <TableHead>
                <TableRow>
                  <CustomHeadTableCell
                    padding="checkbox"
                    sxProps={{
                      zIndex: 999,
                      position: "sticky",
                      left: 0,
                      minWidth: "60px",
                    }}
                  >
                    <Checkbox checked={false} color="primary" />
                  </CustomHeadTableCell>
                  {tableTitle.map((item) => {
                    const isID = item.title.includes("ID #");

                    return (
                      <CustomHeadTableCell
                        key={item.id}
                        sxProps={{
                          position: isID ? "sticky" : "static",
                          left: isID ? 60 : 0,
                        }}
                      >
                        {item.title}
                      </CustomHeadTableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <LineItemsListItem item={undefined} />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default LineItemsList;
