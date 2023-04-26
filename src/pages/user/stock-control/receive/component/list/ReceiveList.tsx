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
import ReceiveListItem from "./ReceiveListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "ID #",
  },

  {
    id: crypto.randomUUID(),
    title: "Received/Expected",
  },

  {
    id: crypto.randomUUID(),
    title: "Receiving Warehouse",
  },
  {
    id: crypto.randomUUID(),
    title: "Client Company",
  },
  {
    id: crypto.randomUUID(),
    title: "From",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
  {
    id: crypto.randomUUID(),
    title: "Notes",
  },
  {
    id: crypto.randomUUID(),
    title: "Tags",
  },
  {
    id: crypto.randomUUID(),
    title: "Expected Date",
  },
  {
    id: crypto.randomUUID(),
    title: "Last Update",
  },
];
// const tableTabs = [
//   {
//     id: crypto.randomUUID(),
//     title: "NEW",
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "COMPLETED",
//   },
//   {
//     id: crypto.randomUUID(),
//     title: "IN PROGRESS",
//   },
// ];

function ReceiveList() {
  return (
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
                    const isSA = item.title.includes("ID #");

                    return (
                      <CustomHeadTableCell
                        key={item.id}
                        sxProps={{
                          position: isSA ? "sticky" : "static",
                          left: isSA ? 60 : 0,
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
                <ReceiveListItem item={undefined} />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default ReceiveList;
