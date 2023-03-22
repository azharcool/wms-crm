import { Box, Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import { useAlert } from "components/alert";
import TableActionButton from "components/table/TableActionButton";
import useBrandAction from "hooks/catalog/brand/useBrandAction";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedBrandById } from "redux/catalog/brandSelector";
import { setBrandId } from "redux/catalog/brandSlice";
import { RootState, useAppDispatch } from "redux/store";
import { IGetBrandResponseData } from "types/catalog/brands/getBrandResponse";

interface IBrandItem {
  brandData: IGetBrandResponseData;
}

function BrandItem(props: IBrandItem) {
  const { brandData } = props;
  const navigate = useNavigate();
  const alert = useAlert();
  const { deleteBrandAsync } = useBrandAction();
  const getSelectedBrandByIdState = useSelector((state: RootState) =>
    getSelectedBrandById(state, brandData.id),
  );
  const dispatch = useAppDispatch();

  const select = () => {
    dispatch(setBrandId(brandData.id));
  };

  const handleBrandDelete = async () => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete Brand",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: async () => {
        await deleteBrandAsync(brandData?.id);
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
          // position: "sticky",
          // left: 0,
          // zIndex: 999,
          background: "white",
        }}
      >
        <Checkbox
          checked={getSelectedBrandByIdState}
          color="primary"
          onChange={select}
        />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          // position: "sticky",
          // left: 60,
          // zIndex: 999,
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
            // src={brandData.fileName}
            width="100%"
          />
        </Box>
      </TableCell>

      <TableCell
        sx={{
          width: "100%",
          // position: "sticky",
          // left: 130,
          // zIndex: 999,
          background: "white",
        }}
        onClick={() => {
          navigate(`${AppRoutes.CATALOG.brandDetails}/${brandData.id}`);
        }}
      >
        <Typography sx={{ textDecoration: "underline" }}>
          {brandData.name || "-"}
        </Typography>
        {/* {brandData?.data.name} */}
        {/* {br} */}
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
            // deleteProductAsync(brandData.id);
            handleBrandDelete();
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default BrandItem;
