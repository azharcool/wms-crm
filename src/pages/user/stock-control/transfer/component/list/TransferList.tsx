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
                  <CustomHeadTableCell
                    padding="checkbox"
                    sxProps={{
                      zIndex: 999,
                      position: "sticky",
                      left: 0,
                      minWidth: "60px",
                    }}
                  >
                    <Checkbox checked={false} color="primary" />
                  </CustomHeadTableCell>
                  {tableTitle.map((item) => {
                    const isSA = item.title.includes("#");

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
                      right: 0
                    }}
                  >
                    Actions
                  </CustomHeadTableCell>
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
