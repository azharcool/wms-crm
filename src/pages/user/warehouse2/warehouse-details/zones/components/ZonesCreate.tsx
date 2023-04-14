/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Grid, Stack } from "@mui/material";
import { areaStatus } from "__mock__";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import useArea from "hooks/actions/warehouse/area/useArea";
import useZoneAction from "hooks/actions/warehouse/zone/useZoneAction";
import useDecodedData from "hooks/useDecodedData";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
import { AddZoneRequestRoot } from "types/warehouse/zone/addZoneRequest";
import { GetAllZoneResponseData } from "types/warehouse/zone/getAllZoneResponse";
import useZoneForm, {
  ZoneInitialValues,
  zoneInitialValues,
} from "../hooks/useZoneForm";

interface IZoneCreate {
  open: boolean;
  handleClose: () => void;
  editData?: GetAllZoneResponseData;
}

function ZonesCreate(props: IZoneCreate) {
  const { open, handleClose, editData } = props;
  const getSelectedWarehouse = useSelector(getWarehouseSelected);
  const { addZoneAction, editZoneAction } = useZoneAction();
  const { areas: areaMenuItems } = useArea();
  const userDecoded = useDecodedData();

  const {
    values,
    handleBlur,
    handleChange,
    touched,
    setFieldValue,
    errors,
    handleSubmit,
    isSubmitting,
    resetForm,
  } = useZoneForm({
    initialValues: zoneInitialValues,
    onSubmit,
  });

  useEffect(() => {
    if (editData) {
      setFieldValue("name", editData.name);
      setFieldValue("label", editData.label);
      setFieldValue("status", editData.status);
      setFieldValue("area", editData.areaId);
    }
  }, [editData]);

  async function onSubmit(values: ZoneInitialValues) {
    const data: AddZoneRequestRoot = {
      userId: Number(userDecoded.id),
      warehouseId: getSelectedWarehouse.id,
      label: values.label,
      name: values.name,
      areaId: Number(values.area),
      status: Number(values.status) || 1,
    };
    let response = false;
    if (editData) {
      data.id = editData.id;
      response = await editZoneAction(data);
    } else {
      response = await addZoneAction(data);
    }

    if (response) {
      resetForm();
      handleClose();
    }
  }

  return (
    <Slider
      buttonText="save"
      handleChange={() => handleSubmit()}
      handleClose={handleClose}
      isSubmitting={isSubmitting}
      open={open}
      size="sm"
      title="New Zone"
    >
      <Grid container marginTop={2} spacing={2}>
        <Grid item xs={12}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Details">
              <Stack direction="column" gap={2}>
                <TextField
                  disabled
                  id="warehouse"
                  label="warehouse"
                  name="warehouse"
                  size="small"
                  value={getSelectedWarehouse.name}
                />
              </Stack>
              <Stack direction="column" gap={2}>
                <TextField
                  isSelect
                  error={!!touched.area && !!errors.area}
                  helperText={(touched.area && errors && errors.area) || ""}
                  id="area"
                  label="Area"
                  menuItems={areaMenuItems}
                  name="area"
                  size="small"
                  value={values.area}
                  onSelectHandler={(e) => {
                    setFieldValue("area", e.target.value);
                  }}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField
                  error={!!touched.label && !!errors.label}
                  helperText={(touched.label && errors && errors.label) || ""}
                  id="label"
                  label="Label"
                  name="label"
                  size="small"
                  value={values.label}
                  onBlur={handleBlur("label")}
                  onChange={handleChange("label")}
                />

                <TextField
                  error={!!touched.name && !!errors.name}
                  helperText={(touched.name && errors && errors.name) || ""}
                  id="name"
                  label="Name"
                  name="name"
                  size="small"
                  value={values.name}
                  onBlur={handleBlur("name")}
                  onChange={handleChange("name")}
                />
              </Stack>
            </CustomCardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CustomCardContent title="Setting">
              <Stack direction="column" gap={4}>
                <TextField
                  isSelect
                  id="status"
                  label="Status"
                  menuItems={areaStatus}
                  name="status"
                  size="small"
                  value={values.status}
                  onSelectHandler={(e) => {
                    setFieldValue("status", e.target.value);
                  }}
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
    </Slider>
  );
}

export default ZonesCreate;
