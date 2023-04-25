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
import TableActionButton from "components/table/TableActionButton";
import StatusTableCell from "components/table/status-table-cell";
import { FILE_URL } from "config";
import useCategoriesAction from "hooks/actions/catalog/categories/useCategoriesAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedCategoryById } from "redux/catalog/categorySelector";
import { setCategoryId } from "redux/catalog/categorySlice";
import { RootState, useAppDispatch } from "redux/store";
import AppRoutes from "routes/appRoutes";
import { IGetCategoriesResponseData } from "types/catalog/catagories/getCategoriesResponse";

interface ICategoriesItem {
  item: IGetCategoriesResponseData;
}

function CategoriesItem(props: ICategoriesItem) {
  const { item } = props;

  const getSelectedCategoryByIdState = useSelector((state: RootState) =>
    getSelectedCategoryById(state, item.id),
  );
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useAppDispatch();

  const { deleteCategoryAsync } = useCategoriesAction();

  const select = () => {
    dispatch(setCategoryId(item.id));
  };

  const handleCategoriesDelete = async () => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete Categories",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: async () => {
        await deleteCategoryAsync(item.id);
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
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`${AppRoutes.CATALOG.categoryDetail}/${item.id}`);
        }}
      >
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          {item?.name}
        </Typography>
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
        <StatusTableCell
          success={item?.status !== 2}
          title={item?.status === 2 ? "InActive" : "Active"}
        />
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
          position: "sticky",
          right: 0,
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            handleCategoriesDelete();
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default CategoriesItem;
function deleteAdjustmentReasonAction(arg0: number) {
  throw new Error("Function not implemented.");
}
