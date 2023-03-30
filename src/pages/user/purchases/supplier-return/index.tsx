import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CardContent } from "@mui/material";
import { Container, Box } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import SupplierReturnList from "./components/list/SupplierReturnList";

function SupplierReturn() {
  const navigate = useNavigate();
  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          navTitle="PURCHASE"
          isBulkDisabled={false}
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () =>
                navigate(
                  `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplierReturns.create}`,
                ),
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
          title="Supplier Return"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <SupplierReturnList />
        </Box>
      </CardContent>
    </Container>
  );
}

export default SupplierReturn;
