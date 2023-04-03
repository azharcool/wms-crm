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
import HistoryListItem from "./HistoryListItem";

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
    title: "Product",
  },
  {
    id: crypto.randomUUID(),
    title: "User",
  },
];

function HistoryList() {
  return (
    <PerfectScrollbar>
      <Box sx={{ minWidth: 1050, minHeight: 500 }}>
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
                      <CustomTableCell key={item.id} isHeader>
                        {item.title}
                      </CustomTableCell>
                    );
                  })}
                  <CustomTableCell
                    isHeader
                    customStyle={{
                      textAlign: "center",
                    }}
                  >
                    Actions
                  </CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <HistoryListItem item={undefined} />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default HistoryList;
