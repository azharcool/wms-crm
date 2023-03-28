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
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import GatePassListItem from "./GatePassListItem";
import PurchaseOrderListItem from "./PurchaseOrderListItem";

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
  }
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
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          position: isPO ? "sticky" : "static",
                          left: isPO ? 50 : 0,
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
