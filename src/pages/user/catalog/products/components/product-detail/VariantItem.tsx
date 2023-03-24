import { Box, TableCell, TableRow } from "@mui/material";
import CustomSwitch from "components/custom-switch";
import TextField from "components/textfield";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import { GetAllVariantByProductIdData } from "types/catalog/variants/getAllVariantByProductId";

const conditionCode = [
  {
    id: crypto.randomUUID(),
    value: "New",
  },
  {
    id: crypto.randomUUID(),
    value: "Old",
  },
];

interface IVariantItem {
  isTrue?: boolean;
  item: GetAllVariantByProductIdData;
}
function VariantItem(props: IVariantItem) {
  const { isTrue, item } = props;

  const navigate = useNavigate();
  const goToDetails = (id: string) => {
    navigate(`${AppRoutes.CATALOG.bundleDetails}/${id}`);
  };

  return (
    <>
      <TableRow>
        <TableCell
          sx={{
            width: 50,
            // background: "white",
          }}
          onClick={() => goToDetails("1")}
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
            width: 170,
            // background: "white",
          }}
        >
          {item?.optionName}
        </TableCell>

        <TableCell
          sx={{
            width: 120,
          }}
        >
          <TextField
            disabled={isTrue}
            id="SKU"
            label="SKU"
            name="SKU"
            size="small"
            value={item.sku}
            onChange={() => {}}
          />
        </TableCell>

        <TableCell
          sx={{
            width: 120,
          }}
        >
          <TextField
            disabled={isTrue}
            id="barcoe"
            label="Barcode"
            name="barcode"
            size="small"
            value={item.barcode}
            onChange={() => {}}
          />
        </TableCell>
        <TableCell
          sx={{
            width: 80,
          }}
        >
          <TextField
            disabled={isTrue}
            id="supplyPrice"
            label="INR"
            name="supplyPrice"
            size="small"
            value={item.supplyPrice}
            onChange={() => {}}
          />
        </TableCell>
        <TableCell
          sx={{
            width: 80,
          }}
        >
          <TextField
            disabled={isTrue}
            id="MRP"
            label="M.R.P"
            name="MRP"
            size="small"
            value={item.mrp}
            onChange={() => {}}
          />
        </TableCell>
        <TableCell
          sx={{
            width: 80,
          }}
        >
          <TextField
            disabled={isTrue}
            id="RetailPrice"
            label="Retail Price"
            name="RetailPrice"
            size="small"
            value={item.retailPrice}
            onChange={() => {}}
          />
        </TableCell>
        <TableCell
          sx={{
            width: 80,
          }}
        >
          <CustomSwitch checked={item.crossDocking} />
        </TableCell>
        <TableCell
          sx={{
            width: 80,
          }}
        >
          <CustomSwitch />
        </TableCell>
      </TableRow>
    </>
  );
}

export default VariantItem;
