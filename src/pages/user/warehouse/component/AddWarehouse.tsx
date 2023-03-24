import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { Card, Container, Grid, PaletteMode, Stack } from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import CustomSwitch from "components/custom-switch";
import DashboardLayout from "components/dashboard-container";
import TableToolbar from "components/table-toolbar";
import TextField from "components/textfield";
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

function AddWarehouse() {
  const newtheme = useSelector((state: any) => state.theme);

  const navigate = useNavigate();

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
  const darkModeTheme = createTheme(getDesignTokens("dark"));
  return (
    <DashboardLayout>
      <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
        <Container maxWidth={false}>
          <TableToolbar
            navTitle="PRODUCTS"
            rightActions={[
              {
                id: crypto.randomUUID(),
                title: "Cancel",
                onClick: () => {
                  navigate(
                    `/${AppRoutes.CATALOG.catalog}/${AppRoutes.CATALOG.products}`,
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
                // onClick: () => {
                //   handleSubmit();
                // },
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
                      iconEnd
                      icon={<Inventory2Icon />}
                      id="name"
                      label="Warehouse Name"
                      name="name"
                      size="small"
                    />
                    <TextField
                      id="type"
                      label="Label"
                      name="label"
                      size="small"
                    />
                  </Stack>

                  <Stack direction="row" gap={2}>
                    <TextField
                      iconEnd
                      id="email"
                      label="Email"
                      name="email"
                      size="small"
                    />

                    <TextField
                      iconEnd
                      id="phone"
                      label="Phone Number"
                      name="phone"
                      size="small"
                    />
                  </Stack>

                  <TextField
                    multiline
                    id="adress"
                    label="Address"
                    name="address"
                  />

                  <Stack direction="row" gap={2}>
                    <TextField
                      isSelect
                      id="country"
                      label="Country"
                      menuItems={[{ id: 0, value: "india" }]}
                      name="country"
                      size="small"
                    />
                    <TextField
                      id="city"
                      label="City"
                      name="city"
                      size="small"
                    />
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <TextField
                      id="zipcode"
                      label="Zip Code"
                      name="zip"
                      size="small"
                    />
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <TextField
                      id="logintude"
                      label="Longitude"
                      name="longitude"
                      size="small"
                    />

                    <TextField
                      isSelect
                      id="latitude"
                      label="Latitude"
                      name="latitude"
                      size="small"
                    />
                  </Stack>
                </CustomCardContent>

                <CustomCardContent title="Primary Contact">
                  <Stack direction="row" gap={2}>
                    <TextField
                      id="fname"
                      label="First Name"
                      name="fname"
                      size="small"
                    />
                    <TextField
                      id="lname"
                      label="Last Name"
                      name="lname"
                      size="small"
                    />
                  </Stack>
                  <Stack direction="row" gap={2}>
                    <TextField
                      id="email"
                      label="Email"
                      name="email"
                      size="small"
                    />
                    <TextField
                      id="phonenumber"
                      label="Phone Number"
                      name="phone"
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
                    name="status"
                    size="small"
                  />

                  <TextField
                    isSelect
                    label="Picking Strategy"
                    menuItems={pickingStrategy}
                    name="pickingstrategy"
                    size="small"
                  />
                  <TextField
                    isSelect
                    label="Recieving Strategy"
                    menuItems={receivingStrategy}
                    name="recievingstrategy"
                    size="small"
                  />
                  <TextField
                    isSelect
                    label="Timezone"
                    menuItems={timezone}
                    name="timezone"
                    size="small"
                  />
                  <TextField
                    isSelect
                    label="Recieving Type"
                    menuItems={receivingType}
                    name="type"
                    size="small"
                  />

                  {newWarehouseSwitchs?.map((item) => {
                    return (
                      <CustomSwitch
                        key={item.id}
                        //   checked={Boolean(
                        //     values[item.name as keyof AddProductForm],
                        //   )}
                        title={item.value}
                        //   onChange={(e) => {
                        //     setFieldValue(item.name, e.target.checked);
                        //   }}
                      />
                    );
                  })}
                </CustomCardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </DashboardLayout>
  );
}

export default AddWarehouse;
