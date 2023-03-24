import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SaveIcon from "@mui/icons-material/Save";
import {
  Card,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import useBrand from "hooks/catalog/brand/useBrand";
import useCategory from "hooks/catalog/categories/useCategory";
import useLocationAction from "hooks/warehouse/location/useZoneLocation";
import useZone from "hooks/warehouse/zone/useZone";
import { useSelector } from "react-redux";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
import { area, Loctype, warehouseStatus } from "__mock__";
import useLocationForm, {
  LocationInitialValues,
  locationInitialValues,
} from "../hooks/useLocationForm";

function LocationsCreate() {
  const { category } = useCategory();
  const { brand } = useBrand();
  const { zones } = useZone();
  const getSelectedWarehouse = useSelector(getWarehouseSelected);
  const { addLocationAction } = useLocationAction();

  const { values, handleChange, handleSubmit, touched, errors, setFieldValue } =
    useLocationForm({
      initialValues: locationInitialValues,
      onSubmit,
    });

  async function onSubmit(values: LocationInitialValues) {
    // console.log(values);
    // const response = await addLocationAction();
  }

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {},
      icon: (
        <ArrowBackIosIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Save",
      onClick: () => {
        handleSubmit();
      },
      icon: (
        <SaveIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
  ];

  return (
    <Container maxWidth={false}>
      <TableToolbar
        breadcrumbs={[{ link: "Warehouse", to: "" }]}
        buttonText="Save"
        handleClick={() => {
          // navigate(AppRoutes.CATALOG.ProductDetail);
        }}
        rightActions={rightActionsData}
        title="New Location"
      />
      <Grid container marginTop="10px" padding={0} spacing={2}>
        <Grid item xs={8}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Area/Zone">
              <Stack direction="row" gap={3}>
                <TextField
                  disabled
                  id="warehouse"
                  label="Warehouse"
                  name="warehouse"
                  size="small"
                  value={getSelectedWarehouse.name}
                />

                <TextField
                  isSelect
                  error={!!touched.area && !!errors.area}
                  helperText={(touched.area && errors && errors.area) || ""}
                  id="area"
                  label="Area"
                  menuItems={area}
                  name="area"
                  size="small"
                  value={values.area}
                  onSelectHandler={(e) => {
                    setFieldValue("area", e.target.value);
                  }}
                />
                <TextField
                  isSelect
                  disabled={Boolean(!values.area)}
                  id="zone"
                  label="Zone"
                  menuItems={zones}
                  name="zone"
                  size="small"
                  value={values.zone}
                  onSelectHandler={(e) => {
                    setFieldValue("zone", e.target.value);
                  }}
                />
              </Stack>
            </CustomCardContent>

            <CustomCardContent title="Shelf/Bin">
              <Stack direction="row" gap={4}>
                <TextField
                  id="aisle"
                  label="Aisle"
                  name="aisle"
                  size="small"
                  value={values.aisle}
                  onChange={handleChange("aisle")}
                />
                <TextField
                  id="bay"
                  label="Bay/Rack"
                  name="bay"
                  size="small"
                  value={values.bay}
                  onChange={handleChange("bay")}
                />
                <TextField
                  id="level"
                  label="Level/Shelf"
                  name="level"
                  size="small"
                  value={values.level}
                  onChange={handleChange("level")}
                />
                <TextField
                  id="bin"
                  label="Bin/Position"
                  name="bin"
                  size="small"
                  value={values.bin}
                  onChange={handleChange("bin")}
                />
              </Stack>
            </CustomCardContent>

            <CustomCardContent title="Demensions">
              <Stack direction="row" gap={3} marginTop={2}>
                <TextField
                  iconEnd
                  icon={<Typography>cm</Typography>}
                  id="height"
                  label="Height"
                  name="height"
                  size="small"
                  value={values.height}
                  onChange={(e) => {
                    setFieldValue(
                      "height",
                      e.target.value.replace(/[^0-9]/g, ""),
                    );
                  }}
                />
                <TextField
                  iconEnd
                  icon={<Typography>cm</Typography>}
                  id="width"
                  label="Width"
                  name="width"
                  size="small"
                  value={values.width}
                  onChange={(e) => {
                    setFieldValue(
                      "width",
                      e.target.value.replace(/[^0-9]/g, ""),
                    );
                  }}
                />
                <TextField
                  iconEnd
                  icon={<Typography>cm</Typography>}
                  id="length"
                  label="Length"
                  name="length"
                  size="small"
                  value={values.length}
                  onChange={(e) => {
                    setFieldValue(
                      "length",
                      e.target.value.replace(/[^0-9]/g, ""),
                    );
                  }}
                />
              </Stack>
              <Stack direction="row" gap={3} marginTop={3}>
                <TextField
                  iconEnd
                  icon={<Typography>kg</Typography>}
                  id="maxload"
                  label="Max.Load"
                  name="maxload"
                  size="small"
                  value={values.maxLoad}
                  onChange={(e) => {
                    setFieldValue(
                      "maxLoad",
                      e.target.value.replace(/[^0-9]/g, ""),
                    );
                  }}
                />
                <TextField
                  disabled
                  iconEnd
                  icon={<Typography>cm</Typography>}
                  id="volumn"
                  label="Volume"
                  name="volumn"
                  size="small"
                  value={values.volumn}
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
            <Divider />
            <CustomCardContent title="Settings">
              <Stack direction="row" gap={2} marginTop={2}>
                <TextField
                  id="locationAlias"
                  label="Location alias"
                  name="locationAlias"
                  size="small"
                  value={values.locationAlias}
                  onChange={(e) => {
                    setFieldValue(
                      "locationAlias",
                      e.target.value.replace(/[^0-9]/g, ""),
                    );
                  }}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField
                  isSelect
                  error={!!touched.locationType && !!errors.locationType}
                  helperText={
                    (touched.locationType && errors && errors.locationType) ||
                    ""
                  }
                  id="locationType"
                  label="Location type"
                  menuItems={Loctype}
                  name="locationType"
                  size="small"
                  value={values.locationType}
                  onSelectHandler={(e) => {
                    setFieldValue("locationType", e.target.value);
                  }}
                />
              </Stack>
              {/* <Stack direction="row" gap={2}>
                <TextField
                  isSelect
                  label="Operation"
                  menuItems={operation}
                  name="operation"
                  size="small"
                  value={values.operation}
                  onSelectHandler={(e) => {
                    setFieldValue("operation", e.target.value);
                  }}
                />
              </Stack> */}
              <Stack direction="row" gap={2}>
                <TextField
                  isSelect
                  label="Status"
                  menuItems={warehouseStatus}
                  name="status"
                  size="small"
                  value={values.status}
                  onSelectHandler={(e) => {
                    setFieldValue("status", e.target.value);
                  }}
                />
              </Stack>
            </CustomCardContent>
            <CustomCardContent title="Coordinates">
              <Stack direction="row" gap={2} marginTop={2}>
                <TextField
                  id="x"
                  label="X"
                  name="x"
                  size="small"
                  value={values.x}
                  onChange={(e) => {
                    setFieldValue("x", e.target.value.replace(/[^0-9]/g, ""));
                  }}
                />
              </Stack>
              <Stack direction="row" gap={2} marginTop={2}>
                <TextField
                  id="yy"
                  label="Y"
                  name="minExpiryDays"
                  size="small"
                  value={values.y}
                  onChange={(e) => {
                    setFieldValue("y", e.target.value.replace(/[^0-9]/g, ""));
                  }}
                />
              </Stack>

              <Stack direction="row" gap={2} marginTop={2}>
                <TextField
                  id="z"
                  label="Z"
                  name="z"
                  size="small"
                  value={values.z}
                  onChange={(e) => {
                    setFieldValue("z", e.target.value.replace(/[^0-9]/g, ""));
                  }}
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default LocationsCreate;
