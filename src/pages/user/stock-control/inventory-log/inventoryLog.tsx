import { Box, CardContent, Container } from "@mui/material";
// import { Container, Box } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import InventoryLogList from "./component/inventoryLogList";

function InventoryLog() {
  return (
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={false}
          navTitle="Stock Control"
          title="Inventory Log"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <InventoryLogList />
        </Box>
      </CardContent>
    </Container>
  );
}

export default InventoryLog;
