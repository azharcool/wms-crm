import { Stack } from "@mui/system";
import {
  Card,
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CustomTableCell from "components/table/CustomTableCell";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "redux/store";
import React, { Dispatch, SetStateAction, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import palette from "theme/palette";
import "react-perfect-scrollbar/dist/css/styles.css";
import AutoComplete from "components/textfield/AutoComplete";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";
import useProductCondition from "hooks/setting/product-condition/useProductCondition";
import { FormikProps } from "formik";
import { IUnits } from "./AdjustmentCreate";

interface IListItem {
  open: boolean;
  handleClose: () => void;
  handleAdd: () => void;
  data?: IGetAllVariantResponseData;
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

      setUnits((previousState: any) => {
        return { ...previousState, unitNumber: searchValue };
      });
    }
  };

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
              {data?.sku}/{data?.barcode}
            </Typography>
          </Stack>
        </Stack>
      }
      //   isSubmitting={isSubmitting}
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
            <CustomCardContent title="">
              <Stack direction="row" gap={2}>
                <TextField
                  label="Search"
                  iconEnd
                  name="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  icon={<SearchIcon />}
                  size="small"
                  onKeyDown={handleKeyDown}
                />
              </Stack>
            </CustomCardContent>
            <CustomCardContent title="">
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
                          {unitList.map((item) => {
                            return (
                              <UnitItem
                                item={item}
                                formik={formik}
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
}
function UnitItem(props: IStockItem) {
  const newtheme = useSelector((state: any) => state.theme);
  const { item, formik, setUnit } = props;
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
          name="serialNumber"
          size="small"
          // value={values.totalQuantity}
          onChange={(e) => {
            setUnit((previousState: any) => {
              return { ...previousState, serialNumber: e.target.value };
            });
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
          type="number"
          name="batchNumber"
          size="small"
          onChange={(e) => {
            setUnit((previousState: any) => {
              return { ...previousState, batchNumber: e.target.value };
            });
          }}
          // value={values.totalQuantity}
          // onChange={handleChange("totalQuantity")}
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
          type="number"
          darkDisable
          label="Quantity"
          name="quantity"
          size="small"
          onChange={(e) => {
            setUnit((previousState: IUnits) => {
              return {
                ...previousState,
                quantity: Number(e.target.value),
              };
            });
          }}
          // value={values.totalQuantity}
          // onChange={handleChange("totalQuantity")}
        />
      </TableCell>
      <TableCell
        sx={{
          minWidth: 60,
          width: 100,
          // background: "white",
        }}
      >
        <Box mb={1}>
          <AutoComplete
            getOptionLabel={(item: any) => item.value}
            label="Condition code"
            options={productConditionMenuItem}
            handleChange={(e: any, value: any) =>
              setUnit((previousState: any) => {
                return { ...previousState, conditionCode: value.id };
              })
            }
          />
        </Box>
      </TableCell>
    </TableRow>
  );
}
