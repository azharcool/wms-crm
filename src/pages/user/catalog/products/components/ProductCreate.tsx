import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoopIcon from "@mui/icons-material/Loop";
import {
  Box,
  Card,
  CardContent,
  Container,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  PaletteMode,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "components/textfield";
import { useSelector } from "react-redux";
// import Typography from "theme/typography";

import { Stack } from "@mui/system";
import TableToolbar from "components/table-toolbar";

const detailMenu = [
  {
    id: crypto.randomUUID(),
    value: "Digital product",
  },
  {
    id: crypto.randomUUID(),
    value: "Physical product",
  },
  {
    id: crypto.randomUUID(),
    value: "Service",
  },
];

interface ICustomCard {
  title: string;
  children: React.ReactNode;
}
function CustomCard(props: ICustomCard) {
  const { title, children } = props;
  return (
    <Card
      sx={{
        flex: 1,
      }}
    >
      <CardContent>
        <DialogTitle>
          <Typography component="h6">{title}</Typography>
        </DialogTitle>
        <Divider />
        <DialogContent>{children}</DialogContent>
      </CardContent>
    </Card>
  );
}

function ProductCreate() {
  const newtheme = useSelector((state: any) => state.theme);

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
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          buttonText="Save"
          handleClick={() => {
            // navigate(AppRoutes.CATALOG.productCreate);
          }}
          navTitle="PRODUCTS"
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "Discard",
              onClick: () => {},
              icon: (
                <AddCircleIcon
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
              onClick: () => {},
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
          title="New Product"
        />

        <Stack direction="row" gap={3} marginTop={2}>
          <CustomCard title="Details">
            <TextField id="name" label="Name" name="name" size="small" />
            <TextField
              isSelect
              menuItems={detailMenu}
              name="type"
              value={detailMenu[0].id}
            />
            <TextField id="name" label="Name" name="name" size="small" />
          </CustomCard>

          <CustomCard title="Tracking">
            <TextField id="name" label="Name" name="name" size="small" />
            <TextField id="name" label="Name" name="name" size="small" />
            <TextField id="name" label="Name" name="name" size="small" />
          </CustomCard>
        </Stack>
      </Container>

      <Box
        sx={{
          // alignItems: "center",
          // flexDirection: "row",
          // justifyContent: "flex-start",
          display: "flex",
        }}
      >
        <Toolbar
          sx={{
            left: {
              lg: 2,
              flex: 1,
            },
          }}
        >
          <Box>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CardContent
                sx={{ paddingTop: 0, paddingLeft: 0, paddingBottom: 0 }}
              >
                <DialogContent sx={{ flex: 3 }}>
                  <Typography>Details</Typography>
                  <Divider sx={{ my: 1 }} />
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      flexDirection: "column",
                      marginBottom: "1rem",
                    }}
                  >
                    <TextField
                      // error={!!touched.warehouseName && !!errors.warehouseName}
                      // helperText={
                      //   (touched.warehouseName && errors && errors.warehouseName) ||
                      //   ""
                      // }
                      id="outlined-password-input"
                      size="small" // value={warehouseName}
                      label="Name"
                      // name="warehouseName"
                      // placeholder="Warehouse Name"
                      style={{ width: "650px" }}
                      name="" // onBlur={handleBlur("warehouseName")}
                      // onChange={handleChange("warehouseName")}
                    />
                    <TextField
                      // error={!!touched.warehouseName && !!errors.warehouseName}
                      // helperText={
                      //   (touched.warehouseName && errors && errors.warehouseName) ||
                      //   ""
                      // }
                      isSelect
                      id="" // onBlur={handleBlur("warehouseName")}
                      name="" // onChange={handleChange("warehouseName")}
                      size="small" // value={warehouseName}
                      style={{ width: "650px" }}
                      label="Digital Product"
                      // name="type"
                      placeholder="Warehouse Name"
                    />
                    <TextField
                      // error={!!touched.warehouseName && !!errors.warehouseName}
                      // helperText={
                      //   (touched.warehouseName && errors && errors.warehouseName) ||
                      //   ""
                      // }
                      multiline
                      id="outlined-password-input"
                      label="Description"
                      // placeholder="Warehouse Name"
                      // size="small"
                      size={undefined} // value={warehouseName}
                      style={{ width: "650px" }}
                      name="" // name="Description"
                      // onBlur={handleBlur("warehouseName")}
                      // onChange={handleChange("warehouseName")}
                    />
                  </Box>
                </DialogContent>
              </CardContent>
            </Card>
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            left: {
              lg: 2,
              flex: 1,
            },
          }}
        >
          <Box sx={{ borderRadius: 5 }}>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CardContent
              // sx={{ paddingTop: 0, paddingLeft: 0, paddingBottom: 0 }}
              >
                <DialogContent sx={{ flex: 1 }}>
                  <Typography>Tracking</Typography>
                  <Divider sx={{ my: 1 }} />
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      alignItems: "center",
                      flexDirection: "column",
                      marginBottom: "1rem",
                    }}
                  >
                    <TextField
                      // error={!!touched.warehouseName && !!errors.warehouseName}
                      // helperText={
                      //   (touched.warehouseName && errors && errors.warehouseName) ||
                      //   ""
                      //
                      id="" // onBlur={handleBlur("warehouseName")}
                      name="" // value={warehouseName}
                      style={{ width: "290px" }}
                      label="SKU"
                      // name="SKU" // onChange={handleChange("warehouseName")}
                      size="small"
                    />
                    <TextField
                      iconEnd
                      icon={
                        <IconButton>
                          <LoopIcon />
                        </IconButton>
                      }
                      id="filled-helperText" // onBlur={handleBlur("warehouseName")}
                      label="Barcode"
                      name="" // onChange={handleChange("warehouseName")}
                      placeholder="Warehouse Name"
                      size="small" // value={warehouseName}
                      style={{ width: "290px" }}
                      defaultValue="Default Value"
                      // name="type"
                      value="86563713019"
                    />
                    <TextField
                      isSelect
                      id="outlined-password-input"
                      label="Description"
                      // iconEnd={true}
                      // placeholder="Warehouse Name"
                      // size="small"
                      size={undefined} // value={warehouseName}
                      style={{ width: "290px" }}
                      name="" // name="Description"
                      // onBlur={handleBlur("warehouseName")}
                      // onChange={handleChange("warehouseName")}
                    />
                    <Box
                      sx={{
                        alignItems: "center",
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <TextField
                        isSelect
                        id="outlined-password-input"
                        label="Description"
                        // iconEnd={true}
                        // placeholder="Warehouse Name"
                        // size="small"
                        size="small" // value={warehouseName}
                        style={{ width: "150px", padding: 1 }}
                        name="" // name="Description"
                        // onBlur={handleBlur("warehouseName")}
                        // onChange={handleChange("warehouseName")}
                      />
                      <TextField
                        isSelect
                        id="outlined-password-input"
                        label="UoM"
                        // iconEnd={true}
                        // placeholder="Warehouse Name"
                        // size="small"
                        size="small" // value={warehouseName}
                        style={{ width: "150px", padding: 1 }}
                        name="" // name="Description"
                        // onBlur={handleBlur("warehouseName")}
                        // onChange={handleChange("warehouseName")}
                      />
                    </Box>

                    {/* <Card
                      sx={{
                        backgroundColor: "#e1f5fe",
                        width: "300px",
                        height: "100px",
                        // justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <InfoIcon />
                      <Typography sx={{ color: "#000" }}>
                        Track every single item by Unique Unit Barcode. Eg.
                        Electronics.
                      </Typography>
                    </Card> */}
                  </Box>
                </DialogContent>
              </CardContent>
            </Card>
          </Box>
        </Toolbar>
      </Box>
    </ThemeProvider>
  );
}

export default ProductCreate;
