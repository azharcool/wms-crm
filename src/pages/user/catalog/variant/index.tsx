import { Box, Card, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useGetAllVariant from "hooks/querys/catalog/variants/useGetAllVariant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VariantListing from "./components/VariantListing";

function Variant() {
  const navigate = useNavigate();
  const [variantPagination, setvariantPagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const { data: variantPaginationResponse } =
    useGetAllVariant(variantPagination);

  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 0 }}>
          <TableToolbar
            // buttonText="New"
            // handleClick={() => {
            //   navigate(AppRoutes.CATALOG.productCreate);
            // }}
            buttonText="New"
            navTitle="CATALOG"
            title="Variant"
          />
          <Box sx={{ mt: 3 }}>
            <VariantListing data={variantPaginationResponse} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Variant;
