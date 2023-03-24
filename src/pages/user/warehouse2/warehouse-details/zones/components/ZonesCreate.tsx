/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Grid, Stack } from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { FormikHelpers, useFormik } from "formik";
import useDecodedData from "hooks/useDecodedData";
import useArea from "hooks/warehouse/area/useArea";
import useZoneAction from "hooks/warehouse/zone/useZoneAction";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
import { AddZoneRequestRoot } from "types/warehouse/zone/addZoneRequest";
import { GetAllZoneResponseData } from "types/warehouse/zone/getAllZoneResponse";
import * as Yup from "yup";
import { areaStatus } from "__mock__";

interface IZoneCreate {
  open: boolean;
  handleClose: () => void;
  editData?: GetAllZoneResponseData;
}

interface InitialValues {
  warehouse: string;
  label: string;
  name: string;
  status: string;
  area: string;
}

const initialValues: InitialValues = {
  warehouse: "",
  label: "",
  name: "",
  area: "",
  status: "1",
};

interface IuseZoneForm {
  initialValues: InitialValues;
  onSubmit: (
    values: InitialValues,
    formikHelpers: FormikHelpers<InitialValues>,
  ) => void | Promise<unknown>;
}

const schema = Yup.object().shape({
  label: Yup.string().required("label is required"),
  name: Yup.string().required("name is required"),
});

const useZoneForm = (props: IuseZoneForm) => {
  const { initialValues, onSubmit } = props;
  return useFormik({
    initialValues,
    onSubmit,
    validationSchema: schema,
  });
};

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
    initialValues,
    onSubmit,
  });

  // useEffect(() => {
  //   if (getSelectedWarehouse) {
  //     setFieldValue("warehouse", getSelectedWarehouse.name);
  //   }
  // }, []);

  useEffect(() => {
    if (editData) {
      setFieldValue("name", editData.name);
      setFieldValue("label", editData.label);
      setFieldValue("status", editData.status);
      setFieldValue("area", editData.areaId);
    }
  }, [editData]);

  async function onSubmit(values: InitialValues) {
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
                  error={!!touched.label && !!errors.label}
                  helperText={(touched.label && errors && errors.label) || ""}
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
