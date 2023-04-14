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
import { Loctype, operation, warehouseStatus } from "__mock__";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import useDecodedData from "hooks/useDecodedData";
import useArea from "hooks/warehouse/area/useArea";
import useLocationAction from "hooks/warehouse/location/useLocation";
import useZone from "hooks/warehouse/zone/useZone";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
import { AddLocationRequestRoot } from "types/warehouse/location/addLocationRequest";

import useLocationForm, {
  LocationInitialValues,
  locationInitialValues,
} from "../hooks/useLocationForm";

function LocationsCreate() {
  const [areaLabel, setAreaLabel] = useState<string>("");
  const [zoneLabel, setZoneLabel] = useState<string>("");

  const { zones } = useZone();
  const { areas } = useArea();
  const navigate = useNavigate();
  const userDecoded = useDecodedData();
  const getSelectedWarehouse = useSelector(getWarehouseSelected);
  const { addLocationAction } = useLocationAction();

  const { values, handleChange, handleSubmit, touched, errors, setFieldValue } =
    useLocationForm({
      initialValues: locationInitialValues,
      onSubmit,
    });

  const lastPageLink = `/warehouse/details/${getSelectedWarehouse.id}/locations/listing`;

  async function onSubmit(values: LocationInitialValues) {
    const data: AddLocationRequestRoot = {
      userId: Number(userDecoded.id),
      warehouseId: getSelectedWarehouse.id,
      locationLabel: values.locationLabel,
      areaId: parseFloat(values.area),
      zoneId: parseFloat(values.zone),
      aisle: values.aisle,
      locationType: values.locationType,
      locationAlias: values.locationAlias,
      operations: values.operation,
      position: values.bin,
      rack: values.bay,
      shelf: values.level,
      status: parseInt(values.status, 10),

      ...(!Number.isNaN(parseFloat(values.height)) && {
        height: parseFloat(values.height),
      }),
      ...(!Number.isNaN(parseFloat(values.width)) && {
        width: parseFloat(values.width),
      }),
      ...(!Number.isNaN(parseFloat(values.length)) && {
        length: parseFloat(values.length),
      }),
      ...(!Number.isNaN(parseFloat(values.x)) && {
        x: parseFloat(values.x),
      }),
      ...(!Number.isNaN(parseFloat(values.y)) && {
        y: parseFloat(values.y),
      }),
      ...(!Number.isNaN(parseFloat(values.z)) && {
        z: parseFloat(values.z),
      }),
      ...(!Number.isNaN(parseFloat(values.volume)) && {
        volume: parseFloat(values.volume),
      }),
      ...(!Number.isNaN(parseFloat(values.maxLoad)) && {
        maxLoad: parseFloat(values.maxLoad),
      }),
    };

    const response = await addLocationAction(data);
    if (response) {
      navigate(lastPageLink);
    }
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

  const breadcrumbs = [
    { link: "Warehouse", to: "/warehouse/listing" },
    {
      link: `${getSelectedWarehouse.name}`,
      to: lastPageLink,
    },
  ];

  useEffect(() => {
    setFieldValue(
      "locationLabel",
      `${areaLabel}${zoneLabel.length > 0 ? "-" : ""}${zoneLabel}${
        values.aisle.length > 0 ? "-" : ""
      }${values.aisle}${values.bay.length > 0 ? "-" : ""}${values.bay}${
        values.level.length > 0 ? "-" : ""
      }${values.level}${values.bin.length > 0 ? "-" : ""}${values.bin}`,
    );
  }, [
    areaLabel,
    setFieldValue,
    values.aisle,
    values.bay,
    values.bin,
    values.level,
    zoneLabel,
  ]);

  useEffect(() => {
    let length: number;
    let breadth: number;
    let height: number;
    length = Number(values.length);
    breadth = Number(values.width);
    height = Number(values.height);

    setFieldValue("volume", length * breadth * height);
  }, [setFieldValue, values.height, values.length, values.width]);

  return (
    <Container maxWidth={false}>
      <TableToolbar
        breadcrumbs={breadcrumbs}
        rightActions={rightActionsData}
        title="New Location"
      />
      <Typography>{values.locationLabel}</Typography>
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
                  type="number"
                  value={values.height}
                  onChange={handleChange("height")}
                />
                <TextField
                  iconEnd
                  icon={<Typography>cm</Typography>}
                  id="width"
                  label="Width"
                  name="width"
                  size="small"
                  type="number"
                  value={values.width}
                  onChange={handleChange("width")}
                />
                <TextField
                  iconEnd
                  icon={<Typography>cm</Typography>}
                  id="length"
                  label="Length"
                  name="length"
                  size="small"
                  type="number"
                  value={values.length}
                  onChange={handleChange("length")}
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
                  type="number"
                  value={values.maxLoad}
                  onChange={handleChange("maxLoad")}
                />
                <TextField
                  disabled
                  iconEnd
                  icon={<Typography>cm</Typography>}
                  id="volume"
                  label="Volume"
                  name="volume"
                  size="small"
                  value={values.volume}
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
                  type="number"
                  value={values.locationAlias}
                  onChange={handleChange("locationAlias")}
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
              <Stack direction="row" gap={2}>
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
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField
                  isSelect
                  error={!!touched.status && !!errors.status}
                  helperText={(touched.status && errors && errors.status) || ""}
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
                  type="number"
                  value={values.x}
                  onChange={handleChange("x")}
                />
              </Stack>
              <Stack direction="row" gap={2} marginTop={2}>
                <TextField
                  id="yy"
                  label="Y"
                  name="minExpiryDays"
                  size="small"
                  type="number"
                  value={values.y}
                  onChange={handleChange("y")}
                />
              </Stack>

              <Stack direction="row" gap={2} marginTop={2}>
                <TextField
                  id="z"
                  label="Z"
                  name="z"
                  size="small"
                  type="number"
                  value={values.z}
                  onChange={handleChange("z")}
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
