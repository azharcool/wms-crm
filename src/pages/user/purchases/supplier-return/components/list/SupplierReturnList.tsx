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
import SupplierReturnListItem from "./SupplierReturnListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "ID",
  },

  {
    id: crypto.randomUUID(),
    title: "Line Items",
  },

  {
    id: crypto.randomUUID(),
    title: "Qty",
  },
  {
    id: crypto.randomUUID(),
    title: "Supplier",
  },
  {
    id: crypto.randomUUID(),
    title: "Total",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
  {
    id: crypto.randomUUID(),
    title: "Allocation status",
  },
  {
    id: crypto.randomUUID(),
    title: "Fulfillment status",
  },
  {
    id: crypto.randomUUID(),
    title: "Shipping status",
  },
  {
    id: crypto.randomUUID(),
    title: "Refund status",
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
    title: "Notes",
  },
];

function SupplierReturnList() {
  return(
  <PerfectScrollbar>
    <EnhancedTableToolbar />

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
                  const isID = item.title.includes("ID");

                  return (
                    <CustomTableCell
                      key={item.id}
                      isHeader
                      customStyle={{
                        position: isID ?  "sticky":"static",
                        left: isID ? 50:0,
                      }}
                      minWt={100}
                    >
                      {item.title}
                    </CustomTableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
             <SupplierReturnListItem />
            </TableBody>
          </Table>
        </PerfectScrollbar>
      </TableContainer>
    </Box>
  </PerfectScrollbar>
  )
}

export default SupplierReturnList;
