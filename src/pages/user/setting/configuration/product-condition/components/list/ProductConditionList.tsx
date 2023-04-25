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
import EnhancedTableToolbar from "components/table/enhanced-table-toolbar";
import CustomHeadTableCell from "components/table/status-table-cell/CustomHeadTableCell";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import theme from "theme/newTheme";
import { GetAllProductConditionPaginationResponseRoot } from "types/setting/product-condition/getAllProductConditionPaginationResponse";
import ProductConditionListItem from "./ProductConditionListItem";

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },
  {
    id: crypto.randomUUID(),
    title: "Code",
  },
  {
    id: crypto.randomUUID(),
    title: "Grade",
  },
  {
    id: crypto.randomUUID(),
    title: "Condition",
  },
  {
    id: crypto.randomUUID(),
    title: "Status",
  },
  {
    id: crypto.randomUUID(),
    title: "Details",
  },
  {
    id: crypto.randomUUID(),
    title: "Color",
  },
  {
    id: crypto.randomUUID(),
    title: "Warranty",
  },
];

interface IProductConditionListing {
  data?: GetAllProductConditionPaginationResponseRoot;
  productconditionPagination: {
    pageSize: number;
    page: number;
  };
  handlePagination: (name: string, page: number) => void;
}

function ProductConditionList(props: IProductConditionListing) {
  const { data, productconditionPagination, handlePagination } = props;

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
                    <CustomHeadTableCell
                      sxProps={{
                        zIndex: 999,
                        position: "sticky",
                        left: 0,
                        minWidth: "60px",
                      }}
                    >
                      <Checkbox
                        sx={{
                          color: theme.palette.common.white,
                        }}
                      />
                    </CustomHeadTableCell>
                    {tableTitle.map((item) => {
                      const isName = item.title.includes("Image");

                      return (
                        <CustomHeadTableCell
                          key={item.id}
                          sxProps={{
                            position: isName ? "sticky" : "static",
                            left: isName ? 60 : 0,
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
                        backdropFilter: "blur(2px)",
                      }}
                    >
                      Actions
                    </CustomHeadTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.data.map((item) => {
                    return (
                      <ProductConditionListItem key={item.id} item={item} />
                    );
                  })}
                </TableBody>
              </Table>
            </PerfectScrollbar>
            <TablePagination
              component="div"
              count={data?.totalDocs || 0}
              page={productconditionPagination.page}
              rowsPerPage={productconditionPagination.pageSize}
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

export default ProductConditionList;
