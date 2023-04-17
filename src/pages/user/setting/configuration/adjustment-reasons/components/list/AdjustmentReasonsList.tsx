import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import CustomTableCell from "components/table/CustomTableCell";
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { IGetAdjustmentResponseRoot } from "types/setting/adjustment/getAdjustmentResponse";
import AdjustmentReasonListItem from "./AdjustmentReasonListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Name",
  },
  {
    id: crypto.randomUUID(),
    title: "Operation",
  },
];

interface IAdjustmentReasonListing {
  data?: IGetAdjustmentResponseRoot;
  adjustmentPagination: {
    pageSize: number;
    page: number;
  };
  handlePagination: (name: string, page: number) => void;
}

function AdjustmentReasonsList(props: IAdjustmentReasonListing) {
  const { data, adjustmentPagination, handlePagination } = props;

  return (
    <>
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
                    <CustomTableCell
                      isCheck
                      isHeader
                      isSticky
                      customStyle={{
                        zIndex: 999,
                      }}
                      leftValue={0}
                    >
                      <Checkbox color="primary" />
                    </CustomTableCell>
                    {tableTitle.map((item) => {
                      const isName = item.title.includes("Name");

                      return (
                        <CustomTableCell
                          key={item.id}
                          isHeader
                          customStyle={{
                            position: isName ? "sticky" : "static",
                            left: isName ? 60 : 0,
                          }}
                          minWt={150}
                        >
                          {item.title}
                        </CustomTableCell>
                      );
                    })}
                    <CustomTableCell isHeader isSticky rightValue={0}>
                      Actions
                    </CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.data.map((item) => {
                    return (
                      <AdjustmentReasonListItem key={item.id} item={item} />
                    );
                  })}
                </TableBody>
              </Table>
            </PerfectScrollbar>
            <TablePagination
              component="div"
              count={data?.totalDocs || 0}
              page={adjustmentPagination.page}
              rowsPerPage={adjustmentPagination.pageSize}
              rowsPerPageOptions={[5, 10, 25]}
              onPageChange={(_, pageNo) => {
                handlePagination("page", pageNo);
              }}
              onRowsPerPageChange={(e) => {
                handlePagination("pageSize", Number(e.target.value));
              }}
            />
          </TableContainer>
        </Box>
      </PerfectScrollbar>
    </>
  );
}

export default AdjustmentReasonsList;
