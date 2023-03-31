import {
  Box,
  DialogTitle,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomAutoComplete, {
  IAutoCompleteOption,
} from "components/auto-complete/CustomAutoComplete";
import CustomTableCell from "components/table/CustomTableCell";
import NoDataTableRow from "components/table/no-data-table-row";
import { Dispatch, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";
import { BundleList } from "..";
import CompositionItem, { SetBundleItemParam } from "./CompositionItem";
// import TableMessage from "components/table-message";

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
    title: "Unit price",
  },
  {
    id: crypto.randomUUID(),
    title: "Condition code",
  },
  {
    id: crypto.randomUUID(),
    title: "Discount",
  },
  {
    id: crypto.randomUUID(),
    title: "Qty",
  },
  {
    id: crypto.randomUUID(),
    title: "Total",
  },
];
interface IComposition {
  variantData?: IGetAllVariantResponseData[];
  isManage: boolean;
  bundleCompositionList: BundleList;
  setBundleCompositionList: Dispatch<React.SetStateAction<BundleList>>;
}

function CompositionListing(props: IComposition) {
  const {
    variantData,
    bundleCompositionList,
    setBundleCompositionList,
    isManage,
  } = props;

  const [inputValue, setInputValue] = useState("");

  const setValueHandler = (newValue: IAutoCompleteOption | null): void => {
    if (!newValue || !variantData) return;

    const findVariant = variantData.find((i) => i.id === Number(newValue.id));

    if (!findVariant) return;

    setBundleCompositionList((s) => [
      ...s,
      {
        id: s.length + 1,
        conditionCode: "",
        discount: 0,
        qty: 1,
        total: 0,
        unitPrice: 0,
        productId: findVariant?.productId || 0,
        productName: findVariant?.productName || "",
        productVariantId: findVariant?.id || 0,
        productVariantName: findVariant?.variantName || "",
        image: "",
        sku: findVariant?.sku || "",
      },
    ]);
  };

  const setBundleItem = (params: SetBundleItemParam) => {
    const { id, name, value } = params;
    const newBundleComposition = bundleCompositionList.map((item) => {
      if (item.id === id) {
        //
        return {
          ...item,
          [name]: value,
        };
      }
      return item;
    });
    setBundleCompositionList(newBundleComposition);
  };

  const variantOptions =
    variantData?.map((item) => ({
      id: String(item.id),
      label: item.productName || item.variantName || "",
    })) || [];

  return (
    <PerfectScrollbar>
      <Box sx={{ minWidth: 850, minHeight: 500 }}>
        <DialogTitle variant="subtitle1">
          {isManage ? "Line Items" : "Units"}
        </DialogTitle>
        {isManage ? (
          <Stack>
            <CustomAutoComplete
              id="variant-options"
              inputlabel="Search by product name,SKU,barcode"
              inputValue={inputValue}
              options={variantOptions}
              setInputValue={(e) => {
                setInputValue(e);
              }}
              setValue={setValueHandler}
            />
          </Stack>
        ) : null}
        <TableContainer
          component={Paper}
          sx={{
            marginTop: "5px",
          }}
        >
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
                    const isProduct = item.title.includes("Product");
                    return (
                      <CustomTableCell
                        key={item.id}
                        isHeader
                        customStyle={{
                          minWidth: isImage ? 50 : 200,
                          position: isImage || isProduct ? "sticky" : "static",
                          left: isImage || isProduct ? (isProduct ? 60 : 0) : 0,
                        }}
                      >
                        {item.title}
                      </CustomTableCell>
                    );
                  })}
                  {isManage && (
                    <CustomTableCell isHeader isSticky rightValue={0}>
                      Actions
                    </CustomTableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {bundleCompositionList.length > 0 ? (
                  bundleCompositionList.map((item) => {
                    return (
                      <CompositionItem
                        isManage={isManage}
                        item={item}
                        setBundleItem={setBundleItem}
                      />
                    );
                  })
                ) : (
                  <NoDataTableRow
                    colSize={7}
                    title="Please click Edit Buton then search for the Composition Item"
                  />
                )}
              </TableBody>
            </Table>
          </PerfectScrollbar>
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default CompositionListing;
