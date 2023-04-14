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
import StockCountListItem from "./StockCountListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Number",
  },

  {
    id: crypto.randomUUID(),
    title: "Status",
  },

  {
    id: crypto.randomUUID(),
    title: "Warehouse",
  },
  {
    id: crypto.randomUUID(),
    title: "Created date",
  },
];
const tableTabs = [
  {
    id: crypto.randomUUID(),
    title: "NEW",
  },
  {
    id: crypto.randomUUID(),
    title: "PENDING",
  },
  {
    id: crypto.randomUUID(),
    title: "IN PROGRESS",
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

function StockCountList() {
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
                    const isSA = item.title.includes("ID #");

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
                  {/* <CustomTableCell isHeader isSticky rightValue={0}>
                    Actions
                  </CustomTableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                <StockCountListItem item={undefined} />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default StockCountList;
