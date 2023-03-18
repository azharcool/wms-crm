import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import useProductAction from "hooks/catalog/product/useProductAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { getSelectedProductById } from "redux/catalog/productSelector";
import { setProductId } from "redux/catalog/productSlice";
import { RootState, useAppDispatch } from "redux/store";
import { IGetProductResponseData } from "types/catalog/products/getProductResponse";

interface IProductItem {
  item: IGetProductResponseData;
}
function ProductItem(props: IProductItem) {
  const { item } = props;
  const { deleteProductAsync } = useProductAction();
  const getSelectedProductByIdState = useSelector((state: RootState) =>
    getSelectedProductById(state, item.id),
  );

  const dispatch = useAppDispatch();

  const select = () => {
    dispatch(setProductId(item.id));
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
          background: "white",
        }}
      >
        <Checkbox
          checked={getSelectedProductByIdState}
          color="primary"
          onChange={select}
        />
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
        onClick={() => {
          // navigate(`${AppRoutes.CATALOG.productDetail}/${123}`);
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
        <TableActionButton
          onDeleteHandle={() => {
            deleteProductAsync(item.id);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default ProductItem;
