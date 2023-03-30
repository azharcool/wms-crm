import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Card,
  Container,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  PaletteMode,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import CustomTableCell from "components/table/CustomTableCell";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import AppRoutes from "navigation/appRoutes";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import palette from "theme/palette";
// import BrowsListItem from "./BrowsListItem";

function AdjustmentCreate() {
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
      title: "Barcode",
      onClick: () => {
        // setEditable(false);
      },
      icon: (
        <PrintIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
    {
      id: crypto.randomUUID(),
      title: "Save & Complete",
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
  const isTrue = true;

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          breadcrumbs={[
            {
              link: "ADJUSTMENT",
              to: `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.adjustment.listing}`,
            },
          ]}
          buttonText="Save"
          handleClick={() => {
            // handleSubmit()
          }}
          navTitle="PO-2223"
          rightActions={rightActionsData}
          title="New Adjustment"
        />
        <Grid
          container
          direction="row"
          marginTop={2}
          padding={0}
          paddingBottom={2}
          spacing={2}
        >
          {/* coloumn */}
          <Grid item direction="column" spacing={2} xs={12}>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="Details">
                <Grid
                  display="flex"
                  direction="row"
                  justifyContent="space-around"
                  
                >
                  <Stack direction="column" gap={2} sx={{width:"100%"}}>
                    <AutoComplete
                      getOptionLabel={(item: any) => item.warehouse}
                      label="Warehouse*"
                      options={[
                        { id: crypto.randomUUID(), warehouse: "warehouse1" },
                      ]}
                    />
                  </Stack>
                  <Stack direction="column" gap={2} mx={2} sx={{width:"100%"}}>
                    <AutoComplete
                      getOptionLabel={(item: any) => item.warehouse}
                      label="Adjustment Reasion*"
                      options={[
                        { id: crypto.randomUUID(), warehouse: "warehouse1" },
                      ]}
                    />
                  </Stack>
                  <Stack direction="column" mr={2} sx={{width:"100%"}}>
                    <TextField
                      darkDisable
                      label="Reference ID"
                      name="unit"
                      size="small"
                      value="1"
                    />
                  </Stack>
                  <Stack direction="column"sx={{width:"100%"}}>
                    <AutoComplete
                      getOptionLabel={(item: any) => item.warehouse}
                      label="Company"
                      options={[
                        { id: crypto.randomUUID(), warehouse: "warehouse1" },
                      ]}
                    />
                  </Stack>
                </Grid>
              </CustomCardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <StocksTable />
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CustomCardContent title="Notes">
                <TextField
                  multiline
                  id="notes"
                  label="Notes"
                  name="notes"
                  rows={5}
                />
              </CustomCardContent>
              <CustomCardContent title="Adjustment Summary">
                <Stack direction="row" gap={2} marginTop={2}>
                  <TextField
                    darkDisable
                    label="Total adjusted Quantity"
                    name="qty"
                    size="small"
                    value="1"
                  />
                  <TextField
                    darkDisable
                    label="Total adjusted value	"
                    name="value"
                    size="small"
                    value="1"
                  />
                </Stack>
              </CustomCardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* <AddSupplier
        handleClose={() => setOpenSupplier(!openSupplier)}
        open={openSupplier}
      /> */}
    </ThemeProvider>
  );
}

export default AdjustmentCreate;

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
    title: "Barcode Stategy",
  },
  {
    id: crypto.randomUUID(),
    title: "Unit cost",
  },
  {
    id: crypto.randomUUID(),
    title: "Unit number",
  },
  {
    id: crypto.randomUUID(),
    title: "Container number",
  },
  {
    id: crypto.randomUUID(),
    title: "Expiry date",
  },
  {
    id: crypto.randomUUID(),
    title: "Location",
  }
];

function StocksTable() {
  const newtheme = useSelector((state: any) => state.theme);
  const [openBrowsItem, setOpenBrowsItem] = React.useState(false);
  return (
    <>
      <Card>
        <CustomCardContent title="Stocks *">
          <Stack
            alignItems="start"
            direction="row"
            gap={5}
            justifyContent="space-between"
          >
            <TextField label="Search" name="Search" size="small" value="" />

            <Button
              startIcon={
                <AddIcon
                  sx={{
                    fontSize: 12,
                  }}
                />
              }
              sx={{
                width: "inherit",
                borderRadius: "5px",
                // display: "block",
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
              Browse
            </Button>
          </Stack>

          <TableContainer>
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
                  </TableRow>
                </TableBody>
              </Table>
            </PerfectScrollbar>
          </TableContainer>
        </CustomCardContent>
      </Card>

      {/* <BrowsListItem
          open={openBrowsItem}
          handleClose={() => setOpenBrowsItem(!openBrowsItem)}
        /> */}
    </>
  );
}
