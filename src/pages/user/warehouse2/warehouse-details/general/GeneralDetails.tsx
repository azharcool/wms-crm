import { Card, Grid, Stack } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import TextField from "components/textfield";
import useGetByIdWarehouse from "hooks/querys/warehouse/useGetByIdWarehouse";
import { useParams } from "react-router-dom";

function WarehouseGeneral() {
  const { detailsId } = useParams();

  const { data: warehouse } = useGetByIdWarehouse({
    warehouseId: Number(detailsId),
  });
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
                darkDisable
                disabled
                id="name"
                label="Warehouse Name"
                name="name"
                size="small"
                value={warehouse?.data.warehouseName}
              />
              <TextField
                darkDisable
                disabled
                id="type"
                label="Label"
                name="label"
                size="small"
                value={warehouse?.data.label}
              />
            </Stack>

            <TextField
              darkDisable
              disabled
              multiline
              id="adress"
              label="Address"
              name="address"
              value={warehouse?.data.address}
            />

            <Stack direction="row" gap={2}>
              <TextField
                darkDisable
                disabled
                id="phone"
                label="Phone Number"
                name="phone"
                size="small"
                value={warehouse?.data.phoneNumber}
              />
              <TextField
                darkDisable
                disabled
                id="country"
                label="Country"
                name="country"
                size="small"
                value={warehouse?.data.country}
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                darkDisable
                disabled
                id="city"
                label="City"
                name="city"
                size="small"
                value={warehouse?.data.city}
              />
              <TextField
                darkDisable
                disabled
                id="zipcode"
                label="Zip Code"
                name="zip"
                size="small"
                value={warehouse?.data.zipCode}
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                darkDisable
                disabled
                id="lng"
                label="Longitude"
                name="lng"
                size="small"
                value={warehouse?.data.lng}
              />

              <TextField
                darkDisable
                disabled
                id="latitude"
                label="Latitude"
                name="latitude"
                size="small"
                value={warehouse?.data.lat}
              />
            </Stack>
          </CustomCardContent>

          <CustomCardContent title="Primary Contact">
            <Stack direction="row" gap={2}>
              <TextField
                darkDisable
                disabled
                id="fname"
                label="First Name"
                name="fname"
                size="small"
                value={warehouse?.data.firstName}
              />
              <TextField
                darkDisable
                disabled
                id="lname"
                label="Last Name"
                name="lname"
                size="small"
                value={warehouse?.data.lastName}
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                darkDisable
                disabled
                id="email"
                label="Email"
                name="email"
                size="small"
                value={warehouse?.data.primaryEmail}
              />
              <TextField
                darkDisable
                disabled
                id="phonenumber"
                label="Phone Number"
                name="phone"
                size="small"
                value={warehouse?.data.primaryPhoneNumber}
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
              darkDisable
              disabled
              label="Status"
              name="status"
              size="small"
              value={warehouse?.data.status}
            />

            <TextField
              darkDisable
              disabled
              label="Picking Strategy"
              name="pickingstrategy"
              size="small"
              value={warehouse?.data.pickingStrategy}
            />
            <TextField
              darkDisable
              disabled
              label="Recieving Strategy"
              name="recievingstrategy"
              size="small"
              value={warehouse?.data.receivingStrategy}
            />
            <TextField
              darkDisable
              disabled
              label="Timezone"
              name="timezone"
              size="small"
              value={warehouse?.data.timezone}
            />
            <TextField
              darkDisable
              disabled
              label="Recieving Type"
              name="type"
              size="small"
              value={warehouse?.data.receivingType}
            />
          </CustomCardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default WarehouseGeneral;
