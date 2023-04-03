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
import PutAwayV2ListItem from "./PutAwayV2ListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "ID",
  },

  {
    id: crypto.randomUUID(),
    title: "From numbers",
  },

  {
    id: crypto.randomUUID(),
    title: "Line items",
  },
  {
    id: crypto.randomUUID(),
    title: "QTY",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
  {
    id: crypto.randomUUID(),
    title: "From location",
  },
  {
    id: crypto.randomUUID(),
    title: "Assigned to",
  },
  {
    id: crypto.randomUUID(),
    title: "Duration",
  },
  {
    id: crypto.randomUUID(),
    title: "Created Date",
  },
  {
    id: crypto.randomUUID(),
    title: "Updated Date",
  },
];
const tableTabs = [
  {
    id: crypto.randomUUID(),
    title: "ALL",
  },
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
];

function PutAwayV2List() {
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
                    const isID = item.title.includes("ID");

                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          position: isID ? "sticky" : "static",
                          left: isID ? 50 : 0,
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
                <PutAwayV2ListItem item={undefined} />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default PutAwayV2List;
