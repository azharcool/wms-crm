import { Card, Container, Grid, Stack } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import TextField from "components/textfield";
import useArea from "hooks/warehouse/area/useArea";
import useZone from "hooks/warehouse/zone/useZone";
import useLocationForm, {
  locationInitialValues,
} from "pages/user/warehouse2/warehouse-details/locations/hooks/useLocationForm";
import { useState } from "react";

function Location() {
  const { zones } = useZone();
  const { areas } = useArea();

  const { values, handleChange, handleSubmit, touched, errors, setFieldValue } =
    useLocationForm({
      initialValues: locationInitialValues,
      onSubmit,
    });

  const [areaLabel, setAreaLabel] = useState<string>("");
  const [zoneLabel, setZoneLabel] = useState<string>("");

  function onSubmit() {}
  return (
    <Container>
      <Grid item xs={8}>
        <Card
          sx={{
            flex: 1,
            mt: "25px",
          }}
        >
          <CustomCardContent title="Location">
            <Stack direction="row" gap={3}>
              <TextField
                disabled
                id="warehouse"
                label="Warehouse"
                name="warehouse"
                size="small"
                // value={getSelectedWarehouse.name}
              />

              <TextField
                isSelect
                error={!!touched.area && !!errors.area}
                helperText={(touched.area && errors && errors.area) || ""}
                id="area"
                label="Area"
                menuItems={areas}
                name="area"
                size="small"
                value={values.area}
                onSelectHandler={(e) => {
                  setFieldValue("area", e.target.value);
                  const tempId = e.target.value;
                  const tempArr = areas.filter((item) => item.id === tempId);
                  setAreaLabel(tempArr[0].label);
                }}
              />
              <TextField
                isSelect
                disabled={Boolean(!values.area)}
                error={!!touched.zone && !!errors.zone}
                helperText={(touched.zone && errors && errors.zone) || ""}
                id="zone"
                label="Zone"
                menuItems={zones}
                name="zone"
                size="small"
                value={values.zone}
                onSelectHandler={(e) => {
                  setFieldValue("zone", e.target.value);
                  const tempId = e.target.value;
                  const tempArr = zones.filter((item) => item.id === tempId);
                  setZoneLabel(tempArr[0].label);
                }}
              />
            </Stack>
          </CustomCardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default Location;
