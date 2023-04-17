import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import BillingList from "./component/list/BillingList";

function Billing() {
  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          navTitle="Settings"
          title="Billing"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <BillingList />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Billing;
