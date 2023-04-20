import {
  Box,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";

import SearchIcon from "@mui/icons-material/Search";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import CustomTableCell from "components/table/CustomTableCell";
import TextField from "components/textfield";
import AutoComplete from "components/textfield/AutoComplete";
import { FormikProps } from "formik";
import useProductCondition from "hooks/actions/setting/product-condition/useProductCondition";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { IUnits } from "../AdjustmentCreate";

interface IListItem {
  open: boolean;
  handleClose: () => void;
  handleAdd: () => void;
  data?: any;
  formik: FormikProps<any>;
  setUnits: Dispatch<SetStateAction<IUnits>>;
}
const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Unit number",
  },
  {
    id: crypto.randomUUID(),
    title: "Serial number",
  },
  {
    id: crypto.randomUUID(),
    title: "Batch number",
  },
  {
    id: crypto.randomUUID(),
    title: "Quantity",
  },
  {
    id: crypto.randomUUID(),
    title: "Condition code",
  },
];

interface IMenuItem {
  unitNumber: string;
}

function UnitSlider(props: IListItem) {
  const { open, handleClose, handleAdd, data, formik, setUnits } = props;
  const [unitList, setUnitList] = useState<IMenuItem[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter" || event.key === "Return") {
      setUnitList([
        ...unitList,
        {
          unitNumber: searchValue,
        },
      ]);
      setSearchValue("");
      formik.setFieldValue(`stock[${data?.index}].unitNumber`, searchValue);
      setUnits((previousState: any) => {
        return { ...previousState, unitNumber: searchValue };
      });
    }
  };
  useEffect(() => {
    const find = unitList.filter((item) => item.unitNumber === data?.barcode);
    if (find.length === 0 && data?.isEdit)
      setUnitList([
        {
          unitNumber: data?.barcode,
        },
      ]);
  }, [data]);

  return (
    <Slider
      buttonText="Add"
      handleChange={handleAdd}
      handleClose={handleClose}
      open={open}
      size="md"
      title={
        <Stack direction="row">
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
          <Stack direction="column" ml={1}>
            <Typography style={{ fontSize: 15, color: "#000" }}>
              {data?.productName}
            </Typography>
            <Typography style={{ fontSize: 13, color: "#333" }}>
              {data?.sku} / {data?.barcode}
            </Typography>
          </Stack>
        </Stack>
      }
    >
      <PerfectScrollbar>
        <Stack
          gap={2}
          sx={{
            marginTop: "10px",
            borderRadius: "5px",
          }}
        >
          <Card
            sx={{
              flex: 1,
            }}
          >
            <CustomCardContent title="Search Barcode">
              <Stack direction="row" gap={2}>
                <TextField
                  autoComplete="off"
                  endIcon={<SearchIcon />}
                  label="Search"
                  name="search"
                  size="small"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </Stack>
            </CustomCardContent>
            <CustomCardContent title="Unit List">
              <PerfectScrollbar>
                <Box sx={{ minWidth: "100%", minHeight: 500 }}>
                  <TableContainer component={Paper}>
                    <PerfectScrollbar>
                      <Table
                        sx={{
                          height: "100%",
                        }}
                      >
                        <TableHead>
                          <TableRow>
                            {tableTitle.map((item) => {
                              const isImage =
                                item.title.includes("Unit number");
                              return (
                                <CustomTableCell
                                  key={item.id}
                                  isHeader
                                  customStyle={{
                                    minWidth: 50,
                                    position: isImage ? "sticky" : "static",
                                  }}
                                >
                                  {item.title}
                                </CustomTableCell>
                              );
                            })}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {unitList.map((item, index) => {
                            return (
                              <UnitItem
                                formik={formik}
                                index={index}
                                item={item}
                                setUnit={setUnits}
                              />
                            );
                          })}
                        </TableBody>
                      </Table>
                    </PerfectScrollbar>
                  </TableContainer>
                </Box>
              </PerfectScrollbar>
            </CustomCardContent>
          </Card>
        </Stack>
      </PerfectScrollbar>
    </Slider>
  );
}

export default UnitSlider;
interface IStockItem {
  item?: IMenuItem;
  formik: FormikProps<any>;
  setUnit: Dispatch<SetStateAction<IUnits>>;
  index: number;
}
function UnitItem(props: IStockItem) {
  const { item, formik, setUnit, index } = props;
  const { productCondition: productConditionMenuItem } = useProductCondition();

  return (
    <TableRow>
      <TableCell
        sx={{
          minWidth: 100,
          width: 140,
        }}
      >
        <TextField
          darkDisable
          disabled
          label="Unit number"
          name="unitNumber"
          size="small"
          value={item?.unitNumber}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 60,
          width: 100,
          // background: "white",
        }}
      >
        <TextField
          darkDisable
          disabled
          label="Serial number"
          name={`stock[${index}].serialNumber`}
          size="small"
          value={formik.values.stock[index]?.serialNumber}
          onChange={(e) => {
            setUnit((previousState: any) => {
              return { ...previousState, serialNumber: e.target.value };
            });
            formik.setFieldValue(
              `stock[${index}].serialNumber`,
              e.target.value,
            );
          }}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 60,
          width: 100,
          // background: "white",
        }}
      >
        <TextField
          darkDisable
          label="Batch number"
          name={`stock[${index}].batchNumber`}
          size="small"
          type="number"
          value={formik.values.stock[index]?.batchNumber}
          onChange={(e) => {
            setUnit((previousState: any) => {
              return { ...previousState, batchNumber: e.target.value };
            });
            formik.setFieldValue(`stock[${index}].batchNumber`, e.target.value);
          }}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 60,
          width: 100,
          // background: "white",
        }}
      >
        <TextField
          darkDisable
          label="Quantity"
          name={`stock[${index}].quantity`}
          size="small"
          type="number"
          value={formik.values.stock[index]?.quantity}
          onChange={(e) => {
            setUnit((previousState: IUnits) => {
              return {
                ...previousState,
                quantity: Number(e.target.value),
              };
            });
            formik.setFieldValue(`stock[${index}].quantity`, e.target.value);
          }}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 60,
          width: 100,
        }}
      >
        <Box mb={1}>
          <AutoComplete
            getOptionLabel={(item: any) => item.value}
            handleChange={(e: any, value: any) => {
              setUnit((previousState: any) => {
                return { ...previousState, conditionCode: value.id };
              });
              formik.setFieldValue(`stock[${index}].conditionCodeId`, value.id);
            }}
            label="Condition code"
            options={productConditionMenuItem}
          />
        </Box>
      </TableCell>
    </TableRow>
  );
}
