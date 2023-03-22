import { Card, Grid, PaletteMode, Stack } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import TextField from "components/textfield";

function General() {
  return (
    <Grid container marginTop={2} spacing={2}>
      <Grid item xs={8}>
        <Card
          sx={{
            flex: 1,
          }}
        >
          <CustomCardContent title="Details">
            <Stack direction="row" gap={2}>
              <TextField
                disabled
                // iconEnd
                // icon={<Inventory2Icon />}
                id="name"
                label="Warehouse Name"
                name="name"
                value="warehouse 1"
                size="small"
              />
              <TextField
                disabled
                id="type"
                label="Label"
                name="label"
                value="label 1"
                size="small"
              />
            </Stack>

            <TextField
              disabled
              multiline
              id="adress"
              value="abc xyz"
              label="Address"
              name="address"
            />

            <Stack direction="row" gap={2}>
              <TextField
                disabled
                id="phone"
                label="Phone Number"
                name="phone"
                value="112345"
                size="small"
              />
              <TextField
                disabled
                id="country"
                label="Country"
                value="india"
                name="country"
                size="small"
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                disabled
                id="city"
                label="City"
                value="Nagpur"
                name="city"
                size="small"
              />
              <TextField
                disabled
                id="zipcode"
                label="Zip Code"
                value="122345"
                name="zip"
                size="small"
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                disabled
                id="logintude"
                label="Longitude"
                value="122345"
                name="longitude"
                size="small"
              />

              <TextField
                disabled
                id="latitude"
                label="Latitude"
                name="latitude"
                size="small"
              />
            </Stack>
          </CustomCardContent>

          <CustomCardContent title="Primary Contact">
            <Stack direction="row" gap={2}>
              <TextField
                disabled
                id="fname"
                label="First Name"
                value="Aasif"
                name="fname"
                size="small"
              />
              <TextField
                disabled
                id="lname"
                value="Sheikh"
                label="Last Name"
                name="lname"
                size="small"
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                disabled
                id="email"
                label="Email"
                name="email"
                size="small"
              />
              <TextField
                disabled
                id="phonenumber"
                label="Phone Number"
                name="phone"
                size="small"
              />
            </Stack>
          </CustomCardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card
          sx={{
            flex: 1,
          }}
        >
          <CustomCardContent title="Setting">
            <TextField
              disabled
              label="Status"
              name="status"
              value="Active"
              size="small"
            />

            <TextField
              disabled
              label="Picking Strategy"
              value="Create one picklist per order"
              name="pickingstrategy"
              size="small"
            />
            <TextField
              disabled
              label="Recieving Strategy"
              name="recievingstrategy"
              size="small"
            />
            <TextField disabled label="Timezone" name="timezone" size="small" />
            <TextField
              disabled
              label="Recieving Type"
              name="type"
              size="small"
            />
          </CustomCardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default General;
