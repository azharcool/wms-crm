import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useGetAllWarehouse from "hooks/querys/catalog/warehouse/useGetAllWarehouse";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WarehouseListing from "./components/warehouse-list/WarehouseListing";

function Warehouse() {
  const navigate = useNavigate();
  const [warehousePagination, setWarehousepagination] = useState({
    pageSize: 10,
    page: 1,
  });
  const { data: warehousePaginationResponse } =
    useGetAllWarehouse(warehousePagination);

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          buttonText="New"
          navTitle="Warehouses"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                navigate(
                  `${AppRoutes.warehouse.warehouseLayout}/${AppRoutes.warehouse.create}`,
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
          title="Warehouses"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <WarehouseListing data={warehousePaginationResponse} />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Warehouse;
