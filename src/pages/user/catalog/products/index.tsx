import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useProductAction from "hooks/catalog/product/useProductAction";
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

  const { data: productPaginationResponse } =
    useGetAllProduct(productPagination);

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          buttonText="New"
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
            const ids = getSelectedProductIdsState.toString();
            bulkDeleteProductAsync(ids);
          }}
        />
        <Box sx={{ mt: 3 }}>
          <ProductListing data={productPaginationResponse} />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Products;
