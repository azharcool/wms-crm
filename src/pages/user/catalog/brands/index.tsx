import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";

import TableToolbar from "components/table-toolbar";
import useBrandAction from "hooks/catalog/brand/useBrandAction";
import useGetAllBrand from "hooks/querys/catalog/brands/useGetAllBrand";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { useSelector } from "react-redux";
import { getSelectedBrand } from "redux/catalog/brandSelector";
import AddBrand from "./components/AddBrand";
import BrandListing from "./components/BrandListing";

function Brands() {
  const queryClient = useQueryClient();
  const [openBrand, setOpenBrand] = useState(false);

  const [brandPagination, setBrandPagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const {
    data: brandData,
    refetch,
    isLoading,
  } = useGetAllBrand(brandPagination);
  const { bulkDeleteBrandAsync } = useBrandAction();

  const getSelectedBrandIdsState = useSelector(getSelectedBrand);
  const handleBrand = () => {
    setOpenBrand((s) => !s);
  };

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          buttonText="New"
          handleClick={() => {
            // navigate(AppRoutes.CATALOG.productCreate);
          }}
          navTitle="CATALOG"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                handleBrand();
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
          title="Brands"
          onBulkHandle={() => {
            const ids = getSelectedBrandIdsState.toString();
            bulkDeleteBrandAsync(ids);
          }}
        />
        <Box sx={{ mt: 3 }}>
          <BrandListing data={brandData} />
        </Box>
      </CardContent>

      {openBrand ? (
        <AddBrand handleClose={handleBrand} open={openBrand} />
      ) : null}
    </Container>
  );
}

export default Brands;
