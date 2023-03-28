import AddCircleIcon from "@mui/icons-material/AddCircle";
import { CardContent } from "@mui/material";
import { Container, Box } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import PurchaseOrderList from "./component/list/PurchaseOrderList";

function PurchaseOrders() {
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
