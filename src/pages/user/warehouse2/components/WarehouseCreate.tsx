import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Card, Container, Grid, Stack } from "@mui/material";
import {
  newWarehouseSwitchs,
  pickingStrategy,
  receivingStrategy,
  receivingType,
  timezone,
  warehouseStatus,
} from "__mock__";
import Countries from "__mock__/countries.json";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import { FormikHelpers } from "formik";
import useWarehouseAction from "hooks/actions/warehouse/useWarehouseAction";
import useDecodedData from "hooks/useDecodedData";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";
import { IAddWarehouseRequestRoot } from "types/warehouse/addWarehouseRequest";
import useAddWarehouseForm, {
  AddWarehouseForm,
} from "../hooks/useAddWarehouseForm";

const initialValues: AddWarehouseForm = {
  userId: 0,
  warehouseName: "",
  label: "",
  email: "",
  phoneNumber: "",
  address: "",
  country: "",
  city: "",
  zipCode: "",
  lat: 0,
  lng: 0,
  firstName: "",
  lastName: "",
  primaryEmail: "",
  primaryPhoneNumber: "",
  pickingStrategy: "",
  receivingStrategy: "",
  timezone: "",
  receivingType: "",
  defaultWarehouse: false,
  allowPartialPacking: false,
  status: 1,
};
function WarehouseCreate() {
  const { addWarehouseAction, editWarehouseAction } = useWarehouseAction();
  const navigate = useNavigate();
  const userDecoded = useDecodedData();

  const { state } = useLocation();

  useEffect(() => {
    if (state?.editData) {
      setFieldValue("warehouseName", state?.editData?.warehouseName);
      setFieldValue("label", state?.editData?.label);
      setFieldValue("email", state?.editData?.email);
      setFieldValue("phoneNumber", state?.editData?.phoneNumber);
      setFieldValue("address", state?.editData?.address);
      setFieldValue("country", state?.editData?.country);
      setFieldValue("city", state?.editData?.city);
      setFieldValue("zipCode", state?.editData?.zipCode);
      setFieldValue("lat", state?.editData?.lat);
      setFieldValue("lng", state?.editData?.lng);
      setFieldValue("firstName", state?.editData?.firstName);
      setFieldValue("lastName", state?.editData?.lastName);
      setFieldValue("primaryEmail", state?.editData?.primaryEmail);
      setFieldValue("primaryPhoneNumber", state?.editData?.primaryPhoneNumber);
      setFieldValue("pickingStrategy", state?.editData?.pickingStrategy);
      setFieldValue("receivingStrategy", state?.editData?.receivingStrategy);
      setFieldValue("timezone", state?.editData?.timezone);
      setFieldValue("receivingType", state?.editData?.receivingType);
      setFieldValue("defaultWarehouse", state?.editData?.defaultWarehouse);
      setFieldValue(
        "allowPartialPacking",
        state?.editData?.allowPartialPacking,
      );
      setFieldValue("status", state?.editData?.status);
    }
  }, [state?.editData]);

  const warehouseForm = useAddWarehouseForm({
    onSubmit,
    initialValues,
  });

  const {
    touched,
    errors,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = warehouseForm;

  async function onSubmit(
    values: AddWarehouseForm,
    _: FormikHelpers<AddWarehouseForm>,
  ) {
    const data: IAddWarehouseRequestRoot = {
      userId: Number(userDecoded.id),
      warehouseName: values.warehouseName,
      label: values.label,
      email: values.email,
      phoneNumber: values.phoneNumber,
      address: values.address,
      country: values.country,
      city: values.city,
      zipCode: values.zipCode,
      lat: Number(values.lat),
      lng: Number(values.lng),
      firstName: values.firstName,
      lastName: values.lastName,
      primaryEmail: values.primaryEmail,
      primaryPhoneNumber: values.primaryPhoneNumber,
      pickingStrategy: values.pickingStrategy,
      receivingStrategy: values.receivingStrategy,
      timezone: values.timezone,
      receivingType: values.receivingType,
      defaultWarehouse: values.defaultWarehouse,
      allowPartialPacking: values.allowPartialPacking,
      status: Number(values.status),
    };
    let response = false;
    if (state?.editData) {
      data.id = state?.editData?.id;
      response = await editWarehouseAction(data);
    } else {
      response = await addWarehouseAction(data);
    }
    if (response) {
      resetForm();
      navigate(
        `/${AppRoutes.warehouse.warehouseLayout}/${AppRoutes.warehouse.listing}`,
      );
    }
  }

  const navigateDetails = state?.editData?.id
    ? `/${AppRoutes.warehouse.warehouseLayout}/${AppRoutes.warehouse.details}/${state?.editData?.id}/${AppRoutes.warehouse.generalDetails}`
    : `/${AppRoutes.warehouse.warehouseLayout}/${AppRoutes.warehouse.listing}`;

  return (
    <Container>
      <TableToolbar
        navTitle="WAREHOUSE"
        rightActions={[
          {
            id: crypto.randomUUID(),
            title: "Cancel",
            onClick: () => {
              navigate(navigateDetails);
            },
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
              <AddCircleIcon
                sx={{
                  fontSize: 18,
                  mr: 1,
                }}
              />
            ),
          },
        ]}
        title={
          state?.editData ? state?.editData.warehouseName : "New Warehouse"
        }
      />

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
                  error={!!touched.warehouseName && !!errors.warehouseName}
                  helperText={
                    (touched.warehouseName && errors && errors.warehouseName) ||
                    ""
                  }
                  id="warehouseName"
                  label="Warehouse Name"
                  name="warehouseName"
                  size="small"
                  value={values.warehouseName}
                  onBlur={handleBlur("warehouseName")}
                  onChange={handleChange("warehouseName")}
                />
                <TextField
                  id="label"
                  label="Label"
                  name="label"
                  size="small"
                  value={values.label}
                  onChange={handleChange("label")}
                />
              </Stack>

              <Stack direction="row" gap={2}>
                <TextField
                  iconEnd
                  id="email"
                  label="Email"
                  name="email"
                  size="small"
                  value={values.email}
                  onChange={handleChange("email")}
                />

                <TextField
                  iconEnd
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  size="small"
                  value={values.phoneNumber}
                  onChange={handleChange("phoneNumber")}
                />
              </Stack>

              <TextField
                multiline
                id="adress"
                label="Address"
                name="address"
                value={values.address}
                onChange={handleChange("address")}
              />

              <Stack direction="row" gap={2}>
                <Grid xs={12}>
                  <AutoComplete
                    getOptionLabel={(option: any) => option?.name}
                    handleChange={(e: any, value: any) =>
                      setFieldValue("country", value?.name)
                    }
                    helperText={
                      (touched.country && errors && errors.country) || ""
                    }
                    label="Country"
                    options={Countries || []}
                  />
                </Grid>
                <TextField
                  error={!!touched.city && !!errors.city}
                  helperText={(touched.city && errors && errors.city) || ""}
                  id="city"
                  label="City"
                  name="city"
                  size="small"
                  value={values.city}
                  onBlur={handleBlur("city")}
                  onChange={handleChange("city")}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField
                  id="zipCode"
                  label="Zip Code"
                  name="zipCode"
                  size="small"
                  value={values.zipCode}
                  onBlur={handleBlur("zipCode")}
                  onChange={handleChange("zipCode")}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField
                  id="lng"
                  label="Longitude"
                  name="lng"
                  size="small"
                  value={values.lng}
                  onChange={handleChange("lng")}
                />

                <TextField
                  id="lat"
                  label="Latitude"
                  name="lat"
                  size="small"
                  value={values.lat}
                  onChange={handleChange("lat")}
                />
              </Stack>
            </CustomCardContent>

            <CustomCardContent title="Primary Contact">
              <Stack direction="row" gap={2}>
                <TextField
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  size="small"
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                />
                <TextField
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  size="small"
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  size="small"
                  value={values.primaryEmail}
                  onChange={handleChange("primaryEmail")}
                />
                <TextField
                  id="primaryPhoneNumber"
                  label="Phone Number"
                  name="primaryPhoneNumber"
                  size="small"
                  type="number"
                  value={values.primaryPhoneNumber}
                  onChange={handleChange("primaryPhoneNumber")}
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
                isSelect
                label="Status"
                menuItems={warehouseStatus}
                name="status"
                size="small"
                value={values.status || warehouseStatus[0].id}
                onSelectHandler={(e) => {
                  setFieldValue("status", e.target.value);
                }}
              />

              <TextField
                isSelect
                label="Picking Strategy"
                menuItems={pickingStrategy}
                name="pickingStrategy"
                size="small"
                value={values.pickingStrategy}
                onSelectHandler={(e) => {
                  setFieldValue("pickingStrategy", e.target.value);
                }}
              />
              <TextField
                isSelect
                label="Recieving Strategy"
                menuItems={receivingStrategy}
                name="receivingStrategy"
                size="small"
                value={values.receivingStrategy}
                onSelectHandler={(e) => {
                  setFieldValue("receivingStrategy", e.target.value);
                }}
              />
              <TextField
                isSelect
                label="Timezone"
                menuItems={timezone}
                name="timezone"
                size="small"
                value={values.timezone}
                onSelectHandler={(e) => {
                  setFieldValue("timezone", e.target.value);
                }}
              />
              <TextField
                isSelect
                label="Recieving Type"
                menuItems={receivingType}
                name="receivingType"
                size="small"
                value={values.receivingType}
                onSelectHandler={(e) => {
                  setFieldValue("receivingType", e.target.value);
                }}
              />

              {newWarehouseSwitchs?.map((item) => {
                return (
                  <CustomSwitch
                    key={item.id}
                    checked={Boolean(
                      values[item.name as keyof AddWarehouseForm],
                    )}
                    title={item.value}
                    onChange={(e) => {
                      setFieldValue(item.name, e.target.checked);
                    }}
                  />
                );
              })}
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default WarehouseCreate;
