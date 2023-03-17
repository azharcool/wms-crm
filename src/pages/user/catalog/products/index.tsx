import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Card, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useGetAllProduct from "hooks/querys/catalog/product/useGetAllProduct";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductListing from "./components/ProductListing";

function Products() {
  const navigate = useNavigate();
  const [productPagination, setproductPagination] = useState({
    pageSize: 1,
    page: 10,
  });

  const getProductQuery = useGetAllProduct(productPagination);

  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 0 }}>
          <TableToolbar
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
          />
          <Box sx={{ mt: 3 }}>
            <ProductListing />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Products;
