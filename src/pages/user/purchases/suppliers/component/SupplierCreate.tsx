import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Card, Container, Grid, Stack } from "@mui/material";
import Countries from "__mock__/countries.json";
import CustomCardContent from "components/card/CustomCardContent";
import UploadButton from "components/image-upload-button/UploadButton";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import { FormikHelpers } from "formik";
import useSupplierAction from "hooks/actions/catalog/supplier/useSupplierAction";
import useWarehouseAction from "hooks/actions/warehouse/useWarehouseAction";
import useDecodedData from "hooks/useDecodedData";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import palette from "theme/palette";
import { AddSupplierRequestRoot } from "types/catalog/supplier/addSupplierRequest";
import useAddSupplierForm, {
  AddSupplierForm,
} from "../hooks/useAddSupplierForm";

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
  companyName: "",
  shortName: "",
  email: "",
  phoneNumber: "",
  address: "",
  region: "",
  city: "",
  zipCode: "",
  countryId: "",
  firstName: "",
  lastName: "",
  primaryEmail: "",
  primaryPhoneNumber: "",
  status: "",
};
function SupplierCreate() {
  const newtheme = useSelector((state: any) => state.theme);
  const { addWarehouseAction, editWarehouseAction } = useWarehouseAction();
  const { addSupplierAction } = useSupplierAction();
  const [uploadedFiles, setUploadedFiles] = useState<IMenuItem[]>([]);
  const navigate = useNavigate();
  const userDecoded = useDecodedData();

  const { state } = useLocation();

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
    _: FormikHelpers<AddSupplierForm>,
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
      status: Number(values.status),
      image: "",
    };
    const response = await addSupplierAction(data);
    if (response) {
      resetForm();
      navigate(
        `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplier.listing}`,
      );
    }
  }

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
    <Container maxWidth={false}>
      <TableToolbar
        navTitle="SUPPLIERS"
        rightActions={[
          {
            id: crypto.randomUUID(),
            title: "Cancel",
            onClick: () => {
              navigate(
                `/${AppRoutes.warehouse.warehouseLayout}/${AppRoutes.warehouse.listing}`,
              );
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
        title={state?.editData ? state?.editData.warehouseName : "New Supplier"}
      />

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
                  error={!!touched.companyName && !!errors.companyName}
                  helperText={
                    (touched.companyName && errors && errors.companyName) || ""
                  }
                  id="companyName"
                  label="Company Name"
                  name="companyName"
                  size="small"
                  value={values.companyName}
                  onBlur={handleBlur("companyName")}
                  onChange={handleChange("companyName")}
                />
                <TextField
                  error={!!touched.shortName && !!errors.shortName}
                  helperText={
                    (touched.shortName && errors && errors.shortName) || ""
                  }
                  id="shortName"
                  label="Short Name"
                  name="shortName"
                  size="small"
                  value={values.shortName}
                  onBlur={handleBlur("shortName")}
                  onChange={handleChange("shortName")}
                />
              </Stack>

              <TextField
                id="referenceId"
                label="Reference id"
                name="referenceId"
                size="small"
                // value={values.}
                onChange={handleChange("label")}
              />

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
                <TextField
                  id="region"
                  label="Region/Neighborhood"
                  name="region"
                  size="small"
                  value={values.region}
                  onChange={handleChange("region")}
                />
                <TextField
                  id="city"
                  label="City"
                  name="city"
                  size="small"
                  value={values.city}
                  onChange={handleChange("city")}
                />
              </Stack>
              <Grid xs={6}>
                <TextField
                  id="zipCode"
                  label="Zip Code"
                  name="zipCode"
                  size="small"
                  value={values.zipCode}
                  onChange={handleChange("zipCode")}
                />
              </Grid>
              <Grid marginBottom={2} xs={12}>
                <AutoComplete
                  getOptionLabel={(option: any) => option?.name}
                  handleChange={(e: any, value: any) =>
                    setFieldValue("countryId", value?.name)
                  }
                  label="Country"
                  options={Countries || []}
                />
              </Grid>
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
                  id="primaryEmail"
                  label="Email"
                  name="primaryEmail"
                  size="small"
                  value={values.primaryEmail}
                  onChange={handleChange("primaryEmail")}
                />
                <TextField
                  id="primaryPhoneNumber"
                  label="Phone Number"
                  name="primaryPhoneNumber"
                  size="small"
                  value={values.primaryPhoneNumber}
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
                isSelect
                helperText={(touched.status && errors && errors.status) || ""}
                id="status"
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
  );
}

export default SupplierCreate;
