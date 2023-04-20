import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyIcon from "@mui/icons-material/Key";
import { Box, Card, Container, Grid, Stack } from "@mui/material";
import { defaultLanguage } from "__mock__";
import CustomCardContent from "components/card/CustomCardContent";
import UploadButton from "components/image-upload-button/UploadButton";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import { FormikHelpers } from "formik";
import useWarehouse from "hooks/actions/warehouse/useWarehouse";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";
import palette from "theme/palette";
import { generatePassword } from "utils";

import useManagaeUserForm, { IUserForm } from "../hooks/ManageUserForm";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  warehouse: "",
  role: "",
  image: "",
  status: "",
  language: "",
};
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

function UserUpdate() {
  const [uploadedFiles, setUploadedFiles] = useState<IMenuItem[]>([]);

  const navigate = useNavigate();
  const { warehouse: warehouseMenuItem } = useWarehouse();
  const formik = useManagaeUserForm({ onSubmit, initialValues });

  async function onSubmit(
    values: IUserForm,
    _helper: FormikHelpers<IUserForm>,
  ) {
    alert("Update");
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    setFieldValue,
    errors,
    touched,
  } = formik;

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
    <Container>
      <TableToolbar
        navTitle="SETTINGS"
        rightActions={[
          {
            id: crypto.randomUUID(),
            title: "Cancel",
            onClick: () => {
              navigate(
                `/${AppRoutes.setting.layout}/${AppRoutes.setting.user.listing}`,
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
        title="Update User"
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
                  error={!!touched.firstName && !!errors.firstName}
                  helperText={
                    (touched.firstName && errors && errors.firstName) || ""
                  }
                  id="firstName"
                  label="First Name"
                  value={values.firstName}
                  onChange={handleChange("firstName")}
                  name="firstName"
                  size="small"
                />
                <TextField
                  error={!!touched.lastName && !!errors.lastName}
                  helperText={
                    (touched.lastName && errors && errors.lastName) || ""
                  }
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  size="small"
                />
              </Stack>

              <Stack direction="row" gap={2}>
                <TextField
                  iconEnd
                  error={!!touched.email && !!errors.email}
                  helperText={(touched.email && errors && errors.email) || ""}
                  value={values.email}
                  onChange={handleChange("email")}
                  id="email"
                  label="Email"
                  name="email"
                  size="small"
                />

                <TextField
                  iconEnd
                  value={values.phoneNumber}
                  onChange={handleChange("phoneNumber")}
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  size="small"
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <TextField
                  iconEnd
                  error={!!touched.password && !!errors.password}
                  helperText={
                    (touched.password && errors && errors.password) || ""
                  }
                  value={values.password}
                  onChange={handleChange("password")}
                  icon={<KeyIcon />}
                  id="password"
                  label="Password"
                  name="password"
                  size="small"
                  onClickIcon={() => {
                    const password = generatePassword();
                    setFieldValue("password", password);
                  }}
                />
              </Stack>
            </CustomCardContent>

            <CustomCardContent title="Access">
              <Stack direction="row" gap={2}>
                <Grid marginBottom={2} xs={12}>
                  <AutoComplete
                    getOptionLabel={(option: any) => option?.name}
                    label="Warehouse"
                    handleChange={(_: any, value: any) => {
                      setFieldValue("warehouse", value.name);
                    }}
                    helperText={
                      (touched.warehouse && errors && errors.warehouse) || ""
                    }
                    options={warehouseMenuItem}
                  />
                </Grid>
                <Grid marginBottom={2} xs={12}>
                  <AutoComplete
                    getOptionLabel={(option: any) => option?.name}
                    label="Roles"
                    options={[]}
                    handleChange={(_: any, value: any) => {
                      setFieldValue("role", value.name);
                    }}
                    helperText={(touched.role && errors && errors.role) || ""}
                  />
                </Grid>
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ flex: 1, marginBottom: "16px" }}>
            <CustomCardContent title="Profile Photo">
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
            <CustomCardContent title="Organization">
              <Stack direction="column" gap={2}>
                <TextField
                  isSelect
                  id="status"
                  label="Status"
                  menuItems={statusMenu}
                  name="status"
                  size="small"
                />
                <TextField
                  isSelect
                  id="language"
                  label="Language"
                  menuItems={defaultLanguage}
                  name="language"
                  size="small"
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserUpdate;
