import { Card, Divider, Grid, Stack } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import TextField from "components/textfield";
import { FormikProps } from "formik";
import useBrand from "hooks/catalog/brand/useBrand";
import useCategory from "hooks/catalog/categories/useCategory";
import { useEffect } from "react";
import { IGetByIdLocationData } from "types/warehouse/location/getByIdLocationResponse";
import {
  area,
  detailMenu,
  Loctype,
  operation,
  warehouseStatus,
} from "__mock__";

interface IGeneral {
  isTrue?: boolean;
  nameRef?: any;
  editable?: boolean;
  data?: IGetByIdLocationData;
  formik: FormikProps<any>;
}

function General(props: IGeneral) {
  const { isTrue, nameRef, editable, data, formik } = props;

  const { category } = useCategory();
  const { brand } = useBrand();

  useEffect(() => {
    if (data) {
      formik?.setFieldValue("warehouse", data?.warehouse || "");
      formik?.setFieldValue("area", data?.area);
      formik?.setFieldValue("zone", data?.zone || "");
      formik?.setFieldValue("aisle", data?.aisle || "");
      formik?.setFieldValue("bay", data?.bay || "");
      formik?.setFieldValue("level", data?.level || "");
      formik?.setFieldValue("bin", data?.bin || "");
      formik?.setFieldValue("height", data?.height || "");
      formik?.setFieldValue("width", data?.width || "");
      formik?.setFieldValue("length", data?.length || "");
      formik?.setFieldValue("maxload", data?.maxload || "");
      formik?.setFieldValue("volume", data?.volume || "");
      formik?.setFieldValue("location_alias", data?.location_alias || "");
      formik?.setFieldValue("location_type", data?.location_type || "");
      formik?.setFieldValue("status", data?.status || "");
      formik?.setFieldValue("x", data?.x || "");
      formik?.setFieldValue("y", data?.y || "");
      formik?.setFieldValue("z", data?.z || "");
    }
  }, [data]);

  return (
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
                isSelect
                disabled={isTrue}
                id="warehouse"
                label="Warehouse"
                menuItems={detailMenu}
                name="warehouse"
                size="small"
                value={formik?.values.warehouse}
                onSelectHandler={(e) => {
                  formik?.setFieldValue("warehouse", e.target.value);
                }}
              />

              <TextField
                isSelect
                error={!!formik.touched.area && !!formik.errors.area}
                // helperText={
                //   (formik.touched.area &&
                //     formik.errors &&
                //     formik.errors.area) ||
                //   ""
                // }
                id="area"
                label="Area"
                menuItems={area}
                name="area"
                size="small"
                value={formik?.values.area}
                onSelectHandler={(e) => {
                  formik?.setFieldValue("area", e.target.value);
                }}
              />
              <TextField
                isSelect
                disabled={isTrue}
                id="zone"
                label="Zone"
                menuItems={detailMenu}
                name="zone"
                size="small"
                value={formik?.values.zone}
                onSelectHandler={(e) => {
                  formik?.setFieldValue("zone", e.target.value);
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
                nameRef={nameRef}
                size="small"
                value={formik?.values.aisle}
                onChange={formik.handleChange("aisle")}
              />
              <TextField
                id="bay"
                label="Bay/Rack"
                name="bay"
                nameRef={nameRef}
                size="small"
                value={formik?.values.bay}
                onChange={formik.handleChange("bay")}
              />
              <TextField
                id="level"
                label="Level/Shelf"
                name="level"
                nameRef={nameRef}
                size="small"
                value={formik?.values.level}
                onChange={formik.handleChange("level")}
              />
              <TextField
                id="bin"
                label="Bin/Position"
                name="bin"
                nameRef={nameRef}
                size="small"
                value={formik?.values.bin}
                onChange={formik.handleChange("bin")}
              />
            </Stack>
          </CustomCardContent>

          <CustomCardContent title="Demensions">
            <Stack direction="row" gap={3} marginTop={2}>
              <TextField
                id="height"
                label="Height"
                name="height"
                size="small"
                value={formik?.values.height}
                onChange={(e) => {
                  formik?.setFieldValue(
                    "height",
                    e.target.value.replace(/[^0-9]/g, ""),
                  );
                }}
              />
              <TextField
                id="width"
                label="Width"
                name="width"
                size="small"
                value={formik?.values.width}
                onChange={(e) => {
                  formik?.setFieldValue(
                    "width",
                    e.target.value.replace(/[^0-9]/g, ""),
                  );
                }}
              />
              <TextField
                id="length"
                label="Length"
                name="length"
                size="small"
                value={formik?.values.length}
                onChange={(e) => {
                  formik?.setFieldValue(
                    "length",
                    e.target.value.replace(/[^0-9]/g, ""),
                  );
                }}
              />
            </Stack>
            <Stack direction="row" gap={3} marginTop={3}>
              <TextField
                id="maxload"
                label="Max.Load"
                name="maxload"
                size="small"
                value={formik?.values.maxload}
                onChange={(e) => {
                  formik?.setFieldValue(
                    "maxload",
                    e.target.value.replace(/[^0-9]/g, ""),
                  );
                }}
              />
              <TextField
                disabled={isTrue}
                id="volume"
                label="Volume"
                name="volume"
                size="small"
                value={formik?.values.volume}
                onChange={(e) => {
                  formik?.setFieldValue(
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
                id="location_alias"
                label="Location alias"
                name="location_alias"
                size="small"
                value={formik?.values.location_alias}
                onChange={(e) => {
                  formik?.setFieldValue(
                    "location_alias",
                    e.target.value.replace(/[^0-9]/g, ""),
                  );
                }}
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                isSelect
                label="Location type"
                menuItems={Loctype}
                name="location_type"
                size="small"
                value={formik?.values.location_type}
                onSelectHandler={(e) => {
                  formik?.setFieldValue("location_type", e.target.value);
                }}
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                isSelect
                label="Operation"
                menuItems={operation}
                name="operations"
                size="small"
                value={formik?.values.operations}
                onSelectHandler={(e) => {
                  formik?.setFieldValue("operations", e.target.value);
                }}
              />
            </Stack>
            <Stack direction="row" gap={2}>
              <TextField
                isSelect
                label="Status"
                menuItems={warehouseStatus}
                name="status"
                size="small"
                value={formik?.values.status}
                onSelectHandler={(e) => {
                  formik?.setFieldValue("status", e.target.value);
                }}
              />
            </Stack>
          </CustomCardContent>
          <CustomCardContent title="Coordinates">
            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                disabled={isTrue}
                id="x"
                label="X"
                name="x"
                size="small"
                value={formik?.values.x}
                onChange={(e) => {
                  formik?.setFieldValue(
                    "x",
                    e.target.value.replace(/[^0-9]/g, ""),
                  );
                }}
              />
            </Stack>
            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                disabled={isTrue}
                id="yy"
                label="Y"
                name="minExpiryDays"
                size="small"
                value={formik?.values.y}
                onChange={(e) => {
                  formik?.setFieldValue(
                    "y",
                    e.target.value.replace(/[^0-9]/g, ""),
                  );
                }}
              />
            </Stack>

            <Stack direction="row" gap={2} marginTop={2}>
              <TextField
                disabled={isTrue}
                id="z"
                label="Z"
                name="z"
                size="small"
                value={formik?.values.z}
                onChange={(e) => {
                  formik?.setFieldValue(
                    "z",
                    e.target.value.replace(/[^0-9]/g, ""),
                  );
                }}
              />
            </Stack>
          </CustomCardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default General;
