import {
  Box,
  Checkbox,
  MenuItem,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import NOImage from "assets/images/no-image.png";
import TableActionButton from "components/table/TableActionButton";
import { FILE_URL } from "config";
import useProductConditionAction from "hooks/setting/product-condition/useProductConditionAction";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import { GetAllProductConditionPaginationResponseData } from "types/setting/product-condition/getAllProductConditionPaginationResponse";
import ManageProductCondition from "../ManageProductCondition";

interface IProductConditionListItem {
  item: GetAllProductConditionPaginationResponseData;
}

function ProductConditionListItem(props: IProductConditionListItem) {
  const { item } = props;
  const [manageOpen, setManageOpen] = useState(false);
  const newtheme = useSelector((state: any) => state.theme);
  const { deleteProductConditionAction } = useProductConditionAction();

  const handleManage = () => {
    setManageOpen((s) => !s);
  };

  const deleteHandle = async () => {
    await deleteProductConditionAction(item.id);
  };

  return (
    <>
      <TableRow>
        <TableCell
          padding="checkbox"
          sx={{
            minWidth: 60,
            position: "sticky",
            left: 0,
            zIndex: 999,
            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
          }}
        >
          <Checkbox color="primary" />
        </TableCell>

        <TableCell
          sx={{
            minWidth: 150,
            position: "sticky",
            left: 60,
            zIndex: 999,
            background: newtheme.isDarkMode
              ? "#26263D"
              : palette.background.default,
            cursor: "pointer",
          }}
          onClick={() => {
            handleManage();
            // navigate(`${AppRoutes.CATALOG.brandDetails}/${brandData.id}`);
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
                item?.image !== "" && item.image !== "string"
                  ? `${FILE_URL}${item?.image}`
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
            // position: "sticky",
            // left: 60,
            // zIndex: 999,
            // background: newtheme.isDarkMode
            //   ? "#26263D"
            //   : palette.background.default,
            cursor: "pointer",
          }}
          onClick={() => {
            handleManage();
            // navigate(`${AppRoutes.CATALOG.brandDetails}/${brandData.id}`);
          }}
        >
          <Typography
            sx={{
              textDecoration: "underline",
              whiteSpace: "nowrap", //! Dont remove
            }}
          >
            {item?.code}
          </Typography>
        </TableCell>

        <TableCell
          sx={{
            minWidth: 150,
          }}
        >
          {item?.grade}
        </TableCell>

        <TableCell
          sx={{
            minWidth: 150,
          }}
        >
          {item?.condition}
        </TableCell>

        <TableCell
          sx={{
            minWidth: 150,
          }}
        >
          {item?.status}
        </TableCell>

        <TableCell
          sx={{
            minWidth: 150,
          }}
        >
          {item?.description}
        </TableCell>

        <TableCell
          sx={{
            minWidth: 150,
          }}
        >
          {item?.color}
        </TableCell>

        <TableCell
          sx={{
            minWidth: 150,
          }}
        >
          {item?.warranty}
        </TableCell>

        <TableCell
          sx={{
            position: "sticky",
            right: 0,
          }}
        >
          <TableActionButton
            onDeleteHandle={() => {
              deleteHandle();
            }}
          >
            <MenuItem
              disableRipple
              onClick={() => {
                handleManage();
              }}
            >
              Edit
            </MenuItem>
          </TableActionButton>
        </TableCell>
      </TableRow>
      {manageOpen ? (
        <ManageProductCondition
          view
          handleClose={handleManage}
          open={manageOpen}
          productConditionId={item?.id}
        />
      ) : null}
    </>
  );
}

export default ProductConditionListItem;
