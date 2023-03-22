import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import WarehouseListing from "./components/warehouse-list/WarehouseListing";

function Warehouse() {
  const navigate = useNavigate();
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
          <WarehouseListing />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Warehouse;
