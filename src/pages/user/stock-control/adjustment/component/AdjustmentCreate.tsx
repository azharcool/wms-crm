import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PrintIcon from "@mui/icons-material/Print";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Card,
  Container,
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
import NoDataTableRow from "components/table/no-data-table-row";
import TableToolbar from "components/table-toolbar";
import CustomTableCell from "components/table/CustomTableCell";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import { FieldArray, FormikProps } from "formik";
import useAdjustmentReason from "hooks/setting/adjustment-reason/useAdjustmentReason";
import useLocation from "hooks/querys/warehouse/location/useLocation";
import useAdjustmentAction from "hooks/stock/adjustment/useAdjustmentAction";
import useDecodedData from "hooks/useDecodedData";
import useWarehouse from "hooks/warehouse/useWarehouse";
import AppRoutes from "navigation/appRoutes";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";
import { AddAdjustmentRequestRoot } from "types/stock/adjustment/addAdjustmentRequest";
import useAddAdjustmentForm, {
  AddAdjustmentForm,
  deafultValues,
  IStock,
} from "../hooks/useAddAdjustmentForm";
import BrowsStock from "./BrowseStack";
import UnitSlider from "./UnitSlider";

export interface IUnits {
  unitNumber?: string | number;
  serialNumber?: string;
  batchNumber?: number;
  quantity?: number;
  conditionCode?: string;
}

function AdjustmentCreate() {
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
        handleSubmit();
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
  const { adjustmentReason: adjustmentMenuItem } = useAdjustmentReason();
  const { addAdjustmentAction } = useAdjustmentAction();
  const { warehouse: warehouseMenuItem } = useWarehouse();
  const decodeData = useDecodedData();
  const [totalValue, setTotalValue] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const formik = useAddAdjustmentForm({
    initialValues: deafultValues,
    onSubmit,
  });
  const {
    stockControl: {
      layout,
      adjustment: { listing },
    },
  } = AppRoutes;
  const navigate = useNavigate();
  const [units, setUnits] = useState<IUnits>({
    unitNumber: 0,
    batchNumber: 0,
    serialNumber: "",
    conditionCode: "",
  });

  const {
    values,
    handleBlur,
    handleChange,
    touched,
    setFieldValue,
    errors,
    handleSubmit,
    resetForm,
  } = formik;
  async function onSubmit(values: AddAdjustmentForm) {
    const data: AddAdjustmentRequestRoot = {
      userId: Number(decodeData.id),
      warehosuseId: Number(values.warehosuseId),
      adjustmentReasonId: Number(values.adjustmentReasonId),
      referenceId: Number(values.referenceId),
      companyId: Number(values.companyId),
      sa: values.sa,
      lineItem: 0,
      qtyChange: Number(values.qtyChange),
      notes: values.notes,
      totalQuantity: Number(units.quantity),
      totalValue: Number(units.quantity) * Number(values.stock[0]?.unitCost),
      stock: values.stock.map((item) => ({
        userId: Number(decodeData.id),
        productId: Number(item.productId),
        variantId: Number(item?.id),
        sku: item?.sku,
        barcode: item?.barcode,
        conditionCodeId: Number(item?.conditionCodeId),
        locationId: Number(item?.locationId),
        unitNumber: String(item?.unitNumber),
        unitCost: Number(item?.unitCost),
        barcodeStrategy: item?.barcodeStrategy || "",
        batchNumber: item?.batchNumber,
        containerNumber: String(item.containerNumber),
        expiryDate: item.expiryDate
          ? new Date(item?.expiryDate).toJSON() || ""
          : null,
        optionName: item.optionName,
        image: item.image || "",
        quantity: Number(item.quantity),
        serialNumber: item.serialNumber || "",
        value: item.value,
      })),
    };

    await addAdjustmentAction(data);
    resetForm();
    navigate(`/${layout}/${listing}`);
  }
  useEffect(() => {
    const quantity = values.stock.reduce((accumulator, item) => {
      return Number(accumulator) + (item.quantity);
    }, 0);
    setTotalQuantity(quantity);

    const total = values.stock.reduce((accumulator, item) => {
      return (
        Number(accumulator) + Number(item.quantity) * Number(item.unitCost)
      );
    }, 0);
    setTotalValue(total);
  }, [values]);

  
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
                  <Stack direction="column" gap={2} sx={{ width: "100%" }}>
                    <AutoComplete
                      getOptionLabel={(item: any) => item.value}
                      label="Warehouse*"
                      helperText={
                        (touched.warehosuseId &&
                          errors &&
                          errors.warehosuseId) ||
                        ""
                      }
                      options={warehouseMenuItem}
                      handleChange={(e: any, value: any) =>
                        setFieldValue("warehosuseId", value?.id)
                      }
                    />
                  </Stack>
                  <Stack
                    direction="column"
                    gap={2}
                    mx={2}
                    sx={{ width: "100%" }}
                  >
                    <AutoComplete
                      getOptionLabel={(item: any) => item.value}
                      helperText={
                        (touched.adjustmentReasonId &&
                          errors &&
                          errors.adjustmentReasonId) ||
                        ""
                      }
                      label="Adjustment Reason*"
                      options={adjustmentMenuItem}
                      handleChange={(e: any, value: any) =>
                        setFieldValue("adjustmentReasonId", value?.id)
                      }
                    />
                  </Stack>
                  <Stack direction="column" mr={2} sx={{ width: "100%" }}>
                    <TextField
                      darkDisable
                      label="Reference ID"
                      name="referenceId"
                      size="small"
                      value={values.referenceId}
                      onChange={handleChange("referenceId")}
                    />
                  </Stack>
                  <Stack direction="column" sx={{ width: "100%" }}>
                    <AutoComplete
                      getOptionLabel={(item: any) => item.company}
                      label="Company"
                      options={[{ id: "1", company: "smart" }]}
                      handleChange={(e: any, value: any) =>
                        setFieldValue("companyId", value?.id)
                      }
                    />
                  </Stack>
                </Grid>
              </CustomCardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <StocksTable
              formik={formik}
              warehouseId={values.warehosuseId}
              adjustmentReasonId={values.adjustmentReasonId}
              setUnits={setUnits}
              units={units}
            />
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CustomCardContent title="Notes">
                <TextField
                  multiline
                  id="notes"
                  label="Notes"
                  name="notes"
                  value={values.notes}
                  onChange={handleChange("notes")}
                  rows={5}
                />
              </CustomCardContent>
              <CustomCardContent title="Adjustment Summary">
                <Stack direction="row" gap={2} marginTop={2}>
                  <TextField
                    darkDisable
                    label="Total adjusted Quantity"
                    size="small"
                    name="totalQuantity"
                    value={Number(totalQuantity) || 0}
                    onChange={() =>
                      setFieldValue("totalQuantity", units.quantity)
                    }
                  />
                  <TextField
                    darkDisable
                    name="totalValue"
                    size="small"
                    label="Total adjusted value"
                    value={`INR ${totalValue}.00`}
                    onChange={() =>
                      setFieldValue(
                        "totalValue",
                        Number(units.quantity) *
                          Number(values.stock[0]?.unitCost) || 0,
                      )
                    }
                  />
                </Stack>
              </CustomCardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

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
  },
];

interface IStockTable {
  warehouseId: number;
  adjustmentReasonId: number;
  formik: FormikProps<any>;
  setUnits: Dispatch<SetStateAction<IUnits>>;
  units: IUnits;
}

function StocksTable(props: IStockTable) {
  const {
    warehouseId,
    adjustmentReasonId,
    formik,
    setUnits,

  } = props;

  const newtheme = useSelector((state: any) => state.theme);
  const [openBrows, setOpenBrows] = useState(false);

  const [selectedVariants, setSelectedVariants] = useState<
    IGetAllVariantResponseData[]
  >([]);
  const [variants, setVariants] = useState<IGetAllVariantResponseData[]>([]);

  const [selectedItem, setSelectedItem] =
    useState<IGetAllVariantResponseData>();
  const [unitSliderOpen, setUnitSliderOpen] = useState(false);
  const handleClose = () => {
    setOpenBrows(!openBrows);
  };
  const handleUnitClose = () => {
    setUnitSliderOpen(!unitSliderOpen);
  };
  const { location: locationMenuItem } = useLocation(warehouseId);
  const { setFieldValue, handleChange, values } = formik;
  const isBrowseDisable = warehouseId === 0 && adjustmentReasonId === 0;

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
              disabled={isBrowseDisable}
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
                <TableBody>
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
                              value={values?.stock[index]?.unitCost}
                              onChange={handleChange}
                              size="small"
                            />
                          </TableCell>
                          <TableCell
                            sx={{
                              minWidth: 170,
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            onClick={() => {
                              setSelectedItem({ ...item, index });
                              setUnitSliderOpen(!unitSliderOpen);
                            }}
                          >
                            <QrCode2Icon
                              sx={{
                                fontSize: 20,
                                mr: 1,
                                color: "#000",
                              }}
                            />
                            <Typography sx={{ mb: 3 }}>
                              {item?.quantity}
                            </Typography>
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
                              size="small"
                              name={`stock[${index}].containerNumber`}
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
                              type="date"
                              label="Expiry Date"
                              size="small"
                              name={`stock[${index}].expiryDate`}
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
                                label="Location*"
                                options={locationMenuItem}
                                handleChange={(e: any, value: any) =>
                                  setFieldValue(
                                    `stock[${index}].locationId`,
                                    value?.id,
                                  )
                                }
                              />
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <NoDataTableRow colSize={7} title="No Stock Row Found" />
                  )}
                </TableBody>
              </Table>
            </PerfectScrollbar>
          </TableContainer>
        </CustomCardContent>
      </Card>

      <BrowsStock
        handleClose={handleClose}
        open={openBrows}
        setVariants={setSelectedVariants}
        formik={formik}
        variants={selectedVariants}
        handleAdd={() => {
          setVariants(selectedVariants);
          setOpenBrows(!openBrows);
        }}
      />
      <UnitSlider
        handleClose={handleUnitClose}
        open={unitSliderOpen}
        formik={formik}
        handleAdd={() => setUnitSliderOpen(!unitSliderOpen)}
        data={selectedItem}
        setUnits={setUnits}
      />
    </>
  );
}
