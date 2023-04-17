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
import NoDataTableRow from "components/table/no-data-table-row";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import BillingListItem from "./BillingListItem";

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
    title: "Status",
  },
  {
    id: crypto.randomUUID(),
    title: "Amount",
  },
];
const tableTabs = [
  {
    id: crypto.randomUUID(),
    title: "ACTIVE",
  },
  {
    id: crypto.randomUUID(),
    title: "INACTIVE",
  },
];

function BillingList() {
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
                    const isDate = item.title.includes("Date");

                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          position: isDate ? "sticky" : "static",
                          left: isDate ? 50 : 0,
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
                <BillingListItem />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default BillingList;
