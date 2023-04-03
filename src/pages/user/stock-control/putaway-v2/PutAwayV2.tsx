import { Box, CardContent, Container } from "@mui/material";
// import { Container, Box } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import PutAwayV2List from "./component/list/PutAwayV2List";

function PutAwayV2() {
  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={false}
          navTitle="Stock Control"
          title="Putaway"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <PutAwayV2List />
        </Box>
      </CardContent>
    </Container>
  );
}

export default PutAwayV2;
