import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomTableCell from "components/table/CustomTableCell";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import HistoryListingItem from "./HistoryListingItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Date",
  },

  {
    id: crypto.randomUUID(),
    title: "Description",
  },
  {
    id: crypto.randomUUID(),
    title: "User",
  },
];

function HistoryListing() {
  return (
    <PerfectScrollbar>
      <Box sx={{ minWidth: 1050, minHeight: 500, marginTop: 5 }}>
        <TableContainer component={Paper}>
          <PerfectScrollbar>
            <Table
              sx={{
                height: "100%",
              }}
            >
              <TableHead>
                <TableRow>
                  {tableTitle.map((item) => {
                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={
                          {
                            // position: isPO ? "sticky" : "static",
                            // left: isPO ? 50 : 0,
                          }
                        }
                        minWt={170}
                      >
                        {item.title}
                      </CustomTableCell>
                    );
                  })}
                  <CustomTableCell isHeader isSticky rightValue={0}>
                    Actions
                  </CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <HistoryListingItem />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default HistoryListing;
