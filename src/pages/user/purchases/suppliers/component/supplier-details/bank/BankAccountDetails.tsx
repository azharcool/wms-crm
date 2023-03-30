import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  PaletteMode,
  Stack,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import { FormikHelpers } from "formik";
import useSupplierAction from "hooks/catalog/supplier/useSupplierAction";
import useDecodedData from "hooks/useDecodedData";
import AppRoutes from "navigation/appRoutes";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import palette from "theme/palette";
import { AddSupplierRequestRoot } from "types/catalog/supplier/addSupplierRequest";
import Countries from "__mock__/countries.json";
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
  companyName: "Company Name",
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
interface ITooblarButton {
  handleClick: () => void;
  title: string;
  icon: React.ReactNode;
}

function ToolBarButton(props: ITooblarButton) {
  const { handleClick, title, icon } = props;

  return (
    <Box sx={{ m: 1, display: "flex", gap: 5, alignItems: "center" }}>
      <Button
        sx={{
          width: "inherit",
          borderRadius: "5px",
          padding: "5px 25px",
          backgroundColor: palette.warning.dark,
          color: "#fff",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: palette.warning.dark,
            opacity: 0.6,
            boxShadow: "none",
          },
        }}
        variant="contained"
        onClick={() => {
          handleClick?.();
        }}
      >
        {icon}
        <Typography
          component="span"
          sx={{ fontSize: { xs: "1rem", xl: "1.1rem" } }}
        >
          {title}
        </Typography>
      </Button>
    </Box>
  );
}

function BankAccountDetails() {
  const newtheme = useSelector((state: any) => state.theme);
  const { addSupplierAction } = useSupplierAction();
  const [editable, setEditable] = useState(false);
  const nameRef = useRef<any>(null);
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

  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {
        setEditable(false);
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
      title: "Edit",
      onClick: () => {
        setEditable(true);
        setTimeout(() => {
          nameRef.current?.focus();
        }, 500);
      },
      icon: (
        <EditIcon
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
        navigate(-1);
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

  const istrue = !editable;

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <Stack direction="row" justifyContent="flex-end">
          {editable
            ? rightActionsData
                .filter((i) => i.title !== "Edit")
                .map((item) => (
                  <ToolBarButton
                    key={item.id}
                    handleClick={item.onClick}
                    icon={item.icon}
                    title={item.title}
                  />
                ))
            : rightActionsData
                .filter((i) => i.title === "Edit")
                .map((item) => (
                  <ToolBarButton
                    key={item.id}
                    handleClick={item.onClick}
                    icon={item.icon}
                    title={item.title}
                  />
                ))}
        </Stack>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="Bank account">
                <Stack direction="row" gap={2}>
                  <TextField
                    darkDisable
                    disabled={istrue}
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    size="small"
                    value={values.firstName}
                    onChange={handleChange("firstName")}
                  />
                  <TextField
                    darkDisable
                    disabled={istrue}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    size="small"
                    value={values.lastName}
                    onChange={handleChange("lastName")}
                  />
                </Stack>

                <TextField
                  darkDisable
                  multiline
                  disabled={istrue}
                  id="adress"
                  label="Address"
                  name="address"
                  value={values.address}
                  onChange={handleChange("address")}
                />

                <Stack direction="row" gap={2}>
                  <TextField
                    darkDisable
                    disabled={istrue}
                    id="city"
                    label="City"
                    name="city"
                    size="small"
                    value={values.city}
                    onChange={handleChange("city")}
                  />

                  <TextField
                    darkDisable
                    disabled={istrue}
                    id="zipCode"
                    label="Zip Code"
                    name="zipCode"
                    size="small"
                    value={values.zipCode}
                    onChange={handleChange("zipCode")}
                  />
                </Stack>
                <Grid marginBottom={2} xs={12}>
                  <AutoComplete
                    getOptionLabel={(option: any) => option?.name}
                    handleChange={(e: any, value: any) =>
                      setFieldValue("country", value?.name)
                    }
                    label="Country"
                    options={Countries || []}
                  />
                </Grid>
              </CustomCardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default BankAccountDetails;
