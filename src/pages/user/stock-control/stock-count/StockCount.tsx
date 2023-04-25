import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import { useNavigate } from "react-router";
import AppRoutes from "routes/appRoutes";
import StockCountList from "./component/list/StockCountList";

function StockCount() {
  const navigate = useNavigate();
  return (
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={false}
          navTitle="Stock Control"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "New",
              onClick: () => {
                navigate(
                  `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.stock_count.create}`,
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
          title="Stock Count"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <StockCountList />
        </Box>
      </CardContent>
    </Container>
  );
}

export default StockCount;
