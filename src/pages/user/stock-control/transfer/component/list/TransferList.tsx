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
import TransferListItem from "./TransferListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "#",
  },

  {
    id: crypto.randomUUID(),
    title: "Line items",
  },

  {
    id: crypto.randomUUID(),
    title: "Quantity",
  },
  {
    id: crypto.randomUUID(),
    title: "Value",
  },
  {
    id: crypto.randomUUID(),
    title: "From warehouse",
  },
  {
    id: crypto.randomUUID(),
    title: "To warehouse",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
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
    title: "Updated date",
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



function TransferList() {
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
                    const isSA = item.title.includes("#");

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
                <TransferListItem />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default TransferList;
