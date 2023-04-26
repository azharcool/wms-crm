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
import InventoryLogListItem from "./inventoryLogListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },

  {
    id: crypto.randomUUID(),
    title: "Variant",
  },

  {
    id: crypto.randomUUID(),
    title: "Supply rate",
  },

  {
    id: crypto.randomUUID(),
    title: "Change",
  },
  {
    id: crypto.randomUUID(),
    title: "Destination",
  },
  {
    id: crypto.randomUUID(),
    title: "location",
  },
  {
    id: crypto.randomUUID(),
    title: "Warehouse",
  },
  {
    id: crypto.randomUUID(),
    title: "Available",
  },
  {
    id: crypto.randomUUID(),
    title: "On hand",
  },
  {
    id: crypto.randomUUID(),
    title: "Created Date",
  },
];
const tableTabs = [
  {
    id: crypto.randomUUID(),
    title: "ALL",
  },
];

function InventoryLogList() {
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
                  {tableTitle?.map((item) => {
                    const isImage = item?.title?.includes("Image");

                    return (
                      <CustomHeadTableCell
                        key={item.id}
                        sxProps={{
                          position: isImage ? "sticky" : "static",
                          left: isImage ? 60 : 0,
                        }}
                      >
                        {item.title}
                      </CustomHeadTableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <InventoryLogListItem item={undefined} />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default InventoryLogList;
