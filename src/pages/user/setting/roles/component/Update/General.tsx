import { Card, Container, Grid, Stack } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import TextField from "components/textfield";

function General() {
  return (
    <Container>
      <Grid container spacing={2} my={2}>
        <Grid item xs={8}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Details">
              <Stack direction="column" gap={2}>
                <TextField id="name" label="Name" name="name" size="small" />
                <TextField
                  multiline
                  rows={6}
                  name="description"
                  label="Description"
                  size="small"
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default General;
