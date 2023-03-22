import {
  Box,
  Checkbox,
  TableCell,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import AppRoutes from "navigation/appRoutes";
import { useNavigate } from "react-router-dom";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";
// import "react-perfect-scrollbar/dist/css/styles.css";

interface IVariantItem {
  item: IGetAllVariantResponseData;
}

function VariantItem(props: IVariantItem) {
  const { item } = props;
  const navigate = useNavigate();

  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
          background: "white",
        }}
      >
        <Checkbox checked={false} color="primary" onChange={() => {}} />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 60,
          zIndex: 999,
          background: "white",
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
          width: 150,
          position: "sticky",
          left: 130,
          zIndex: 999,
          background: "white",
          cursor: "pointer",
        }}
      >
        <Box
          onClick={() => {
            navigate(`${AppRoutes.CATALOG.variantsDetails}/${item.id}`);
          }}
        >
          <Tooltip title="TshirtXXL">
            <Typography sx={{ textDecoration: "underline" }}>
              {item.optionName}
            </Typography>
          </Tooltip>
        </Box>
        <Typography>{item.sku}</Typography>
      </TableCell>
      <TableCell
        sx={{
          width: 150,
          position: "sticky",
          left: 0,
          background: "white",
        }}
      >
        {/* Pieces */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {/* UoM */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {item.barcode}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {/* listed on */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>

      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        INR {item.supplyPrice}.00
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        INR {item.retailPrice}.00
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        INR {item.mrp}.00
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      />
      <TableCell
        sx={{
          minWidth: 200,
        }}
      />
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        azhar
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      />
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        Mar 14, 2023 14:40:35
      </TableCell>
      <TableCell
        sx={{
          position: "sticky",
          right: 0,
          background: "white",
        }}
      >
        <TableActionButton />
      </TableCell>
    </TableRow>
  );
}

export default VariantItem;
