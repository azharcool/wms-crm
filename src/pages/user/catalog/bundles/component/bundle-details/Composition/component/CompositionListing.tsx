import {
  Autocomplete,
  Box,
  DialogTitle,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import CustomTableCell from "components/table/CustomTableCell";
import NoDataTableRow from "components/table/no-data-table-row";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";
import CompositionItem from "./CompositionItem";
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
  isTrue: boolean;
  variantData?: IGetAllVariantResponseData[];
  bundleComp: any;
  bundleId?: number;
  values?: any;
  setFieldValue: any;
  handleChange: any;
}
const data = [
  {
    id: crypto.randomUUID(),
    name: "variant1",
  },
  {
    id: crypto.randomUUID(),
    name: "variant2",
  },
  {
    id: crypto.randomUUID(),
    name: "variant3",
  },
];

// function renderOption(option: any) {
//   return (
//    <Stack direction="row">
//     <Typography>
//       {option.variantName}
//     </Typography>
//     <Typography>
//       {option.sku}
//     </Typography>
//    </Stack>
//   );
// }

function CompositionListing(props: IComposition) {
  const {
    isTrue,
    variantData,
    bundleComp,
    bundleId,
    values,
    setFieldValue,
    handleChange,
  } = props;
  const [variants, setVariant] = useState<IGetAllVariantResponseData[]>([]);
  const handleVariant = (event: any, value: any) => {
    setVariant([...variants, value]);
  };
  // useEffect(() => {
  //   setVariant(bundleComp?.data);
  // });
  const renderOption = (props: any, option: any) => (
    <Stack direction="row" sx={{ m: 1 }}>
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
        <Typography>{option?.variantName}</Typography>
        <Typography color="text.secondary" fontSize={13}>
          {option?.sku}
        </Typography>
      </Stack>
    </Stack>
  );
  return (
    <PerfectScrollbar>
      <Box sx={{ minWidth: 850, minHeight: 500 }}>
        <DialogTitle variant="subtitle1">
          {isTrue ? "Line Items" : "Units"}
        </DialogTitle>
        {!isTrue && (
          <Grid xs={12}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={variantData || []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search by product name,SKU,barcode"
                />
              )}
              sx={{ m: 2 }}
              onChange={handleVariant}
              // renderOption={renderOption}
              getOptionLabel={(option: any) =>
                option?.variantName || option?.productName
              }
            />
          </Grid>
        )}
        <TableContainer component={Paper}>
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
                {!isTrue && (
                  <CustomTableCell isHeader isSticky rightValue={0}>
                    Actions
                  </CustomTableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {!isTrue ? (
                variants.map((variant) => {
                  return (
                    <CompositionItem
                      bundleComp={bundleComp}
                      bundleId={bundleId}
                      handleChange={handleChange}
                      isTrue={isTrue}
                      setFieldValue={setFieldValue}
                      values={values}
                      variantData={variant}
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
        </TableContainer>
      </Box>
    </PerfectScrollbar>
  );
}

export default CompositionListing;
