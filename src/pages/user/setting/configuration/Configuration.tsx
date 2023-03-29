import { CardContent } from "@mui/material";
import { Container } from "@mui/system";
import TableToolbar from "components/table-toolbar";

function Configuration() {
  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar title="Configuration" />
        {/* <Box sx={{ mt: 3 }}>
          <PurchaseOrderList />
        </Box> */}
      </CardContent>
    </Container>
  );
}

export default Configuration;
