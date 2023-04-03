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
import useGetAllPaginationProductCondition from "hooks/querys/setting/product-condition/useGetAllPaginationProductCondition";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
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

function ProductConditionList() {
  const { data: productconditionResponse } =
    useGetAllPaginationProductCondition({
      page: 1,
      pageSize: 10,
    });

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
                  {productconditionResponse?.data.map((item) => {
                    return (
                      <ProductConditionListItem key={item.id} item={item} />
                    );
                  })}
                </TableBody>
              </Table>
            </PerfectScrollbar>
          </TableContainer>
        </Box>
      </PerfectScrollbar>
    </>
  );
}

export default ProductConditionList;
