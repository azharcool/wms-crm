import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Card, Container, Grid, Typography } from "@mui/material";

export default function International() {
  return (
    <Container>
      <Card sx={{ width: "500px", height: "100px", p: 4.5 }}>
        <Grid container columns={10} spacing={0}>
          <Grid item xs={1}>
            <RemoveCircleIcon />
          </Grid>
          <Grid item xs={9}>
            <Typography>This is not international variant</Typography>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}
