import { Checkbox, MenuItem, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import ManageProductCondition from "../ManageProductCondition";

interface IProductConditionListItem {
  item?: any;
}

function ProductConditionListItem(props: IProductConditionListItem) {
  const { item } = props;
  const [manageOpen, setManageOpen] = useState(false);
  const newtheme = useSelector((state: any) => state.theme);

  const handleManage = () => {
    setManageOpen((s) => !s);
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
          {item?.name}
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
          {item?.code}
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
          {item?.details}
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
              // deleteProductAsync(brandData.id);
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
