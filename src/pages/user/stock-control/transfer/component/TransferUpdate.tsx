import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
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
import useGetByIdAdjustment from "hooks/querys/stock/adjustment/useGetByIdAdjustment";
import useLocation from "hooks/querys/warehouse/location/useLocation";
import useDecodedData from "hooks/useDecodedData";
import AppRoutes from "navigation/appRoutes";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAdjustmentSelected } from "redux/stock-control/adjustmentSelector";
import palette from "theme/palette";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";
import { AddAdjustmentRequestRoot } from "types/stock/adjustment/addAdjustmentRequest";
import useManageTransferForm, {
  ManageTransferForm,
  defaultValues,
} from "../hooks/useManageTransferForm";
import BrowsStock from "./slider/BrowseStack";
import UnitSlider from "./slider/UnitSlider";

export interface IUnits {
  unitNumber?: string | number;
  serialNumber?: string;
  batchNumber?: number;
  quantity?: number;
  conditionCode?: string;
}

function TransferUpdate() {
  const [totalValue, setTotalValue] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [units, setUnits] = useState<IUnits>({
    unitNumber: 0,
    batchNumber: 0,
    serialNumber: "",
    conditionCode: "",
  });

  const navigate = useNavigate();

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
  const { editAdjustmentAction } = useAdjustmentAction();
  const { warehouse: warehouseMenuItem } = useWarehouse();
  const decodeData = useDecodedData();
  const selectedAdjustment = useSelector(getAdjustmentSelected);
  const adjustmentData = {
    adjustmentId: selectedAdjustment.id,
  };
  const { data: adjustmentEditData } = useGetByIdAdjustment(adjustmentData);
  const {
    stockControl: {
      layout,
      adjustment: { listing },
    },
  } = AppRoutes;

  const formik = useManageTransferForm({
    initialValues: defaultValues,
    onSubmit,
  });
  const {
    values,
    handleChange,
    touched,
    setFieldValue,
    errors,
    handleSubmit,
    resetForm,
  } = formik;
  async function onSubmit(values: ManageTransferForm) {
    const data: AddAdjustmentRequestRoot = {
      id: Number(adjustmentEditData?.data.id),
      userId: Number(decodeData.id),
      warehosuseId: Number(values.warehosuseId),
      adjustmentReasonId: Number(values.adjustmentReasonId),
      referenceId: Number(values.referenceId),
      companyId: Number(values.companyId),
      sa: values.sa,
      lineItem: 0,
      qtyChange: Number(values.qtyChange),
      notes: values.notes,
      totalQuantity: Number(totalQuantity),
      totalValue: Number(totalValue),
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

    await editAdjustmentAction(data);
    resetForm();
    navigate(`/${layout}/${listing}`);
  }
  useEffect(() => {
    if (adjustmentEditData?.data) {
      setFieldValue("warehosuseId", adjustmentEditData?.data.warehouseId);
      setFieldValue(
        "adjustmentReasonId",
        adjustmentEditData?.data.adjustmentReasonId,
      );
      setFieldValue("referenceId", adjustmentEditData?.data.referenceId);
      setFieldValue("companyId", adjustmentEditData?.data.companyId);
      setFieldValue("sa", adjustmentEditData?.data.sa);
      setFieldValue("lineItem", adjustmentEditData?.data.lineItem);
      setFieldValue("qtyChange", adjustmentEditData?.data.qtyChange);
      setFieldValue("notes", adjustmentEditData?.data.notes);
      setFieldValue(
        "barcodeStrattotalQuantityegy",
        adjustmentEditData?.data.totalQuantity,
      );
      setFieldValue("totalValue", adjustmentEditData?.data.totalValue);
      setFieldValue("stock", adjustmentEditData?.data.stockDetails);
    }
  }, [adjustmentEditData?.data]);

  useEffect(() => {
    const quantity = values.stock
      .filter((i) => i.quantity && i.unitCost)
      .reduce((accumulator, item) => {
        return Number(accumulator) + item.quantity;
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

  const index = warehouseMenuItem.findIndex(
    (item) => item.id === String(adjustmentEditData?.data.warehouseId),
  );

  return (
    <Container maxWidth={false}>
      <TableToolbar
        breadcrumbs={[
          {
            link: "TRANSFER",
            to: `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.transfer.listing}`,
          },
        ]}
        buttonText="Save"
        handleClick={() => {
          // handleSubmit()
        }}
        navTitle={`Stock Transfer ${selectedAdjustment.name} > Edit`}
        rightActions={rightActionsData}
        title={`Stock Transfer ${selectedAdjustment.name}`}
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
                    label="Warehouse*"
                    // defaultValue={warehouseMenuItem.filter((item) => {
                    //   if(item.id === String(adjustmentEditData?.data.warehouseId)){
                    //     return item
                    //   }
                    // })}
                    handleChange={(e: any, value: any) => {
                      setFieldValue("warehosuseId", value?.id);
                    }}
                    options={warehouseMenuItem}
                    defaultValue={{ value: warehouseMenuItem[0]?.value }}
                    // defaultValue={index !== -1  && {id:String(values.warehosuseId), value:warehouseMenuItem[index].value}}
                    helperText={
                      (touched.warehosuseId && errors && errors.warehosuseId) ||
                      ""
                    }
                  />
                </Stack>
                <Stack direction="column" gap={2} mx={2} sx={{ width: "100%" }}>
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
                  onChange={() => setFieldValue("totalQuantity", totalQuantity)}
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
  );
}

export default TransferUpdate;

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
                              size="small"
                              value={values?.stock[index]?.unitCost}
                              onChange={handleChange}
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
                              setSelectedItem({ ...item, index, isEdit: true });
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
