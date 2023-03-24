import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import useCategoriesAction from "hooks/catalog/categories/useCategoriesAction";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedCategoryById } from "redux/catalog/categorySelector";
import { setCategoryId } from "redux/catalog/categorySlice";
import { RootState, useAppDispatch } from "redux/store";
import { IGetCategoriesResponseData } from "types/catalog/catagories/getCategoriesResponse";

interface ICategoriesItem {
  item: IGetCategoriesResponseData;
}

function CategoriesItem(props: ICategoriesItem) {
  const { item } = props;
  const navigate = useNavigate();
  const { deleteCategoryAsync } = useCategoriesAction();
  const getSelectedCategoryByIdState = useSelector((state: RootState) =>
    getSelectedCategoryById(state, item.id),
  );

  const dispatch = useAppDispatch();

  const select = () => {
    dispatch(setCategoryId(item.id));
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
          // background: "white",
        }}
      >
        <Checkbox
          checked={getSelectedCategoryByIdState}
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
            src="https://app.storfox.com/d9f5ac726db86ff29f7b.png"
            width="100%"
          />
        </Box>
      </TableCell>

      <TableCell
        sx={{
          width: 200,
          position: "sticky",
          left: 130,
          zIndex: 999,
          // background: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`${AppRoutes.CATALOG.categoryDetail}/${item.id}`);
        }}
      >
        {item?.name}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
          // background: "white",
        }}
      >
        {item.position}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
          // background: "white",
        }}
      >
        {item.parentCategoryId}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
          // background: "white",
        }}
      >
        {/* <CustomSwitch /> */}
        {item.status}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
          // background: "white",
        }}
      >
        {item.updatedOn}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 200,
          // background: "white",
        }}
      >
        {item.tag}
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
            deleteCategoryAsync(item.id);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default CategoriesItem;
