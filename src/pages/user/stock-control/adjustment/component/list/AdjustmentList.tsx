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
import AdjustmentListItem from "./AdjustmentListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "SA#",
  },

  {
    id: crypto.randomUUID(),
    title: "Line items",
  },

  {
    id: crypto.randomUUID(),
    title: "Qty change",
  },
  {
    id: crypto.randomUUID(),
    title: "Total",
  },
  {
    id: crypto.randomUUID(),
    title: "Reasion",
  },
  {
    id: crypto.randomUUID(),
    title: "Referece ID",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
  {
    id: crypto.randomUUID(),
    title: "Last updated",
  },
  {
    id: crypto.randomUUID(),
    title: "Notes",
  },
];
const tableTabs = [
  {
    id: crypto.randomUUID(),
    title: "DRAFT",
  },
  {
    id: crypto.randomUUID(),
    title: "COMPLETED",
  },
  {
    id: crypto.randomUUID(),
    title: "CANCELLED",
  },
];
function AdjustmentList() {
  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar tabs={tableTabs} />

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
                  <CustomTableCell
                    isCheck
                    isHeader
                    isSticky
                    customStyle={{
                      zIndex: 999,
                    }}
                    leftValue={0}
                    minWt={50}
                  >
                    <Checkbox
                      // checked={}
                      color="primary"
                      // onChange={}
                    />
                  </CustomTableCell>
                  {tableTitle.map((item) => {
                    const isSA = item.title.includes("SA#");

                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          position: isSA ? "sticky" : "static",
                          left: isSA ? 50 : 0,
                        }}
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
                <AdjustmentListItem />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default AdjustmentList;
