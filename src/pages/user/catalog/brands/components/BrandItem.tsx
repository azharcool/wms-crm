import {
  Box,
  Checkbox,
  MenuItem,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import NOImage from "assets/images/no-image.png";
import { useAlert } from "components/alert";
import TableActionButton from "components/table/TableActionButton";
import { FILE_URL } from "config";
import useBrandAction from "hooks/catalog/brand/useBrandAction";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedBrandById } from "redux/catalog/brandSelector";
import { setBrandId } from "redux/catalog/brandSlice";
import { RootState, useAppDispatch } from "redux/store";
import { IGetBrandResponseData } from "types/catalog/brands/getBrandResponse";
import ManageBrand from "./ManageBrand";

interface IBrandItem {
  item: IGetBrandResponseData;
}

function BrandItem(props: IBrandItem) {
  const { item } = props;
  const [manageOpen, setManageOpen] = useState(false);

  const navigate = useNavigate();
  const alert = useAlert();
  const { deleteBrandAsync } = useBrandAction();
  const getSelectedBrandByIdState = useSelector((state: RootState) =>
    getSelectedBrandById(state, item.id),
  );
  const dispatch = useAppDispatch();

  const select = () => {
    dispatch(setBrandId(item.id));
  };

  const handleMange = () => {
    setManageOpen((s) => !s);
  };

  const handleBrandDelete = async () => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete Brand",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: async () => {
        await deleteBrandAsync(item?.id);
        // refetch();
      },
    });
  };

  return (
    <>
      <TableRow>
        <TableCell
          padding="checkbox"
          sx={{
            width: 60,
            // position: "sticky",
            // left: 0,
            // zIndex: 999,
            // background: "white",
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
            // background: "white",
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
                item?.fileUrl !== "" ? `${FILE_URL}${item?.fileUrl}` : NOImage
              }
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
            {/* <img
            alt="new"
            src={brandData.fileUrl}
            // src={brandData.fileName}
            width="100%"
          /> */}
          </Box>
        </TableCell>

        <TableCell
          sx={{
            width: "100%",
            // position: "sticky",
            // left: 130,
            // zIndex: 999,
            // background: "white",
          }}
          onClick={() => {
            handleMange();
            // navigate(`${AppRoutes.CATALOG.brandDetails}/${brandData.id}`);
          }}
        >
          <Typography sx={{ textDecoration: "underline" }}>
            {item.name || "-"}
          </Typography>
          {/* {brandData?.data.name} */}
          {/* {br} */}
        </TableCell>

        <TableCell
          sx={{
            position: "sticky",
            right: 0,
            // background: "white",
          }}
        >
          <TableActionButton
            onDeleteHandle={() => {
              // deleteProductAsync(brandData.id);
              handleBrandDelete();
            }}
          >
            <MenuItem
              disableRipple
              onClick={() => {
                handleMange();
              }}
            >
              Edit
            </MenuItem>
          </TableActionButton>
        </TableCell>
      </TableRow>
      {manageOpen ? (
        <ManageBrand
          view
          brandId={item.id}
          handleClose={handleMange}
          open={manageOpen}
        />
      ) : null}
    </>
  );
}

export default BrandItem;
