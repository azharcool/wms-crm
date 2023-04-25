import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CardContent } from "@mui/material";
import { Box, Container } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";
import PurchaseOrderList from "./component/list/PurchaseOrderList";

function PurchaseOrders() {
  const navigate = useNavigate();
  return (
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={false}
          navTitle="PURCHASE"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () =>
                navigate(
                  `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.purchaseOrders.create}`,
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
          title="Purchase Order"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <PurchaseOrderList />
        </Box>
      </CardContent>
    </Container>
  );
}

export default PurchaseOrders;
