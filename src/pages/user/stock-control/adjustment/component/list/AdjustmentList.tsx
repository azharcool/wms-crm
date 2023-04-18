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
import NoDataTableRow from "components/table/no-data-table-row";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import {
  GetAllAdjustmentResponseData,
  GetAllAdjustmentResponseRoot,
} from "types/stock/adjustment/getAllAdjustmentResponse";

import AdjustmentListItem from "./AdjustmentListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "SA#",
  },

  {
    id: crypto.randomUUID(),
    title: "Line items",
  },

  {
    id: crypto.randomUUID(),
    title: "Qty change",
  },
  {
    id: crypto.randomUUID(),
    title: "Total",
  },
  {
    id: crypto.randomUUID(),
    title: "Reasion",
  },
  {
    id: crypto.randomUUID(),
    title: "Referece ID",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
  {
    id: crypto.randomUUID(),
    title: "Last updated",
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

interface IAdjustmentList {
  data?: GetAllAdjustmentResponseRoot;
  adjustmentPagination: {
    pageSize: number;
    page: number;
  };
  handlePagination: (name: string, page: number) => void;
}

function AdjustmentList(props: IAdjustmentList) {
  const { data, adjustmentPagination, handlePagination } = props;

  const csvData = data?.data.map((item) => ({
    sa: item.sa,
    lineitems: item.lineItem,
    qtychange: item.qtyChange,
    total: item.totalValue,
    reasion: item.reason,
    referenceid: item.referenceId,
    status: item.status,
    lastupdated: item.updatedOn,
    notes: item.notes,
  }));

  const csvHeaders = tableTitle.map((item) => ({
    label: item.title,
    key: item.title.replace(" ", "").toLowerCase(),
  }));

  return (
    <PerfectScrollbar>
      <EnhancedTableToolbar
        csvData={csvData}
        csvHeader={csvHeaders}
        csvTitle="Adjustments"
        moreList={[
          {
            id: crypto.randomUUID(),
            title: "Import",
            onClick: () => {},
          },
          {
            id: crypto.randomUUID(),
            title: "Density",
            onClick: () => {},
          },
        ]}
        tabs={tableTabs}
      />

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
                    const isSA = item.title.includes("SA#");

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
                  <CustomTableCell isHeader isSticky rightValue={0}>
                    Actions
                  </CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.data.map((item: GetAllAdjustmentResponseData) => {
                  return <AdjustmentListItem item={item} />;
                })}
                {!data?.data.length ? (
                  <NoDataTableRow
                    colSize={4}
                    title="No data found in Adjustment"
                  />
                ) : null}
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
  );
}

export default AdjustmentList;
