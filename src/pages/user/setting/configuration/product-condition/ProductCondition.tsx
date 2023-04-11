import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import useGetAllPaginationProductCondition from "hooks/querys/setting/product-condition/useGetAllPaginationProductCondition";
import { useState } from "react";
import ManageProductCondition from "./components/ManageProductCondition";
import ProductConditionList from "./components/list/ProductConditionList";

function ProductCondition() {
  const [manageOpen, setManageOpen] = useState(false);
  const [productconditionPagination, setproductconditionPagination] = useState({
    pageSize: 10,
    page: 1,
  });

  const { data: productconditionResponse, refetch } =
    useGetAllPaginationProductCondition(productconditionPagination);

  const handlePageChange = (pageNo: number) => {
    setproductconditionPagination((prevState) => ({
      ...prevState,
      page: pageNo,
    }));
    setTimeout(() => {
      refetch();
    }, 500);
  };
  const handlePageLimitChange = (limit: number) => {
    setproductconditionPagination((prevState) => ({
      ...prevState,
      pageSize: limit,
    }));
    setTimeout(() => {
      refetch();
    }, 500);
  };
  const handleManage = () => {
    setManageOpen((s) => !s);
  };

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          navTitle="CONFIGURATION"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                handleManage();
              },

              icon: (
                <AddCircleIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                  }}
                />
              ),
            },
          ]}
          title="Product Condition"
        />
        <Box sx={{ mt: 3 }}>
          <ProductConditionList
            data={productconditionResponse}
            paginationData={productconditionPagination}
            setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
            setPageLimit={(limit: number) => handlePageLimitChange(limit)}
            total={productconditionResponse?.totalDocs || 0}
          />
        </Box>
      </CardContent>

      {manageOpen ? (
        <ManageProductCondition handleClose={handleManage} open={manageOpen} />
      ) : null}
    </Container>
  );
}

export default ProductCondition;
