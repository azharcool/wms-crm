import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PrintIcon from "@mui/icons-material/Print";
import SaveIcon from "@mui/icons-material/Save";
import {
  Button,
  Card,
  Container,
  Grid,
  Stack,
  Table,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { timezone, warehouseStatus } from "__mock__";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import CustomTableCell from "components/table/CustomTableCell";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import useArea from "hooks/actions/warehouse/area/useArea";
import useWarehouse from "hooks/actions/warehouse/useWarehouse";
import useZone from "hooks/actions/warehouse/zone/useZone";
import useDecodedData from "hooks/useDecodedData";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useAppDispatch } from "redux/store";
import { setWarehouse } from "redux/warehouse/warehouseSlice";
import AppRoutes from "routes/appRoutes";
import palette from "theme/palette";
import useAddMovementForm, {
  AddMovementForm,
} from "../hooks/useAddMovementForm";

const initialValues: AddMovementForm = {
  userId: 0,
  warehouse: "",
  area: "",
  zone: "",
  location: "",
};

function MovementCreate() {
  const [barcodeSliderOpen, setBarcodeSliderOpen] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const userDecoded = useDecodedData();
  const { warehouse: warehouseMenuItem } = useWarehouse();
  const { zones } = useZone();
  const { areas } = useArea();
  const decodeData = useDecodedData();
  const dispatch = useAppDispatch();

  async function onSubmit(values: AddMovementForm) {
    const data = {
      userId: Number(userDecoded.id),
      warehouse: values.warehouse,
      area: values.area,
      zone: values.zone,
      location: values.location,
    };
  }

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
    {
      id: crypto.randomUUID(),
      title: "Save & Complete",
      onClick: () => {
        // handleSubmit();
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

  const movementForm = useAddMovementForm({
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
  } = movementForm;

  const {
    stockControl: {
      layout,
      movement: { listing },
    },
  } = AppRoutes;

  return (
    <Container>
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
        title="New Movement"
      />
      <Grid container marginTop={2} spacing={2}>
        <Grid container item rowSpacing={2} xs={9}>
          <Grid item xs={12}>
            <Card
              sx={{
                flex: 1,
              }}
            >
              <CustomCardContent title="Details">
                <Grid
                  direction="row"
                  display="flex"
                  justifyContent="space-around"
                >
                  <Stack direction="column" gap={2} sx={{ width: "100%" }}>
                    <AutoComplete
                      getOptionLabel={(item: any) => item.value}
                      handleChange={(e: any, item: any) => {
                        dispatch(
                          setWarehouse({
                            id: item?.id || 0,
                            name: item?.value || "",
                          }),
                        );
                        setFieldValue("warehouse", item.value);
                      }}
                      id="warehouse"
                      label="Warehouse*"
                      options={warehouseMenuItem}
                    />
                  </Stack>
                  <Stack
                    direction="column"
                    gap={2}
                    mx={2}
                    sx={{ width: "100%" }}
                  >
                    <AutoComplete
                      disabled={!values.warehouse}
                      getOptionLabel={(item: any) => item.value}
                      handleChange={(e: any, value: any) =>
                        setFieldValue("area", value.value)
                      }
                      id="area"
                      label="Area"
                      options={areas}
                    />
                  </Stack>
                  <Stack
                    direction="column"
                    gap={2}
                    mx={2}
                    sx={{ width: "100%" }}
                  >
                    <AutoComplete
                      disabled={!values.area}
                      getOptionLabel={(item: any) => item.value}
                      handleChange={(e: any, value: any) =>
                        setFieldValue("zone", value.value)
                      }
                      id="zone"
                      label="Zones"
                      options={zones}
                    />
                  </Stack>
                  <Stack direction="column" sx={{ width: "100%" }}>
                    <AutoComplete
                      disabled={!values.area}
                      handleChange={(e: any, value: any) =>
                        setFieldValue("location", value.value)
                      }
                      label="Location"
                      options={zones}
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
            <Card sx={{ flex: 1 }}>
              <CustomCardContent title="Notes">
                <TextField
                  multiline
                  id="notes"
                  label="Notes"
                  name="notes"
                  rows={5}
                />
              </CustomCardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Move to">
              <TextField
                disabled
                isSelect
                label="Warehouse test1"
                menuItems={warehouseStatus}
                name="warehouse"
                size="small"
              />

              <TextField
                isSelect
                disabled={!values.warehouse}
                label="Area"
                menuItems={areas}
                name="areas"
                size="small"
                value={values.area}
                onChange={handleChange("area")}
              />
              <TextField
                isSelect
                disabled={!values.area}
                label="Zone"
                menuItems={zones}
                name="zone"
                size="small"
                value={values.zone}
                onChange={handleChange("zone")}
              />
              <TextField
                isSelect
                disabled={!values.area}
                label="Location"
                menuItems={timezone}
                name="location"
                size="small"
                value={values.location}
                onChange={handleChange("location")}
              />
              <TextField
                isSelect
                disabled={!values.location}
                label="To container"
                name="tocontainer"
                size="small"
              />
            </CustomCardContent>
            <CustomCardContent title="Movement Summary">
              <Stack direction="column" gap={2} marginTop={2}>
                <TextField
                  darkDisable
                  label="Total movement Quantity"
                  name="totalQuantity"
                  size="small"
                  value={Number(totalQuantity) || 0}
                />
                <TextField
                  darkDisable
                  label="Total movement value"
                  name="totalValue"
                  size="small"
                  value={`INR ${totalValue}.00`}
                />
              </Stack>
            </CustomCardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MovementCreate;

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
  },
];

function StocksTable() {
  const [openBrows, setOpenBrows] = useState(false);

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
                setOpenBrows(true);
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
                {/* <TableBody>
                  {values.stock?.length !== 0 ? (
                    values.stock.map((item: any, index: number) => {
                      return (
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
                            <Stack direction="column">
                              <Typography
                                style={{ fontSize: 12, color: "#000" }}
                              >
                                {item?.productName}
                              </Typography>
                              <Typography
                                style={{ fontSize: 11, color: "#333" }}
                              >
                                {item?.sku}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell
                            sx={{
                              minWidth: 170,
                            }}
                          >
                            {item?.barcode || "-"}
                          </TableCell>
                          <TableCell
                            sx={{
                              minWidth: 170,
                            }}
                          >
                            <TextField
                              id="unitCost"
                              label="Unit Cost"
                              name={`stock[${index}].unitCost`}
                              size="small"
                              value={values?.stock[index]?.unitCost}
                              onChange={handleChange}
                            />
                          </TableCell>
                          <TableCell
                            align="center"
                            sx={{
                              minWidth: 170,
                            }}
                            onClick={() => {
                              setSelectedItem({ ...item, index });
                              setUnitSliderOpen(!unitSliderOpen);
                            }}
                          >
                            <Box>
                              <Typography variant="subtitle2">
                                <span>
                                  <QrCode2Icon
                                    sx={{
                                      fontSize: 20,
                                      ml: 1,
                                      color: "#000",
                                      verticalAlign: "middle",
                                    }}
                                  />
                                </span>

                                <sup
                                  style={{
                                    verticalAlign: "supper",
                                  }}
                                >
                                  {item?.quantity}
                                </sup>
                              </Typography>
                            </Box>
                          </TableCell>
                          <TableCell
                            sx={{
                              minWidth: 170,
                              // background: "white",
                            }}
                          >
                            <TextField
                              darkDisable
                              label="Container Number"
                              name={`stock[${index}].containerNumber`}
                              size="small"
                              value={values.stock[index]?.containerNumber}
                              onChange={handleChange}
                            />
                          </TableCell>
                          <TableCell
                            sx={{
                              minWidth: 170,
                              // background: "white",
                            }}
                          >
                            <TextField
                              darkDisable
                              label="Expiry Date"
                              name={`stock[${index}].expiryDate`}
                              size="small"
                              type="date"
                              value={values.stock[index]?.expiryDate}
                              onChange={handleChange}
                            />
                          </TableCell>
                          <TableCell
                            sx={{
                              minWidth: 170,
                              // background: "white",
                            }}
                          >
                            <Box sx={{ mb: 2 }}>
                              <AutoComplete
                                getOptionLabel={(item: any) => item.value}
                                handleChange={(e: any, value: any) =>
                                  setFieldValue(
                                    `stock[${index}].locationId`,
                                    value?.id,
                                  )
                                }
                                label="Location*"
                                options={locationMenuItem}
                              />
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <NoDataTableRow colSize={7} title="No Stock Row Found" />
                  )}
                </TableBody> */}
              </Table>
            </PerfectScrollbar>
          </TableContainer>
        </CustomCardContent>
      </Card>
    </>
  );
}
