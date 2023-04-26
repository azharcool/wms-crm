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
import PurchaseOrderListItem from "./PurchaseOrderListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "PO#",
  },

  {
    id: crypto.randomUUID(),
    title: "Supplier",
  },

  {
    id: crypto.randomUUID(),
    title: "Status",
  },
  {
    id: crypto.randomUUID(),
    title: "Products",
  },
  {
    id: crypto.randomUUID(),
    title: "Total",
  },
  {
    id: crypto.randomUUID(),
    title: "Received/Ordered",
  },
  {
    id: crypto.randomUUID(),
    title: "Receiving warehouse",
  },
  {
    id: crypto.randomUUID(),
    title: "Expected date",
  },
  {
    id: crypto.randomUUID(),
    title: "Created date",
  },
  {
    id: crypto.randomUUID(),
    title: "Last updated",
  },
  {
    id: crypto.randomUUID(),
    title: "Supplier reference id",
  },
  {
    id: crypto.randomUUID(),
    title: "Tags",
  },
  {
    id: crypto.randomUUID(),
    title: "Notes",
  },
];
const tableTabs = [
  {
    id: crypto.randomUUID(),
    title: "NEW",
  },
  {
    id: crypto.randomUUID(),
    title: "CLOSED",
  },
  {
    id: crypto.randomUUID(),
    title: "CANCELLED",
  },
  {
    id: crypto.randomUUID(),
    title: "PROGRESS",
  },
];
function PurchaseOrderList() {
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
                  <CustomHeadTableCell
                    padding="checkbox"
                    sxProps={{
                      zIndex: 999,
                      position: "sticky",
                      left: 0,
                      minWidth: "60px",
                    }}
                  >
                    <Checkbox
                      // checked={}
                      color="primary"
                      // onChange={}
                    />
                  </CustomHeadTableCell>
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
                  <CustomHeadTableCell
                    sxProps={{
                      position: "sticky",
                      right: 0,
                    }}
                  >
                    Actions
                  </CustomHeadTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <PurchaseOrderListItem />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default PurchaseOrderList;
