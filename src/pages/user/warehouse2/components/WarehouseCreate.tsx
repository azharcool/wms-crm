import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import {
  Card,
  Container,
  Grid,
  PaletteMode,
  Stack,
  TextField as InputField,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import moment from "moment";
import AppRoutes from "navigation/appRoutes";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  newWarehouseSwitchs,
  pickingStrategy,
  receivingStrategy,
  receivingType,
  timezone,
  warehouseStatus,
} from "__mock__";
import Countries from "__mock__/countries.json";
import { FormikHelpers } from "formik";
import { IAddWarehouseRequestRoot } from "types/warehouse/addWarehouseRequest";
import useWarehouseAction from "hooks/warehouse/useWarehouseAction";
import useDecodedData from "hooks/useDecodedData";
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
  status: 0,
};
function WarehouseCreate() {
  const newtheme = useSelector((state: any) => state.theme);
  const { addWarehouseAction } = useWarehouseAction();
  const navigate = useNavigate();
  const userDecoded = useDecodedData();
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        ...purple,
        ...(mode === "dark" && {
          main: "#1e1e2d",
        }),
      },
      ...(mode === "dark" && {
        background: {
          default: "#1e1e2d",
          paper: "#1B1B33",
        },
      }),
      text: {
        ...(mode === "light"
          ? {
              primary: grey[900],
              secondary: grey[800],
            }
          : {
              primary: "#fff",
              secondary: grey[500],
            }),
      },
    },
  });
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
  } = warehouseForm;
  async function onSubmit(
    values: AddWarehouseForm,
    helper: FormikHelpers<AddWarehouseForm>,
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
      lat: values.lat,
      lng: values.lng,
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
      status: values.status,
    };
    await addWarehouseAction(data);
  }
  const darkModeTheme = createTheme(getDesignTokens("dark"));

  console.log("timezone", moment().tz("America/Los_Angeles"));
  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          buttonText="Save"
          handleClick={() => {
            handleSubmit();
          }}
          navTitle="PRODUCTS"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "Cancel",
              onClick: () => {
                navigate(`/${AppRoutes.warehouse.warehouseLayout}`);
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
          title="New Warehouse"
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
                    id="warehouseName"
                    label="Warehouse Name"
                    name="warehouseName"
                    value={values.warehouseName}
                    size="small"
                    error={!!touched.warehouseName && !!errors.warehouseName}
                    helperText={
                      (touched.warehouseName &&
                        errors &&
                        errors.warehouseName) ||
                      ""
                    }
                    onBlur={handleBlur("warehouseName")}
                    onChange={handleChange("warehouseName")}
                  />
                  <TextField
                    id="label"
                    label="Label"
                    name="label"
                    value={values.label}
                    onChange={handleChange("label")}
                    size="small"
                  />
                </Stack>

                <Stack direction="row" gap={2}>
                  <TextField
                    iconEnd
                    id="email"
                    label="Email"
                    name="email"
                    onChange={handleChange("email")}
                    value={values.email}
                    size="small"
                  />

                  <TextField
                    iconEnd
                    id="phoneNumber"
                    label="Phone Number"
                    value={values.phoneNumber}
                    onChange={handleChange("phoneNumber")}
                    name="phoneNumber"
                    size="small"
                  />
                </Stack>

                <TextField
                  multiline
                  id="adress"
                  value={values.address}
                  label="Address"
                  onChange={handleChange("address")}
                  name="address"
                />

                <Stack direction="row" gap={2}>
                  <Grid xs={12}>
                    <AutoComplete
                      options={Countries || []}
                      handleChange={(e: any, value: any) =>
                        setFieldValue("country", value?.name)
                      }
                      getOptionLabel={(option: any) => option?.name}
                      label="Country"
                    />
                  </Grid>
                  <TextField
                    id="city"
                    label="City"
                    value={values.city}
                    error={!!touched.city && !!errors.city}
                    helperText={(touched.city && errors && errors.city) || ""}
                    onBlur={handleBlur("city")}
                    onChange={handleChange("city")}
                    name="city"
                    size="small"
                  />
                </Stack>
                <Stack direction="row" gap={2}>
                  <TextField
                    id="zipCode"
                    label="Zip Code"
                    value={values.zipCode}
                    onBlur={handleBlur("zipCode")}
                    onChange={handleChange("zipCode")}
                    name="zipCode"
                    size="small"
                  />
                </Stack>
                <Stack direction="row" gap={2}>
                  <TextField
                    id="lng"
                    label="Longitude"
                    value={values.lng}
                    onChange={handleChange("lng")}
                    name="lng"
                    size="small"
                  />

                  <TextField
                    id="lat"
                    label="Latitude"
                    value={values.lat}
                    onChange={handleChange("lat")}
                    name="lat"
                    size="small"
                  />
                </Stack>
              </CustomCardContent>

              <CustomCardContent title="Primary Contact">
                <Stack direction="row" gap={2}>
                  <TextField
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange("firstName")}
                    size="small"
                  />
                  <TextField
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange("lastName")}
                    size="small"
                  />
                </Stack>
                <Stack direction="row" gap={2}>
                  <TextField
                    id="email"
                    label="Email"
                    name="email"
                    onChange={handleChange("primaryEmail")}
                    value={values.primaryEmail}
                    size="small"
                  />
                  <TextField
                    id="primaryPhoneNumber"
                    label="Phone Number"
                    value={values.primaryPhoneNumber}
                    onChange={handleChange("primaryPhoneNumber")}
                    name="primaryPhoneNumber"
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
                  isSelect
                  label="Status"
                  menuItems={warehouseStatus}
                  value={values.status}
                  onSelectHandler={(e) => {
                    setFieldValue("status", e.target.value);
                  }}
                  name="status"
                  size="small"
                />

                <TextField
                  isSelect
                  label="Picking Strategy"
                  menuItems={pickingStrategy}
                  value={values.pickingStrategy}
                  onSelectHandler={(e) => {
                    setFieldValue("pickingStrategy", e.target.value);
                  }}
                  name="pickingStrategy"
                  size="small"
                />
                <TextField
                  isSelect
                  label="Recieving Strategy"
                  menuItems={receivingStrategy}
                  value={values.receivingStrategy}
                  onSelectHandler={(e) => {
                    setFieldValue("receivingStrategy", e.target.value);
                  }}
                  name="receivingStrategy"
                  size="small"
                />
                <TextField
                  isSelect
                  label="Timezone"
                  menuItems={timezone}
                  value={values.timezone}
                  onSelectHandler={(e) => {
                    setFieldValue("timezone", e.target.value);
                  }}
                  name="timezone"
                  size="small"
                />
                <TextField
                  isSelect
                  label="Recieving Type"
                  menuItems={receivingType}
                  value={values.receivingType}
                  onSelectHandler={(e) => {
                    setFieldValue("receivingType", e.target.value);
                  }}
                  name="receivingType"
                  size="small"
                />

                {newWarehouseSwitchs?.map((item) => {
                  return (
                    <CustomSwitch
                      key={item.id}
                      title={item.value}
                      checked={Boolean(
                        values[item.name as keyof AddWarehouseForm],
                      )}
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
    </ThemeProvider>
  );
}

export default WarehouseCreate;
