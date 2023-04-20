import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";
import TransferList from "./component/list/TransferList";

function StockTransfer() {
  const navigate = useNavigate();

  return (
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          // isBulkDisabled={!!ids}
          navTitle="Stock Control"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () =>
                navigate(
                  `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.transfer.create}`,
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
          title="Transfer"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <TransferList />
        </Box>
      </CardContent>
    </Container>
  );
}

export default StockTransfer;
