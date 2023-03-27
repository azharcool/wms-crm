import { Box, Checkbox, Stack, TableCell, TableRow } from "@mui/material";
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
        {item.status === 2 ? (
          <Box
            sx={{
              borderRadius: "5px",
              background: "#fff5f8",
              color: "#f1416c",
              padding: "4px 6.5px",
              display: "inline-flex",
              fontSize: "11px",
              fontWeight: "600",
            }}
          >
            Inactive
          </Box>
        ) : (
          <Box
            sx={{
              borderRadius: "5px",
              background: "#e8fff3",
              color: "#50cd89",
              padding: "4px 6.5px",
              display: "inline-flex",
              fontSize: "11px",
              fontWeight: "600",
            }}
          >
            Active
          </Box>
        )}
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
        {item.tag && (
          <Stack flexDirection="row" flexWrap="wrap">
            {item.tag.split(",").map((tag) => {
              return (
                <Box
                  key={tag}
                  sx={{
                    borderRadius: "16px",
                    background: "#fbdeba",
                    color: "#8f391c",
                    padding: "4px 8px",
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
