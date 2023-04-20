import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Card,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Stack } from "@mui/system";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import CustomTableCell from "components/table/CustomTableCell";
import TextField from "components/textfield";
import { FormikProps } from "formik";
import useVariant from "hooks/querys/catalog/variants/useVariant";
import { Dispatch, SetStateAction, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";

interface IListItem {
  open: boolean;
  handleClose: () => void;
  formik: FormikProps<any>;
  handleAdd: () => void;
  setVariants: Dispatch<SetStateAction<IGetAllVariantResponseData[]>>;
  variants: IGetAllVariantResponseData[];
}
const tableTitle = [
  {
    id: crypto.randomUUID(),
    title: "Image",
  },
  {
    id: crypto.randomUUID(),
    title: "Variant",
  },
  {
    id: crypto.randomUUID(),
    title: "Price",
  },
];

function BrowseStock(props: IListItem) {
  const { open, handleClose, handleAdd, setVariants, variants, formik } = props;

  const [search, setSearch] = useState("");

  const { variant } = useVariant();

  return (
    <Slider
      buttonText="Add"
      handleChange={() => {
        formik.handleChange({
          target: {
            name: "stock",
            value: variants,
          },
        });
        handleAdd();
      }}
      handleClose={handleClose}
      open={open}
      size="md"
      title="Browse Variants"
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
            <CustomCardContent title="Search Variants">
              <Stack direction="row" gap={2}>
                <TextField
                  endIcon={<SearchIcon />}
                  label="Search"
                  name="search"
                  size="small"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value.toLowerCase());
                  }}
                />
              </Stack>
            </CustomCardContent>
            <CustomCardContent title="Variant List">
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
                            <CustomTableCell
                              isCheck
                              isHeader
                              isSticky
                              customStyle={{
                                zIndex: 999,
                              }}
                              leftValue={0}
                            >
                              Select
                            </CustomTableCell>
                            {tableTitle.map((item) => {
                              const isImage = item.title.includes("Image");
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
                          {variant
                            .filter((i) =>
                              i.variantName?.toLowerCase().includes(search),
                            )
                            .map((item: IGetAllVariantResponseData) => {
                              return (
                                <StockItem
                                  item={item}
                                  setVariants={setVariants}
                                  variants={variants}
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

export default BrowseStock;
interface IStockItem {
  item: IGetAllVariantResponseData;
  setVariants: Dispatch<SetStateAction<IGetAllVariantResponseData[]>>;
  variants: IGetAllVariantResponseData[];
}
function StockItem(props: IStockItem) {
  const { item, setVariants, variants } = props;
  const select = () => {
    const findVariant = variants?.find((i) => i.id === item.id);
    if (findVariant) {
      const filterVariant = variants?.filter((i) => i.id !== item.id) || [];
      setVariants(filterVariant);
    } else {
      setVariants([...variants, item]);
    }
  };
  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          width: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox color="primary" onChange={select} />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 60,
          zIndex: 999,
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
          minWidth: 60,
          width: 100,
          // background: "white",
        }}
      >
        {item.variantName || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 60,
          width: 100,
          // background: "white",
        }}
      >
        {item.retailPrice || "-"}
      </TableCell>
    </TableRow>
  );
}
