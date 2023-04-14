import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useProductAction from "hooks/actions/catalog/product/useProductAction";
import useGetAllProduct from "hooks/querys/catalog/product/useGetAllProduct";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedProduct } from "redux/catalog/productSelector";
import ProductListing from "./components/ProductListing";

function Products() {
  const navigate = useNavigate();
  const [productPagination, setproductPagination] = useState({
    pageSize: 10,
    page: 1,
  });

  const getSelectedProductIdsState = useSelector(getSelectedProduct);

  const { bulkDeleteProductAsync } = useProductAction();

  const { data: productPaginationResponse, refetch } =
    useGetAllProduct(productPagination);
  const ids = getSelectedProductIdsState.toString();

  const handlePageChange = (pageNo: number) => {
    setproductPagination((prevState) => ({ ...prevState, page: pageNo }));
    setTimeout(() => {
      refetch();
    }, 500);
  };
  const handlePageLimitChange = (limit: number) => {
    setproductPagination((prevState) => ({ ...prevState, pageSize: limit }));
    setTimeout(() => {
      refetch();
    }, 500);
  };

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={!!ids}
          navTitle="CATALOG"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                navigate(AppRoutes.CATALOG.productCreate);
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
          title="Products"
          onBulkHandle={() => {
            bulkDeleteProductAsync(ids);
          }}
        />
        <Box sx={{ mt: 3 }}>
          <ProductListing
            data={productPaginationResponse}
            paginationData={productPagination}
            setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
            setPageLimit={(limit: number) => handlePageLimitChange(limit)}
            total={productPaginationResponse?.totalDocs || 0}
          />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Products;
