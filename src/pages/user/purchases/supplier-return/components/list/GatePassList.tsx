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
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import GatePassListItem from "./GatePassListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Number",
  },

  {
    id: crypto.randomUUID(),
    title: "Created At",
  },

  {
    id: crypto.randomUUID(),
    title: "Number Plate",
  },
  {
    id: crypto.randomUUID(),
    title: "Invoice Number",
  },
  {
    id: crypto.randomUUID(),
    title: "File Url",
  },
  {
    id: crypto.randomUUID(),
    title: "Receive",
  },
];

function GatePassList() {
  return (
    <PerfectScrollbar>
      <Box sx={{ minHeight: 500 }}>
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
                    const isPO = item.title.includes("PO#");

                    return (
                      <CustomHeadTableCell
                        key={item.id}
                        sxProps={{
                          position: isPO ? "sticky" : "static",
                          left: isPO ? 60 : 0,
                        }}
                      >
                        {item.title}
                      </CustomHeadTableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <GatePassListItem />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default GatePassList;
