import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Card, CardContent, Container } from "@mui/material";

import TableToolbar from "components/table-toolbar";
import useGetAllBrand from "hooks/querys/catalog/brands/useGetAllBrand";
import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { QueryKeys } from "utils/QueryKeys";
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

  useEffect(() => {
    if (brandData?.data) {
      queryClient.invalidateQueries([QueryKeys.getAllBrand]);
    }
  }, [brandData]);

  const handleVariant = () => {
    setOpenBrand((s) => !s);
  };

  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 0 }}>
          <TableToolbar
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
                  handleVariant();
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
          />
          <Box sx={{ mt: 3 }}>
            <BrandListing data={brandData} />
          </Box>
        </CardContent>
      </Card>
      {openBrand ? (
        <AddBrand handleClose={handleVariant} open={openBrand} />
      ) : null}
    </Container>
  );
}

export default Brands;
