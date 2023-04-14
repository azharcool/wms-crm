import { Card, Divider, Grid, Stack, Typography } from "@mui/material";
import { Loctype, operation, warehouseStatus } from "__mock__";
import CustomCardContent from "components/card/CustomCardContent";
import TextField from "components/textfield";
import { FormikProps } from "formik";
import useBrand from "hooks/actions/catalog/brand/useBrand";
import useCategory from "hooks/actions/catalog/categories/useCategory";
import useArea from "hooks/actions/warehouse/area/useArea";
import useZone from "hooks/actions/warehouse/zone/useZone";
import { useEffect, useState } from "react";
import { GetByIdLocationResponseData } from "types/warehouse/location/getByIdLocationResponse";
import { LocationInitialValues } from "../hooks/useLocationForm";

interface IGeneral {
  isTrue?: boolean;
  nameRef?: any;
  editable?: boolean;
  data?: GetByIdLocationResponseData;
  formik: FormikProps<LocationInitialValues>;
}

function General(props: IGeneral) {
  const { isTrue, nameRef, editable, data, formik } = props;
  const { areas } = useArea();
  const { category } = useCategory();
  const { brand } = useBrand();
  const { zones } = useZone();

  const { values, setFieldValue, errors, touched } = formik;
  const [areaLabel, setAreaLabel] = useState<string>("");
  const [zoneLabel, setZoneLabel] = useState<string>("");

  useEffect(() => {
    if (data) {
      setFieldValue("warehouse", data?.warehouseName || "");
      setFieldValue("locationLabel", data?.locationLabel || "");
      setFieldValue("area", data?.areaId);
      setFieldValue("zone", data?.zoneId || "");
      setFieldValue("aisle", data?.aisle || "");
      setFieldValue("bay", data?.rack || "");
      setFieldValue("level", data?.shelf || "");
      setFieldValue("bin", data?.position || "");
      setFieldValue("height", data?.height || "");
      setFieldValue("width", data?.width || "");
      setFieldValue("length", data?.length || "");
      setFieldValue("maxLoad", data?.maxLoad || "");
      setFieldValue("volume", data?.volume || "");
      setFieldValue("locationType", data?.locationType || "");
      setFieldValue("locationAlias", data?.locationAlias || "");
      setFieldValue("operations", data?.operations || "");
      setFieldValue("status", data?.status || "");
      setFieldValue("x", data?.x || "");
      setFieldValue("y", data?.y || "");
      setFieldValue("z", data?.z || "");
      // setAreaLabel(values.locationLabel)
    }
  }, [data, editable]);

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
    <>
      <Typography
        sx={{ marginBottom: "8px", fontSize: "18px", fontWeight: "500" }}
      >
        {values.locationLabel}
      </Typography>
      <Grid container padding={0} spacing={2}>
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
                  value={data?.warehouseName || ""}
                />

                <TextField
                  disabled
                  isSelect
                  id="area"
                  label="Area"
                  menuItems={areas}
                  name="area"
                  size="small"
                  value={values.area}
                />
                <TextField
                  disabled
                  isSelect
                  id="zone"
                  label="Zone"
                  menuItems={zones}
                  name="zone"
                  size="small"
                  value={values.zone}
                />
              </Stack>
            </CustomCardContent>

            <CustomCardContent title="Shelf/Bin">
              <Stack direction="row" gap={4}>
                <TextField
                  disabled={!editable}
                  id="aisle"
                  label="Aisle"
                  name="aisle"
                  nameRef={nameRef}
                  size="small"
                  value={values.aisle}
                  onChange={formik.handleChange("aisle")}
                />
                <TextField
                  disabled={!editable}
                  id="bay"
                  label="Bay/Rack"
                  name="bay"
                  nameRef={nameRef}
                  size="small"
                  value={values.bay}
                  onChange={formik.handleChange("bay")}
                />
                <TextField
                  disabled={!editable}
                  id="level"
                  label="Level/Shelf"
                  name="level"
                  nameRef={nameRef}
                  size="small"
                  value={values.level}
                  onChange={formik.handleChange("level")}
                />
                <TextField
                  disabled={!editable}
                  id="bin"
                  label="Bin/Position"
                  name="bin"
                  nameRef={nameRef}
                  size="small"
                  value={values.bin}
                  onChange={formik.handleChange("bin")}
                />
              </Stack>
            </CustomCardContent>

            <CustomCardContent title="Demensions">
              <Stack direction="row" gap={3} marginTop={2}>
                <TextField
                  disabled={!editable}
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
                  disabled={!editable}
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
                  disabled={!editable}
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
                  disabled={!editable}
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
                  disabled={!editable}
                  id="volume"
                  label="Volume"
                  name="volume"
                  size="small"
                  value={values.volume}
                  onChange={(e) => {
                    setFieldValue(
                      "volume",
                      e.target.value.replace(/[^0-9]/g, ""),
                    );
                  }}
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
                  disabled={!editable}
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
                  disabled={!editable}
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
                  disabled={!editable}
                  label="Operation"
                  menuItems={operation}
                  name="operations"
                  size="small"
                  value={values.operation}
                  onSelectHandler={(e) => {
                    setFieldValue("operations", e.target.value);
                  }}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField
                  isSelect
                  disabled={!editable}
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
                  disabled={!editable}
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
                  disabled={!editable}
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
                  disabled={!editable}
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
    </>
  );
}

export default General;
