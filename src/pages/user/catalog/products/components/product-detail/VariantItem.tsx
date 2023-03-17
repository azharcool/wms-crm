import { Box, TableCell, TableRow } from "@mui/material";
import CustomSwitch from "components/custom-switch";
import TextField from "components/textfield";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";

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
}
function VariantItem(props: IVariantItem) {
  const { isTrue } = props;
  const navigate = useNavigate();
  const goToDetails = (id: string) => {
    navigate(`${AppRoutes.CATALOG.bundleDetails}/${id}`);
  };

  return (
    <TableRow>
      <TableCell
        sx={{
          width: 50,
          background: "white",
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
          background: "white",
        }}
      >
        VariantValue
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
          value="AZHART-762"
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
          id="discount"
          label="discount"
          name="discount"
          size="small"
          value="4773400814241"
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
          value="0"
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
          value="0"
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
          value="0"
          onChange={() => {}}
        />
      </TableCell>
      <TableCell
        sx={{
          width: 80,
        }}
      >
        <CustomSwitch />
      </TableCell>
      <TableCell
        sx={{
          width: 80,
        }}
      >
        <CustomSwitch />
      </TableCell>
    </TableRow>
  );
}

export default VariantItem;
