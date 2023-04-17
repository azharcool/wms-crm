import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, CardContent, Container } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import ReorderList from "./component/list/ReorderList";

function Reorder() {
  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isDelete={false}
          isBulkDisabled
          navTitle="Stock Control"
          title="Reorder"
          moreMenuItem={["Purchase Order", "Stock Transfer"]}
          onBulkHandle={(value) => {}}
        />
        <Box sx={{ mt: 3 }}>
          <ReorderList />
        </Box>
      </CardContent>
    </Container>
  );
}

export default Reorder;
