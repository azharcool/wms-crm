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
                  {tableTitle?.map((item) => {
                    const isImage = item?.title?.includes("Image");

                    return (
                      <CustomTableCell
                        key={item?.id}
                        isHeader
                        customStyle={{
                          position: isImage ? "sticky" : "static",
                          left: isImage ? 50 : 0,
                        }}
                        minWt={isImage ? 60 : 170}
                      >
                        {item?.title}
                      </CustomTableCell>
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
