import { Box, Checkbox, Stack, TableCell, TableRow } from "@mui/material";
import NOImage from "assets/images/no-image.png";
import TableActionButton from "components/table/TableActionButton";
import { FILE_URL } from "config";
import useProductAction from "hooks/catalog/product/useProductAction";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedProductById } from "redux/catalog/productSelector";
import { setProductId } from "redux/catalog/productSlice";
import { RootState, useAppDispatch } from "redux/store";
import { IGetProductResponseData } from "types/catalog/products/getProductResponse";

interface IProductItem {
  item: IGetProductResponseData;
}
function ProductItem(props: IProductItem) {
  const { item } = props;
  const navigate = useNavigate();
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
            src={
              item?.picture.length > 0
                ? `${FILE_URL}${item?.picture[0]?.atachment}`
                : NOImage
            }
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
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
          navigate(`${AppRoutes.CATALOG.productDetail}/${item.id}`);
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
        {/* inventory */}0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* variants count */}
        {item.variantCount}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* category */}
        {item.categoryName}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* brand */}
        {item.brandName}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* company */}Not Provided
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* tags */}
        {item.tags && (
          <Stack flexDirection="row" flexWrap="wrap">
            {item.tags.split(",").map((tag) => {
              return (
                <Box
                  key={tag}
                  sx={{
                    borderRadius: "16px",
                    background: "#fbdeba",
                    color: "#8f391c",
                    padding: "4px 8px",
                    margin: "2px",
                    fontSize: "12px",
                  }}
                >
                  {tag}
                </Box>
              );
            })}
          </Stack>
        )}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* track SN */}
        {item.trackSerialNumbers === true ? "Yes" : "No"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          background: "white",
        }}
      >
        {/* track expiry */}
        {item.trackExpiryDates === true ? "Yes" : "No"}
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
