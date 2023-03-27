import { Box, Checkbox, TableCell, TableRow } from "@mui/material";
import NOImage from "assets/images/no-image.png";
import TableActionButton from "components/table/TableActionButton";
import { FILE_URL } from "config";
import useCategoriesAction from "hooks/catalog/categories/useCategoriesAction";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedCategoryById } from "redux/catalog/categorySelector";
import { setCategoryId } from "redux/catalog/categorySlice";
import { RootState, useAppDispatch } from "redux/store";
import palette from "theme/palette";
import { IGetCategoriesResponseData } from "types/catalog/catagories/getCategoriesResponse";

interface ICategoriesItem {
  item: IGetCategoriesResponseData;
}

function CategoriesItem(props: ICategoriesItem) {
  const { item } = props;
  const navigate = useNavigate();
  const { deleteCategoryAsync } = useCategoriesAction();
  const newtheme = useSelector((state: any) => state.theme);
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
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
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
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
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
              item?.picture !== null
                ? `${FILE_URL}${item?.picture?.atachment}`
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
          width: 200,
          position: "sticky",
          left: 130,
          zIndex: 999,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
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
        {item.parentCategoryName}
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
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
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
