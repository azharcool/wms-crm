import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomTableCell from "components/table/CustomTableCell";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import PurchasesListingItem from "./PurchasesListingItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "PO#",
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

function PurchasesListing() {
  return (
    <PerfectScrollbar>
      <Box sx={{ minWidth: 1050, minHeight: 500, marginTop: 5 }}>
        <TableContainer component={Paper}>
          <PerfectScrollbar>
            <Table
              sx={{
                height: "100%",
              }}
            >
              <TableHead>
                <TableRow>
                  {tableTitle.map((item) => {
                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={
                          {
                            // position: isPO ? "sticky" : "static",
                            // left: isPO ? 50 : 0,
                          }
                        }
                        minWt={170}
                      >
                        {item.title}
                      </CustomTableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <PurchasesListingItem />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default PurchasesListing;
