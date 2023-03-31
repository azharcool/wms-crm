import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";

import TableToolbar from "components/table-toolbar";
import useBrandAction from "hooks/catalog/brand/useBrandAction";
import useGetAllBrand from "hooks/querys/catalog/brands/useGetAllBrand";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getSelectedBrand } from "redux/catalog/brandSelector";
import BrandListing from "./components/BrandListing";
import ManageBrand from "./components/ManageBrand";

function Brands() {
  const [manageOpen, setManageOpen] = useState(false);

  const [brandPagination, setBrandPagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const { data: brandData } = useGetAllBrand(brandPagination);
  const { bulkDeleteBrandAsync } = useBrandAction();

  const getSelectedBrandIdsState = useSelector(getSelectedBrand);

  const handleMange = () => {
    setManageOpen((s) => !s);
  };

  const ids = getSelectedBrandIdsState.toString();

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          buttonText="New"
          handleClick={() => {
            // navigate(AppRoutes.CATALOG.productCreate);
          }}
          isBulkDisabled={!!ids}
          navTitle="CATALOG"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                handleMange();
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
            bulkDeleteBrandAsync(ids);
          }}
        />
        <Box sx={{ mt: 3 }}>
          <BrandListing data={brandData} />
        </Box>
      </CardContent>

      {manageOpen ? (
        <ManageBrand handleClose={handleMange} open={manageOpen} />
      ) : null}
    </Container>
  );
}

export default Brands;
