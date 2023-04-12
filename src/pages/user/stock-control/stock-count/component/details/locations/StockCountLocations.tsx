import { Card, Container, Grid } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";

function StockCountLocations() {
  return (
    <Container>
      <Grid item xs={8}>
        <Card
          sx={{
            flex: 1,
            mt: "25px",
          }}
        >
          <CustomCardContent title="Location">hello</CustomCardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default StockCountLocations;
