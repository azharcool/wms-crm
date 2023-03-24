import { Box, Card, CardContent, Container } from "@mui/material";
import ContentListing from "./ContentListing";

function Contents() {
  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent sx={{ paddingTop: 0 }}>
          <Box sx={{ mt: 3 }}>
            <ContentListing />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Contents;
