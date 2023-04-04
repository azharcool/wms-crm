import {
  Box,
  Checkbox,
  Divider,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CustomTableCell from "components/table/CustomTableCell";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import LineItemsListItem from "./LineItemsListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },
  {
    id: crypto.randomUUID(),
    title: "Product",
  },

  {
    id: crypto.randomUUID(),
    title: "Ordered",
  },
  {
    id: crypto.randomUUID(),
    title: "Received",
  },
];

function LineItemsList() {
  return (
    <PerfectScrollbar>
      <Box sx={{ minWidth: 1050, minHeight: 500, pt: "25px" }}>
        <TableContainer component={Paper}>
          <Typography sx={{ margin: "16px" }} variant="h6">
            Line items
          </Typography>
          <Divider />
          <PerfectScrollbar>
            <Table
              sx={{
                height: "100%",
                mt: "20px",
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
                    const isSA = item.title.includes("ID #");

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
                </TableRow>
              </TableHead>
              <TableBody>
                <LineItemsListItem item={undefined} />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default LineItemsList;
