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

interface IPaginationData {
  pageSize: number;
  page: number;
}

interface IProductConditionListing {
  data?: GetAllProductConditionPaginationResponseRoot;
  total: number;
  paginationData: IPaginationData;
  setCurrentPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
}

function ProductConditionList(props: IProductConditionListing) {
  const { data, total, setCurrentPage, setPageLimit, paginationData } = props;

  const handleLimitChange = (event: any) => {
    setPageLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setCurrentPage(newPage);
  };

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
                      const isName = item.title.includes("Image");

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
                      <ProductConditionListItem key={item.id} item={item} />
                    );
                  })}
                </TableBody>
              </Table>
            </PerfectScrollbar>
            <TablePagination
              component="div"
              count={total}
              page={paginationData.page}
              rowsPerPage={paginationData.pageSize}
              rowsPerPageOptions={[5, 10, 25]}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleLimitChange}
            />
          </TableContainer>
        </Box>
      </PerfectScrollbar>
    </>
  );
}

export default ProductConditionList;
