import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useGetAllSupplierWithPagination from "hooks/querys/catalog/supplier/useGetAllSupplierWithPagination";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SupplierList from "./component/list/SupplierList";

function Suppliers() {
  const navigate = useNavigate();
  const [suppliersPagination, setSupplierspagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const { data: supplierPaginationResponse } =
    useGetAllSupplierWithPagination(suppliersPagination);

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          // isBulkDisabled={!!ids}
          navTitle="PURCHASES"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                navigate(
                  `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplier.create}`,
                );
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
          title="Suppliers"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <SupplierList data={supplierPaginationResponse} />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Suppliers;
