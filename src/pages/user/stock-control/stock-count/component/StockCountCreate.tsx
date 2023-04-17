import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PrintIcon from "@mui/icons-material/Print";
import {
  Card,
  Checkbox,
  Container,
  Grid,
  PaletteMode,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { grey, purple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import CustomTableCell from "components/table/CustomTableCell";
import TextField from "components/textfield";
import useArea from "hooks/actions/warehouse/area/useArea";
import useWarehouse from "hooks/actions/warehouse/useWarehouse";
import useZone from "hooks/actions/warehouse/zone/useZone";
import useDecodedData from "hooks/useDecodedData";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import useManageStockCount, {
  ManageStockCount,
} from "../hooks/useManageStockCount";

const initialValues: ManageStockCount = {
  warehouse: "",
  area: "",
  zone: "",
};

function StockCountCreate() {
  const newtheme = useSelector((state: any) => state.theme);
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
      title: "Save Draft",
      onClick: () => {},
      icon: (
        <PrintIcon
          sx={{
            fontSize: 18,
            mr: 1,
          }}
        />
      ),
    },
  ];

  const { warehouse } = useWarehouse();
  const { zones } = useZone();
  const { areas } = useArea();

  const movementForm = useManageStockCount({
    onSubmit,
    initialValues,
  });

  async function onSubmit(values: ManageStockCount) {
    const data = {
      warehouse: values.warehouse,
      area: values.area,
      zone: values.zone,
    };
  }
  const {
    touched,
    errors,
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
  } = movementForm;

  // const {
  //   stockControl: {
  //     layout,
  //     movement: { listing },
  //   },
  // } = AppRoutes;

  return (
    <ThemeProvider theme={newtheme.isDarkMode ? darkModeTheme : lightTheme}>
      <Container maxWidth={false}>
        <TableToolbar
          breadcrumbs={[
            {
              link: "Movement",
              to: "",
            },
          ]}
          buttonText="Save"
          handleClick={() => {
            // handleSubmit()
          }}
          navTitle=""
          rightActions={rightActionsData}
          title="Create stock count"
        />

        <Grid item xs={8}>
          <Card
            sx={{
              flex: 1,
              mt: "25px",
            }}
          >
            <CustomCardContent title="Location">
              <Stack direction="row" gap={3}>
                <TextField
                  isSelect
                  error={!!touched.area && !!errors.area}
                  helperText={(touched.area && errors && errors.area) || ""}
                  id="warehouse"
                  label="Warehouse"
                  menuItems={warehouse}
                  name="warehouse"
                  size="small"
                  value={values.warehouse}
                  onSelectHandler={(e) => {
                    setFieldValue("warehouse", e.target.value);
                  }}
                />

                <TextField
                  isSelect
                  disabled={Boolean(!values.warehouse)}
                  error={!!touched.area && !!errors.area}
                  helperText={(touched.area && errors && errors.area) || ""}
                  id="area"
                  label="Area"
                  menuItems={areas}
                  name="area"
                  size="small"
                  value={values.area}
                  onSelectHandler={(e) => {
                    setFieldValue("area", e.target.value);
                  }}
                />
                <TextField
                  isSelect
                  disabled={Boolean(!values.area)}
                  error={!!touched.zone && !!errors.zone}
                  helperText={(touched.zone && errors && errors.zone) || ""}
                  id="zone"
                  label="Zone"
                  menuItems={zones}
                  name="zone"
                  size="small"
                  value={values.zone}
                  onSelectHandler={(e) => {
                    setFieldValue("zone", e.target.value);
                  }}
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
        <Grid item sx={{ mt: "25px" }} xs={12}>
          <StocksCountTable />
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default StockCountCreate;

const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Location",
  },

  {
    id: crypto.randomUUID(),
    title: "Location type",
  },

  {
    id: crypto.randomUUID(),
    title: "Area",
  },
  {
    id: crypto.randomUUID(),
    title: "Zone",
  },
];

function StocksCountTable() {
  const [openBrows, setOpenBrows] = useState(false);

  return (
    <>
      <Card>
        <CustomCardContent title="Locations">
          <TableContainer>
            <PerfectScrollbar>
              <Table
                sx={{
                  height: "100%",
                }}
              >
                <TableHead>
                  <TableRow>
                    <CustomTableCell
                      isCheck
                      isHeader
                      isSticky
                      customStyle={{
                        zIndex: 999,
                      }}
                      leftValue={0}
                      minWt={50}
                    >
                      <Checkbox
                        // checked={}
                        color="primary"
                        // onChange={}
                      />
                    </CustomTableCell>
                    {tableTitle.map((item) => {
                      const isSA = item.title.includes("ID #");

                      return (
                        <CustomTableCell
                          key={item.id}
                          isHeader
                          customStyle={{
                            position: isSA ? "sticky" : "static",
                            left: isSA ? 50 : 0,
                          }}
                          minWt={170}
                        >
                          {item.title}
                        </CustomTableCell>
                      );
                    })}
                    {/* <CustomTableCell isHeader isSticky rightValue={0}>
                    Actions
                  </CustomTableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* <TableRow>
                    <TableCell
                      padding="checkbox"
                      sx={{
                        width: 60,
                        position: "sticky",
                        left: 0,
                        zIndex: 999,
                        background: newtheme.isDarkMode
                          ? "#26263D"
                          : palette.background.default,
                      }}
                    >
                      <Checkbox
                        // checked={}
                        color="primary"
                        // onChange={}
                      />
                    </TableCell>
                    <TableCell
                      sx={{
                        width: 50,
                        position: "sticky",
                        left: 40,
                        zIndex: 999,
                        background: newtheme.isDarkMode
                          ? "#26263D"
                          : palette.background.default,
                        cursor: "pointer",
                      }}
                      onClick={() => navigate(`/${layout}/${details}/1`)}
                    >
                      <Typography
                        sx={{
                          textDecoration: "underline",
                          whiteSpace: "nowrap", //! Dont remove
                        }}
                      >
                        PO-13817
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ minWidth: 170 }}>
                      <Box>
                        <StatusTableCell
                          success={item?.status !== 1}
                          title={item?.status === 1 ? "NEW" : "CANCELLED"}
                        />
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        minWidth: 170,
                      }}
                    >
                      Default Warehouse(Demo)
                    </TableCell>
                    <TableCell
                      sx={{
                        minWidth: 170,
                      }}
                    >
                      Apr 11,2023 09:54:04
                    </TableCell>
                  </TableRow> */}
                </TableBody>
              </Table>
            </PerfectScrollbar>
          </TableContainer>
        </CustomCardContent>
      </Card>
    </>
  );
}
