import {
  Box,
  Checkbox,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import NOImage from "assets/images/no-image.png";
import { useAlert } from "components/alert";
import dateTimeFormat from "components/dateTime-format";
import TableActionButton from "components/table/TableActionButton";
import { FILE_URL } from "config";
import useProductAction from "hooks/actions/catalog/product/useProductAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedProductById } from "redux/catalog/productSelector";
import { setProductId } from "redux/catalog/productSlice";
import { RootState, useAppDispatch } from "redux/store";
import AppRoutes from "routes/appRoutes";
import { IGetProductResponseData } from "types/catalog/products/getProductResponse";

interface IProductItem {
  item: IGetProductResponseData;
}
function ProductItem(props: IProductItem) {
  const { item } = props;

  const alert = useAlert();
  const navigate = useNavigate();
  const getSelectedProductByIdState = useSelector((state: RootState) =>
    getSelectedProductById(state, item.id),
  );
  const dispatch = useAppDispatch();

  const { deleteProductAsync } = useProductAction();

  const select = () => {
    dispatch(setProductId(item.id));
  };

  const handleProductDelete = async () => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete Product",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: async () => {
        await deleteProductAsync(item.id);
        // refetch();
      },
    });
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
          minWidth: 150,
          position: "sticky",
          left: 130,
          zIndex: 999,
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`${AppRoutes.CATALOG.productDetail}/${item.id}`);
        }}
      >
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap",
          }}
        >
          {item.name}
        </Typography>
      </TableCell>
      <TableCell
        sx={{
          width: 150,
          position: "sticky",
          left: 0,
          // background: "white",
        }}
      >
        {/* inventory */}0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* variants count */}
        {item.variantCount}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* category */}
        {item.categoryName}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* brand */}
        {item.brandName}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* company */}Not Provided
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
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
                    paddingY: "4px",
                    margin: "2px",
                    fontSize: "11px",
                    fontWeight: "600",
                    width: "80px",
                    textAlign: "center",
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
          // background: "white",
        }}
      >
        {/* track SN */}
        {item.trackSerialNumbers === true ? "Yes" : "No"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* track expiry */}
        {item.trackExpiryDates === true ? "Yes" : "No"}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          whiteSpace: "nowrap",
          // background: "white",
        }}
      >
        {dateTimeFormat(item.updatedOn)}
      </TableCell>

      <TableCell
        sx={{
          position: "sticky",
          right: 0,
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            handleProductDelete();
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default ProductItem;
