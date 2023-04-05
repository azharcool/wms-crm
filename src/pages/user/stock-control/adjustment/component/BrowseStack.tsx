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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CustomTableCell from "components/table/CustomTableCell";
import CustomCardContent from "components/card/CustomCardContent";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { useSelector } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import palette from "theme/palette";
import "react-perfect-scrollbar/dist/css/styles.css";
import useVariant from "hooks/querys/catalog/variants/useVariant";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";
import { Dispatch, SetStateAction } from "react";

interface IListItem {
  open: boolean;
  handleClose: () => void;
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
  const { open, handleClose, handleAdd, setVariants, variants } = props;
  const { variant } = useVariant();
  return (
    <Slider
      buttonText="Add"
      handleChange={handleAdd}
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
            <CustomCardContent title="">
              <Stack direction="row" gap={2}>
                <TextField
                  label="Search"
                  iconEnd
                  name="search"
                  icon={<SearchIcon />}
                  size="small"
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
                          {variant.map((item: IGetAllVariantResponseData) => {
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
  const newtheme = useSelector((state: any) => state.theme);
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
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
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
