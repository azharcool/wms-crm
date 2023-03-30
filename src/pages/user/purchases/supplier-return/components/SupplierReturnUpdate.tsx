import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SaveIcon from "@mui/icons-material/Save";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Card,
  Container,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  PaletteMode,
  Paper,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import CustomTableCell from "components/table/CustomTableCell";
import TextField from "components/textfield";
import AppRoutes from "navigation/appRoutes";
import { useSelector } from "react-redux";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import palette from "theme/palette";
import AutoComplete from "components/textfield/AutoComplete";
import AddSupplier from "./NewSupplier";
// import BrowsListItem from "./BrowsListItem";

function SupplierReturnUpdate() {
  const newtheme = useSelector((state: any) => state.theme);
  const [openSupplier, setOpenSupplier] = React.useState(false);
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
  const rightActionsData = [
    {
      id: crypto.randomUUID(),
      title: "Cancel",
      onClick: () => {
        // setEditable(false);
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
        // formik.handleSubmit();
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
  let isTrue = true;

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          breadcrumbs={[
            {
              link: "SUPPLIER RETURN",
              to: `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplierReturns.listing}`,
            },
          ]}
          buttonText="Save"
          handleClick={() => {
            // handleSubmit()
          }}
          navTitle="PO-2223"
          rightActions={rightActionsData}
          title="Update Supply Return"
        />
        <Grid container direction="row" padding={0} paddingBottom={2} spacing={2}>
          {/* coloumn */}
          <Grid direction="column" item xs={8} spacing={2}>
            <Grid marginTop={2}>
              <Card
                sx={{
                  flex: 1,
                }}
              >
                <CustomCardContent title="Supplier">
                  <Stack
                    direction="row"
                    display="flex"
                    justifyContent="space-around"
                  >
                    <Stack width="70%">
                      <AutoComplete
                        options={[
                          { id: crypto.randomUUID(), warehouse: "warehouse1" },
                        ]}
                        label="Search by supplier name, email, phone number"
                        getOptionLabel={(item: any) => item.warehouse}
                      />
                    </Stack>
                    <Button
                      sx={{
                        width: "inherit",
                        borderRadius: "5px",
                        // padding: "5px 25px",
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
                        setOpenSupplier(true);
                      }}
                    >
                      <AddIcon
                        sx={{
                          fontSize: 18,
                          mr: 1,
                        }}
                      />
                      <Typography
                        component="span"
                        sx={{ fontSize: { xs: "1rem", xl: "1.1rem" } }}
                      >
                        New Supplier
                      </Typography>
                    </Button>
                  </Stack>
                  <Divider sx={{ my: 2 }} />
                  <Grid
                    display="flex"
                    direction="row"
                    justifyContent="space-around"
                  >
                    <Stack direction="column" gap={2}>
                      <Typography
                        variant="subtitle1"
                        fontSize={12}
                        color="gray"
                      >
                        Company Name
                      </Typography>
                      <Typography>Smart</Typography>
                    </Stack>
                    <Stack direction="column" gap={2}>
                      <Typography
                        variant="subtitle1"
                        fontSize={12}
                        color="gray"
                      >
                        Contact person
                      </Typography>
                      <Typography>smart</Typography>
                    </Stack>
                    <Stack direction="column" gap={2}>
                      <Typography
                        variant="subtitle1"
                        fontSize={12}
                        color="gray"
                      >
                        Phone number
                      </Typography>
                      <Typography>9876555</Typography>
                    </Stack>
                  </Grid>
                  <Grid
                    container
                    xs={12}
                    sx={{ display: "flex", justifyContent: "space-around" }}
                    marginTop={2}
                    gap={2}
                  >
                    <Grid item xs={5} sx={{ border: "0.5px #d9d9d9 solid" }}>
                      <DialogTitle>
                        <Typography component="h6">Supplier Address</Typography>
                      </DialogTitle>
                      <Divider />
                      <DialogContent>
                        <Stack marginTop={2}>
                          <TextField
                            name="address"
                            label="Address"
                            darkDisable
                            size="small"
                          />
                        </Stack>
                        <Stack marginTop={2}>
                          <TextField
                            name="city"
                            label="City"
                            darkDisable
                            size="small"
                          />
                        </Stack>
                        <Stack marginTop={2}>
                          <TextField
                            name="zipcode"
                            darkDisable
                            label="Zip Code"
                            size="small"
                          />
                        </Stack>
                        <Stack marginTop={2}>
                          <TextField
                            darkDisable
                            name="Country"
                            label="Country"
                            size="small"
                          />
                        </Stack>
                      </DialogContent>
                    </Grid>
                    <Grid item xs={5} sx={{ border: "1px #d9d9d9 solid" }}>
                      <DialogTitle>
                        <Typography component="h6">Billing Address</Typography>
                      </DialogTitle>
                      <Divider />
                      <DialogContent>
                        <Stack marginTop={2}>
                          <TextField
                            darkDisable
                            name="address"
                            label="Address"
                            size="small"
                          />
                        </Stack>
                        <Stack marginTop={2}>
                          <TextField
                            darkDisable
                            name="city"
                            label="City"
                            size="small"
                          />
                        </Stack>
                        <Stack marginTop={2}>
                          <TextField
                            darkDisable
                            name="zipcode"
                            label="Zip Code"
                            size="small"
                          />
                        </Stack>
                        <Stack marginTop={2}>
                          <TextField
                            darkDisable
                            name="Country"
                            label="Country"
                            size="small"
                          />
                        </Stack>
                      </DialogContent>
                    </Grid>
                  </Grid>
                </CustomCardContent>
              </Card>
            </Grid>
          </Grid>
          {/* columnEnd */}
          <Grid item xs={4}>
            <Card
              sx={{
                flex: 1,
                height:'100%'
              }}
            >
              <CustomCardContent title="Details">
                <Stack gap={2}>
                  <AutoComplete
                    options={[
                      { id: crypto.randomUUID(), warehouse: "warehouse1" },
                    ]}
                    label="Warehouse"
                    getOptionLabel={(item: any) => item.warehouse}
                  />
                </Stack>
              </CustomCardContent>
            </Card>
          </Grid>
          <LineItems />

          <Grid
            container
            xs={12}
            sx={{ display: "flex", justifyContent: "space-around" }}
            marginTop={4}
            gap={2}
          >
               <Grid item xs={5} sx={{ border: "1px #d9d9d9 solid" }}>
              <Card
                sx={{
                  flex: 1,
                  height: "100%",
                }}
              >
                <DialogTitle>
                  <Typography component="h6">Supplier notes</Typography>
                </DialogTitle>
                <Divider />
                <DialogContent>
                  <TextField
                    multiline
                    id="notes"
                    rows={10}
                    label="Notes"
                    name="notes"
                  />
                </DialogContent>
              </Card>
            </Grid>
            <Grid item xs={5} sx={{ border: "0.5px #d9d9d9 solid" }}>
              <Card
                sx={{
                  flex: 1,
                  height: "100%",
                }}
              >
                <DialogTitle>
                  <Typography component="h6">Invoice Summary</Typography>
                </DialogTitle>
                <Divider />
                <DialogContent>
                  <Stack direction="row" gap={2} marginTop={2}>
                    <TextField
                      name="line"
                      darkDisable
                      label="Line Items"
                      value="1"
                      size="small"
                    />
                    <TextField
                      darkDisable
                      name="unit"
                      label="Unit Ordered"
                      value="1"
                      size="small"
                    />
                  </Stack>
                  <Stack direction="row" gap={2} marginTop={2}>
                    <TextField
                      darkDisable
                      name="received"
                      label="Received items"
                      value="1"
                      size="small"
                    />
                    <TextField
                      darkDisable
                      name="subtotal"
                      value="INR 10"
                      label="Subtotal"
                      size="small"
                    />
                  </Stack>
                  <Stack direction="row" gap={2} marginTop={2}>
                    <TextField
                      darkDisable
                      name="discount"
                      label="Discount price"
                      value="INR 1"
                      size="small"
                    />

                    <TextField
                      darkDisable
                      name="taxes"
                      label="Taxes"
                      value="INR 10 "
                      size="small"
                    />
                  </Stack>
                  <Stack direction="row" gap={2} marginTop={2}>
                    <TextField
                      darkDisable
                      name="shippingcharge"
                      label="Shipping charges"
                      value="INR 13"
                      size="small"
                    />
                    <TextField
                      darkDisable
                      name="Total"
                      value="INR 100"
                      label="Total"
                      size="small"
                    />
                  </Stack>
                </DialogContent>
              </Card>
            </Grid>
         
          </Grid>
        </Grid>
      </Container>
      <AddSupplier
        open={openSupplier}
        handleClose={() => setOpenSupplier(!openSupplier)}
      />
    </ThemeProvider>
  );
}

export default SupplierReturnUpdate;

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },

  {
    id: crypto.randomUUID(),
    title: "Product",
  },

  {
    id: crypto.randomUUID(),
    title: "Supplier SKU",
  },
  {
    id: crypto.randomUUID(),
    title: "Order Qty",
  },
  {
    id: crypto.randomUUID(),
    title: "Discount",
  },
  {
    id: crypto.randomUUID(),
    title: "Taxes",
  },
  {
    id: crypto.randomUUID(),
    title: "Receive Qty",
  },
  {
    id: crypto.randomUUID(),
    title: "Unit cost",
  },
  {
    id: crypto.randomUUID(),
    title: "Total",
  },
];

function LineItems() {
  const newtheme = useSelector((state: any) => state.theme);
  const [openBrowsItem, setOpenBrowsItem] = React.useState(false);
  return (
    <PerfectScrollbar>
      <Box sx={{ marginTop: 4 }}>
        <TableContainer component={Paper}>
          <Box sx={{ margin: 3 }}>
            <Typography variant="title1" margin={2}>
              Line Items
            </Typography>
          </Box>
          <Stack
            direction="row"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
          >
            <Stack width="70%">
              <TextField name="Search" label="Search" value="" size="small" />
            </Stack>
            <Button
              sx={{
                width: "inherit",
                borderRadius: "5px",
                // padding: "5px 25px",
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
                setOpenBrowsItem(true);
              }}
            >
              <AddIcon
                sx={{
                  fontSize: 18,
                  mr: 1,
                }}
              />
              <Typography
                component="span"
                sx={{ fontSize: { xs: "1rem", xl: "1.1rem" } }}
              >
                Brows
              </Typography>
            </Button>
          </Stack>
          <Divider sx={{ my: 2 }} />
          <PerfectScrollbar>
            <Table
              sx={{
                height: "100%",
              }}
            >
              <TableHead>
                <TableRow>
                  {tableTitle.map((item) => {
                    const isImage = item.title.includes("Image");

                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          position: isImage ? "sticky" : "static",
                          left: isImage ? 0 : 50,
                        }}
                        minWt={120}
                      >
                        {item.title}
                      </CustomTableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    sx={{
                      width: 50,
                      position: "sticky",
                      left: 0,
                      zIndex: 999,
                      background: newtheme.isDarkMode
                        ? "#26263D"
                        : palette.background.default,
                    }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <img
                        alt="new"
                        src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
                        width="100%"
                      />
                    </Box>
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                    }}
                  >
                    product
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                      // background: "white",
                    }}
                  >
                    {/* inventory */}0
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                      // background: "white",
                    }}
                  >
                    -
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                      // background: "white",
                    }}
                  >
                    -
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                      // background: "white",
                    }}
                  >
                    -
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                      // background: "white",
                    }}
                  >
                    Not Provided
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                      // background: "white",
                    }}
                  >
                    -
                  </TableCell>
                  <TableCell
                    sx={{
                      minWidth: 170,
                      // background: "white",
                    }}
                  >
                    -
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
        {/* <BrowsListItem
          open={openBrowsItem}
          handleClose={() => setOpenBrowsItem(!openBrowsItem)}
        /> */}
      </Box>
    </PerfectScrollbar>
  );
}
