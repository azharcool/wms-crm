import { Box, CardContent, Container } from "@mui/material";
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
  const { data: variantPaginationResponse, refetch } =
    useGetAllVariant(variantPagination);

  const handlePageChange = (pageNo: number) => {
    setvariantPagination((prevState) => ({ ...prevState, page: pageNo }));
    setTimeout(() => {
      refetch();
    }, 500);
  };
  const handlePageLimitChange = (limit: number) => {
    setvariantPagination((prevState) => ({ ...prevState, pageSize: limit }));
    setTimeout(() => {
      refetch();
    }, 500);
  };

  return (
    <Container maxWidth={false}>
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
          <VariantListing
            data={variantPaginationResponse}
            paginationData={variantPagination}
            setCurrentPage={(pageNo: number) => handlePageChange(pageNo)}
            setPageLimit={(limit: number) => handlePageLimitChange(limit)}
            total={0}
          />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Variant;
