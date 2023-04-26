import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
} from "@mui/material";
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import AutoComplete from "components/textfield/AutoComplete";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import ReorderListItem from "./ReorderListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Varint",
  },

  {
    id: crypto.randomUUID(),
    title: "Supplier",
  },

  {
    id: crypto.randomUUID(),
    title: "Cost",
  },
  {
    id: crypto.randomUUID(),
    title: "Retail",
  },
  {
    id: crypto.randomUUID(),
    title: "Needed",
  },
  {
    id: crypto.randomUUID(),
    title: "Reorder point",
  },
  {
    id: crypto.randomUUID(),
    title: "Desired level",
  },
  {
    id: crypto.randomUUID(),
    title: "Available",
  },
  {
    id: crypto.randomUUID(),
    title: "Awaiting",
  },
];

function ReorderList() {
  return (
    <PerfectScrollbar>
      <Stack width={300} gap={2}>
        <AutoComplete
          label="Warehouse"
          options={[{ value: "warehouse", id: 1 }]}
          getOptionLabel={(item: any) => item.value}
        />
      </Stack>
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
                    <Checkbox checked={false} color="primary" />
                  </CustomHeadTableCell>
                  {tableTitle.map((item) => {
                    const isID = item.title.includes("ID #");

                    return (
                      <CustomHeadTableCell
                        key={item.id}
                        sxProps={{
                          position: isID ? "sticky" : "static",
                          left: isID ? 60 : 0,
                        }}
                      >
                        {item.title}
                      </CustomHeadTableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <ReorderListItem item={undefined} />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default ReorderList;
