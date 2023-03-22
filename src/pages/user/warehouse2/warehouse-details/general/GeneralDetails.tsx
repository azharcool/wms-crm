import { Card, Grid, Stack } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import TextField from "components/textfield";

function WarehouseGeneral() {
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
                size="small"
                value="warehouse 1"
              />
              <TextField
                disabled
                id="type"
                label="Label"
                name="label"
                size="small"
                value="label 1"
              />
            </Stack>

            <TextField
              disabled
              multiline
              id="adress"
              label="Address"
              name="address"
              value="abc xyz"
            />

            <Stack direction="row" gap={2}>
              <TextField
                disabled
                id="phone"
                label="Phone Number"
                name="phone"
                size="small"
                value="112345"
              />
              <TextField
                disabled
                id="country"
                label="Country"
                name="country"
                size="small"
                value="india"
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                disabled
                id="city"
                label="City"
                name="city"
                size="small"
                value="Nagpur"
              />
              <TextField
                disabled
                id="zipcode"
                label="Zip Code"
                name="zip"
                size="small"
                value="122345"
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                disabled
                id="logintude"
                label="Longitude"
                name="longitude"
                size="small"
                value="122345"
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
                name="fname"
                size="small"
                value="Aasif"
              />
              <TextField
                disabled
                id="lname"
                label="Last Name"
                name="lname"
                size="small"
                value="Sheikh"
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
              size="small"
              value="Active"
            />

            <TextField
              disabled
              label="Picking Strategy"
              name="pickingstrategy"
              size="small"
              value="Create one picklist per order"
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

export default WarehouseGeneral;
