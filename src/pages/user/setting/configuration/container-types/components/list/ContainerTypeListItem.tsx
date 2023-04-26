import { Box, Checkbox, MenuItem, TableRow } from "@mui/material";
import NOImage from "assets/images/no-image.png";
import TableActionButton from "components/table/TableActionButton";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import { FILE_URL } from "config";
import useProductConditionAction from "hooks/actions/setting/product-condition/useProductConditionAction";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { GetAllProductConditionPaginationResponseData } from "types/setting/product-condition/getAllProductConditionPaginationResponse";
// import ManageProductCondition from "../ManageProductCondition";
import { useTheme } from "@mui/material/styles";

interface IProductConditionListItem {
  item: GetAllProductConditionPaginationResponseData;
}

function ContainerTypeLIstItem(props: IProductConditionListItem) {
  const { item } = props;
  const [manageOpen, setManageOpen] = useState(false);
  const newtheme = useSelector((state: any) => state.theme);
  const { deleteProductConditionAction } = useProductConditionAction();
  const theme = useTheme();

  const handleManage = () => {
    setManageOpen((s) => !s);
  };

  const deleteHandle = async () => {
    await deleteProductConditionAction(item.id);
  };

  return (
    <>
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
            sx={{
              color: theme.palette.primary.darkBlue,
              "&.Mui-checked": {
                color: theme.palette.primary.darkBlue,
              },
            }}
          />
        </CustomBodyTableCell>

        <CustomBodyTableCell
          sxProps={{
            position: "sticky",
            left: 60,
            zIndex: 999,
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
            {/* image */}
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
        </CustomBodyTableCell>

        <CustomBodyTableCell
          sxProps={{
            cursor: "pointer",
          }}
          onClick={() => {
            handleManage();
            // navigate(`${AppRoutes.CATALOG.brandDetails}/${brandData.id}`);
          }}
        >
          <CustomTableText text="Default Container" />
        </CustomBodyTableCell>

        <CustomBodyTableCell>
          <CustomTableText text="-" />
        </CustomBodyTableCell>

        <CustomBodyTableCell>
          <CustomTableText text="-" />
        </CustomBodyTableCell>

        <CustomBodyTableCell>
          <CustomTableText text="-" />
        </CustomBodyTableCell>

        <CustomBodyTableCell>
          <CustomTableText text="-" />
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
        </CustomBodyTableCell>
      </TableRow>
      {/* {manageOpen ? (
        <ManageProductCondition
          view
          handleClose={handleManage}
          open={manageOpen}
          productConditionId={item?.id}
        />
      ) : null} */}
    </>
  );
}

export default ContainerTypeLIstItem;
