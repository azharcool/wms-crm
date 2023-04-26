import {
  Box,
  Checkbox,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NOImage from "assets/images/no-image.png";
import { useAlert } from "components/alert";
import TableActionButton from "components/table/TableActionButton";
import StatusTableCell from "components/table/status-table-cell";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
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
  const theme = useTheme();

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
      <CustomBodyTableCell
        padding="checkbox"
        sxProps={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox
          checked={getSelectedCategoryByIdState}
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
          position: "sticky",
          left: 60,
          zIndex: 999,
          cursor: "pointer",
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
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sxProps={{
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
        <CustomTableText text={item?.name} link />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.position} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.parentCategoryName} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <StatusTableCell
          success={item?.status !== 2}
          title={item?.status === 2 ? "InActive" : "Active"}
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.updatedOn} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>

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
                  <CustomTableText text={tag} />
                </Box>
              );
            })}
          </Stack>
        )}
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
            handleCategoriesDelete();
          }}
        />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default CategoriesItem;
function deleteAdjustmentReasonAction(arg0: number) {
  throw new Error("Function not implemented.");
}
