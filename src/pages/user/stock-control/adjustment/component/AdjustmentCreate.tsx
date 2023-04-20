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
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import CustomCardContent from "components/card/CustomCardContent";
import TableToolbar from "components/table-toolbar";
import CustomTableCell from "components/table/CustomTableCell";
import NoDataTableRow from "components/table/no-data-table-row";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import { FormikProps } from "formik";
import useAdjustmentReason from "hooks/actions/setting/adjustment-reason/useAdjustmentReason";
import useAdjustmentAction from "hooks/actions/stock/adjustment/useAdjustmentAction";
import useWarehouse from "hooks/actions/warehouse/useWarehouse";
import useLocation from "hooks/querys/warehouse/location/useLocation";
import useDecodedData from "hooks/useDecodedData";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";
import palette from "theme/palette";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";
import { AddAdjustmentRequestRoot } from "types/stock/adjustment/addAdjustmentRequest";
import useManageAdjustmentForm, {
  ManageAdjustmentForm,
  deafultValues,
} from "../hooks/useManageAdjustmentForm";
import AdjustmentBarcode from "./slider/AdjustmentBarcode";
import BrowsStock from "./slider/BrowseStack";
import UnitSlider from "./slider/UnitSlider";

export interface IUnits {
  unitNumber?: string | number;
  serialNumber?: string;
  batchNumber?: number;
  quantity?: number;
  conditionCode?: string;
}

function AdjustmentCreate() {
  const [barcodeSliderOpen, setBarcodeSliderOpen] = useState(false);

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
        setBarcodeSliderOpen(!barcodeSliderOpen);
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

  const formik = useManageAdjustmentForm({
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
  async function onSubmit(values: ManageAdjustmentForm) {
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
    const quantity = values.stock
      .filter((i) => i.quantity && i.unitCost)
      .reduce((accumulator, item) => {
        return Number(accumulator) + Number(item.quantity);
      }, 0);
    setTotalQuantity(quantity);

    const total = values.stock
      .filter((i) => i.quantity && i.unitCost)
      .reduce((accumulator, item) => {
        return (
          Number(accumulator) + Number(item.quantity) * Number(item.unitCost)
        );
      }, 0);

    setTotalValue(total);
  }, [values]);

  return (
    <>
      <Container>
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
          navTitle="New"
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
                  direction="row"
                  display="flex"
                  justifyContent="space-around"
                >
                  <Stack direction="column" gap={2} sx={{ width: "100%" }}>
                    <AutoComplete
                      getOptionLabel={(item: any) => item.value}
                      handleChange={(e: any, value: any) =>
                        setFieldValue("warehosuseId", value?.id)
                      }
                      helperText={
                        (touched.warehosuseId &&
                          errors &&
                          errors.warehosuseId) ||
                        ""
                      }
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
                      getOptionLabel={(item: any) => item.value}
                      handleChange={(e: any, value: any) =>
                        setFieldValue("adjustmentReasonId", value?.id)
                      }
                      helperText={
                        (touched.adjustmentReasonId &&
                          errors &&
                          errors.adjustmentReasonId) ||
                        ""
                      }
                      label="Adjustment Reason*"
                      options={adjustmentMenuItem}
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
                      handleChange={(e: any, value: any) =>
                        setFieldValue("companyId", value?.id)
                      }
                      label="Company"
                      options={[{ id: "1", company: "smart" }]}
                    />
                  </Stack>
                </Grid>
              </CustomCardContent>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <StocksTable
              adjustmentReasonId={values.adjustmentReasonId}
              formik={formik}
              setUnits={setUnits}
              units={units}
              warehouseId={values.warehosuseId}
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
                  rows={5}
                  value={values.notes}
                  onChange={handleChange("notes")}
                />
              </CustomCardContent>
              <CustomCardContent title="Adjustment Summary">
                <Stack direction="row" gap={2} marginTop={2}>
                  <TextField
                    darkDisable
                    label="Total adjusted Quantity"
                    name="totalQuantity"
                    size="small"
                    value={Number(totalQuantity) || 0}
                    onChange={() =>
                      setFieldValue("totalQuantity", totalQuantity)
                    }
                  />
                  <TextField
                    darkDisable
                    label="Total adjusted value"
                    name="totalValue"
                    size="small"
                    value={`INR ${totalValue}.00`}
                    onChange={() => setFieldValue("totalValue", totalValue)}
                  />
                </Stack>
              </CustomCardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <AdjustmentBarcode
        handleClose={() => setBarcodeSliderOpen(false)}
        open={barcodeSliderOpen}
      />
    </>
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
  const { warehouseId, adjustmentReasonId, formik, setUnits } = props;

  const [openBrows, setOpenBrows] = useState(false);
  const [variants, setVariants] = useState<IGetAllVariantResponseData[]>([]);
  const [selectedVariants, setSelectedVariants] = useState<
    IGetAllVariantResponseData[]
  >([]);
  const [selectedItem, setSelectedItem] =
    useState<IGetAllVariantResponseData>();
  const [unitSliderOpen, setUnitSliderOpen] = useState(false);

  const newtheme = useSelector((state: any) => state.theme);
  const { location: locationMenuItem } = useLocation(warehouseId);

  const { setFieldValue, handleChange, values } = formik;

  const isBrowseDisable = warehouseId === 0 && adjustmentReasonId === 0;

  const handleClose = () => {
    setOpenBrows(!openBrows);
  };
  const handleUnitClose = () => {
    setUnitSliderOpen(!unitSliderOpen);
  };

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
                              iconEnd
                              // label="Expiry Date"
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
                </TableBody>
              </Table>
            </PerfectScrollbar>
          </TableContainer>
        </CustomCardContent>
      </Card>

      <BrowsStock
        formik={formik}
        handleAdd={() => {
          setVariants(selectedVariants);
          setOpenBrows(!openBrows);
        }}
        handleClose={handleClose}
        open={openBrows}
        setVariants={setSelectedVariants}
        variants={selectedVariants}
      />
      <UnitSlider
        data={selectedItem}
        formik={formik}
        handleAdd={() => setUnitSliderOpen(!unitSliderOpen)}
        handleClose={handleUnitClose}
        open={unitSliderOpen}
        setUnits={setUnits}
      />
    </>
  );
}
