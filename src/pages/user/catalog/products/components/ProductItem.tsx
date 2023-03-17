import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import "react-perfect-scrollbar/dist/css/styles.css";
import { IGetProductResponseData } from "types/catalog/products/getProductResponse";

interface IProductItem {
  item: IGetProductResponseData;
}
function ProductItem(props: IProductItem) {
  const { item } = props;
  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          width: 60,
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
        }}
      >
        {item.name}
      </TableCell>
      <TableCell
        sx={{
          width: 150,
          position: "sticky",
          left: 0,
          background: "white",
        }}
      >
        {/* inventory */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* variants count */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* category */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* brand */}-
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* company */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* tags */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* track SN */}
        {item.trackSerialNumbers || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* track expiry */}
        {item.trackExpiryDates || "-"}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* last updated  */}
        {item.updatedOn || "-"}
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

export default ProductItem;
