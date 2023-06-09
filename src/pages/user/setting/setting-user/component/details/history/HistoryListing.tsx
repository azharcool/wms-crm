import {
  Box,
  Checkbox,
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
import HistoryListItem from "./HistoryListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Date",
  },
  {
    id: crypto.randomUUID(),
    title: "Link",
  },

  {
    id: crypto.randomUUID(),
    title: "Description",
  },

  {
    id: crypto.randomUUID(),
    title: "Action",
  },
];

function HistoryListing() {
  return (
    <PerfectScrollbar>
      <Box sx={{ minWidth: 1030, minHeight: 500, my: 2 }}>
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
                        customStyle={{
                          position: "static",
                          left: 0,
                        }}
                        minWt={170}
                      >
                        {item.title}
                      </CustomTableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <HistoryListItem />
                <HistoryListItem />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default HistoryListing;
