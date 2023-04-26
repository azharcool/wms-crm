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
import ListingItem from "./ListingItem";

const tabs = [
  {
    id: crypto.randomUUID(),
    title: "Unpublished",
  },
  {
    id: crypto.randomUUID(),
    title: "Pending",
  },
  {
    id: crypto.randomUUID(),
    title: "Published",
  },
  {
    id: crypto.randomUUID(),
    title: "Paused",
  },
  {
    id: crypto.randomUUID(),
    title: "Rejected",
  },
];

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },

  {
    id: crypto.randomUUID(),
    title: "SKU",
  },

  {
    id: crypto.randomUUID(),
    title: "Channel",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
  {
    id: crypto.randomUUID(),
    title: "Qty",
  },
  {
    id: crypto.randomUUID(),
    title: "Retail price",
  },
  {
    id: crypto.randomUUID(),
    title: "M.R.P",
  },
  {
    id: crypto.randomUUID(),
    title: "Brand",
  },
  {
    id: crypto.randomUUID(),
    title: "Category",
  },
  {
    id: crypto.randomUUID(),
    title: "Tags",
  },
  {
    id: crypto.randomUUID(),
    title: "Last Updated",
  },
];

function ListingList() {
  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar tabs={tabs} />

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
                      checked={false}
                      color="primary"
                      onChange={() => {}}
                    />
                  </CustomHeadTableCell>
                  {tableTitle.map((item) => {
                    const isImage = item.title.includes("Image");
                    const isSku = item.title.includes("SKU");
                    return (
                      <CustomHeadTableCell
                        key={item.id}
                        sxProps={{
                          minWidth: isImage ? 50 : isSku ? 350 : 150,
                          position: isImage || isSku ? "sticky" : "static",
                          left: isImage || isSku ? (isSku ? 130 : 60) : 0,
                          // border: "1px solid red",
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
                <ListingItem />
                <ListingItem />
                <ListingItem />
                <ListingItem />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default ListingList;
