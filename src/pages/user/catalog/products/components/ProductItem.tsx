import { Box, Checkbox, Stack, TableRow } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NOImage from "assets/images/no-image.png";
import { useAlert } from "components/alert";
import dateTimeFormat from "components/dateTime-format";
import TableActionButton from "components/table/TableActionButton";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
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
  const theme = useTheme();
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
      <CustomBodyTableCell
        padding="checkbox"
        sxProps={{
          minWidth: "50px",
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox
          checked={getSelectedProductByIdState}
          sx={{
            color: theme.palette.primary.darkBlue,
            "&.Mui-checked": {
              color: theme.palette.primary.darkBlue,
            },
          }}
          onChange={select}
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sxProps={{
          width: "50px",
          position: "sticky",
          left: "60px",
          zIndex: 999,
          cursor: "pointer",
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
            width: "40px",
            height: "40px",
            objectFit: "cover",
            borderRadius: "5px",
          }}
        />
      </CustomBodyTableCell>

      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          left: "150px",
          zIndex: 999,
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`${AppRoutes.CATALOG.productDetail}/${item.id}`);
        }}
      >
        <CustomTableText text={item.name} link />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="inventory" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.variantCount} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.categoryName} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.brandName} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text="not provided" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
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
                  <CustomTableText text="knd" />
                </Box>
              );
            })}
          </Stack>
        )}
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText
          text={item.trackSerialNumbers === true ? "Yes" : "No"}
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item.trackExpiryDates === true ? "Yes" : "No"} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={dateTimeFormat(item.updatedOn)} />
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          right: 0,
          cursor: "pointer",
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            handleProductDelete();
          }}
        />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default ProductItem;
