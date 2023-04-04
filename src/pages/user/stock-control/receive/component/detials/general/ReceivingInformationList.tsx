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
import ReceivingInformationListItem from "./ReceivingInformationListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
  {
    id: crypto.randomUUID(),
    title: "Received/Expected",
  },

  {
    id: crypto.randomUUID(),
    title: "Expected date",
  },
  {
    id: crypto.randomUUID(),
    title: "Last update",
  },
];

function ReceivingInformationList() {
  return (
    <PerfectScrollbar>
      <Box sx={{ minWidth: 1050, minHeight: 500, pt: "25px" }}>
        <TableContainer component={Paper}>
          <Typography sx={{ margin: "16px" }} variant="h6">
            Receiving information
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
                <ReceivingInformationListItem item={undefined} />
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default ReceivingInformationList;
