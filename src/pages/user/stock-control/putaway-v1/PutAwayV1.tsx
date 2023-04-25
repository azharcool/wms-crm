import { Box, CardContent, Container } from "@mui/material";
// import { Container, Box } from "@mui/system";
import TableToolbar from "components/table-toolbar";
import PutAwayV1List from "./component/list/PutAwayV1List";

function PutAwayV1() {
  return (
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          hasBulk
          isBulkDisabled={false}
          navTitle="Stock Control"
          title="Putaway"
          onBulkHandle={() => {}}
        />
        <Box sx={{ mt: 3 }}>
          <PutAwayV1List />
        </Box>
      </CardContent>
    </Container>
  );
}

export default PutAwayV1;
