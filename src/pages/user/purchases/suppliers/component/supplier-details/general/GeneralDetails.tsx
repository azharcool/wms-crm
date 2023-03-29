import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Card, Container, Grid, PaletteMode, Stack } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import UploadButton from "components/image-upload-button/UploadButton";
import TextField from "components/textfield";
import { FormikHelpers } from "formik";
import useSupplierAction from "hooks/catalog/supplier/useSupplierAction";
import useDecodedData from "hooks/useDecodedData";
import useWarehouseAction from "hooks/warehouse/useWarehouseAction";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import palette from "theme/palette";
import { AddSupplierRequestRoot } from "types/catalog/supplier/addSupplierRequest";
import useAddSupplierForm, {
  AddSupplierForm,
} from "../../../hooks/useAddSupplierForm";

interface IMenuItem {
  id: string;
  value: string;
}

const statusMenu = [
  {
    id: "1",
    value: "Active",
  },
  {
    id: "2",
    value: "Inactive",
  },
];

const initialValues: AddSupplierForm = {
  userId: 0,
  companyName: "",
  shortName: "",
  email: "",
  phoneNumber: "",
  address: "",
  region: "",
  city: "",
  zipCode: "",
  countryId: 0,
  firstName: "",
  lastName: "",
  primaryEmail: "",
  primaryPhoneNumber: "",
  status: "",
};
function GeneralDetails() {
  const newtheme = useSelector((state: any) => state.theme);
  const { addWarehouseAction, editWarehouseAction } = useWarehouseAction();
  const { addSupplierAction } = useSupplierAction();
  const [uploadedFiles, setUploadedFiles] = useState<IMenuItem[]>([]);
  const navigate = useNavigate();
  const userDecoded = useDecodedData();
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });
  const { state } = useLocation();

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

  const supplierForm = useAddSupplierForm({
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
  } = supplierForm;

  async function onSubmit(
    values: AddSupplierForm,
    helper: FormikHelpers<AddSupplierForm>,
  ) {
    const data: AddSupplierRequestRoot = {
      userId: Number(userDecoded.id),
      companyName: values.companyName,
      shortName: values.shortName,
      email: values.email,
      phoneNumber: values.phoneNumber,
      address: values.address,
      region: values.region,
      city: values.city,
      zipCode: values.zipCode,
      countryId: values.countryId,
      firstName: values.firstName,
      lastName: values.lastName,
      primaryEmail: values.primaryEmail,
      primaryPhone: values.primaryPhoneNumber,
      status: Number(values.status === "Active" ? "1" : "2"),
    };
    const response = await addSupplierAction(data);
    if (response) {
      resetForm();
      navigate(
        `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplier.listing}`,
      );
    }
  }
  const darkModeTheme = createTheme(getDesignTokens("dark"));

  const handleFile = async (e: any) => {
    const allFiles = Array.from(e.target.files);
    const images = await Promise.all(
      allFiles.map((file) => convertBase64(file)),
    );

    const newUploadedFiles = images.map((item) => ({
      id: crypto.randomUUID(),
      value: item,
    }));

    setUploadedFiles((s) => [...s, ...newUploadedFiles]);
  };

  const convertBase64 = (file: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <Grid container marginTop={2} spacing={2}>
          <Grid item xs={8}>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="Information">
                <Stack direction="row" gap={2}>
                  <TextField
                    darkDisable
                    disabled
                    error={!!touched.companyName && !!errors.companyName}
                    helperText={
                      (touched.companyName && errors && errors.companyName) ||
                      ""
                    }
                    id="companyName"
                    label="Company Name"
                    name="companyName"
                    size="small"
                    value="company Name"
                    onBlur={handleBlur("companyName")}
                    onChange={handleChange("companyName")}
                  />
                  <TextField
                    darkDisable
                    disabled
                    error={!!touched.shortName && !!errors.shortName}
                    helperText={
                      (touched.shortName && errors && errors.shortName) || ""
                    }
                    id="shortName"
                    label="Short Name"
                    name="shortName"
                    size="small"
                    value="Short Name"
                    onBlur={handleBlur("shortName")}
                    onChange={handleChange("shortName")}
                  />
                </Stack>

                <TextField
                  darkDisable
                  disabled
                  id="email"
                  label="Email"
                  name="email"
                  size="small"
                  value="Email"
                  onChange={handleChange("email")}
                />

                <Stack direction="row" gap={2}>
                  <TextField
                    darkDisable
                    disabled
                    id="referenceId"
                    label="Reference id"
                    name="referenceId"
                    size="small"
                    value="Reference id"
                    onChange={handleChange("label")}
                  />

                  <TextField
                    darkDisable
                    disabled
                    id="supplierID"
                    label="Supplier ID"
                    name="supplierID"
                    size="small"
                    value="Supplier ID"
                    onChange={handleChange("supplierID")}
                  />
                </Stack>
              </CustomCardContent>

              <CustomCardContent title="Primary Contact">
                <Stack direction="row" gap={2}>
                  <TextField
                    darkDisable
                    disabled
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    size="small"
                    value="First Name"
                    onChange={handleChange("firstName")}
                  />
                  <TextField
                    darkDisable
                    disabled
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    size="small"
                    value="Last Name"
                    onChange={handleChange("lastName")}
                  />
                </Stack>
                <Stack direction="row" gap={2}>
                  <TextField
                    darkDisable
                    disabled
                    id="primaryEmail"
                    label="Email"
                    name="primaryEmail"
                    size="small"
                    value="Primary Email"
                    onChange={handleChange("primaryEmail")}
                  />
                  <TextField
                    darkDisable
                    disabled
                    id="primaryPhoneNumber"
                    label="Phone Number"
                    name="primaryPhoneNumber"
                    size="small"
                    value="Primary Phone Number"
                    onChange={handleChange("primaryPhoneNumber")}
                  />
                </Stack>
              </CustomCardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ flex: 1, marginBottom: "16px" }}>
              <CustomCardContent title="Image">
                <Stack direction="row" flexWrap="wrap" gap={2}>
                  {uploadedFiles.map((item) => {
                    return (
                      <Box
                        key={item.id}
                        sx={{
                          position: "relative",
                        }}
                      >
                        <CancelIcon
                          sx={{
                            width: "17px",
                            height: "17px",
                            cursor: "pointer",
                            color: `${palette.error.lightRed}`,
                            position: "absolute",
                            right: "-5px",
                            top: "-5px",
                            background: "white",
                          }}
                          onClick={() => {
                            const newUploadedFile = uploadedFiles.filter(
                              (i) => i.id !== item.id,
                            );
                            setUploadedFiles(newUploadedFile);
                          }}
                        />
                        <img
                          alt={item.value}
                          src={item.value}
                          style={{
                            width: "100px",
                            height: "100px",
                          }}
                        />
                      </Box>
                    );
                  })}
                  <UploadButton handleFile={handleFile} />
                </Stack>
              </CustomCardContent>
            </Card>

            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="Settings">
                <TextField
                  darkDisable
                  disabled
                  isSelect
                  helperText={(touched.status && errors && errors.status) || ""}
                  label="Status"
                  menuItems={statusMenu}
                  name="status"
                  size="small"
                  value={values.status}
                  onSelectHandler={(e) => {
                    setFieldValue("status", e.target.value);
                  }}
                />
              </CustomCardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default GeneralDetails;
