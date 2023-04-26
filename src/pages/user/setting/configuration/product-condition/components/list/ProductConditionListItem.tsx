import { Box, Checkbox, MenuItem, TableRow, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NOImage from "assets/images/no-image.png";
import TableActionButton from "components/table/TableActionButton";
import StatusTableCell from "components/table/status-table-cell";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import { FILE_URL } from "config";
import useProductConditionAction from "hooks/actions/setting/product-condition/useProductConditionAction";
import { useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { GetAllProductConditionPaginationResponseData } from "types/setting/product-condition/getAllProductConditionPaginationResponse";
import ManageProductCondition from "../ManageProductCondition";

interface IProductConditionListItem {
  item: GetAllProductConditionPaginationResponseData;
}

function ProductConditionListItem(props: IProductConditionListItem) {
  const { item } = props;

  const [manageOpen, setManageOpen] = useState(false);

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
          sx={{
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
          sx={{
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
          sx={{
            cursor: "pointer",
          }}
          onClick={() => {
            handleManage();
          }}
        >
          <Typography
            sx={{
              textDecoration: "underline",
              whiteSpace: "nowrap", //! Dont remove
            }}
          >
            <CustomTableText text={item?.code} />
          </Typography>
        </CustomBodyTableCell>

        <CustomBodyTableCell>
          <CustomTableText text={item?.grade} />
        </CustomBodyTableCell>

        <CustomBodyTableCell>
          <CustomTableText text={item?.condition} />
        </CustomBodyTableCell>

        <CustomBodyTableCell>
          <StatusTableCell
            success={item?.status !== 2}
            title={item?.status === 2 ? "InActive" : "Active"}
          />
        </CustomBodyTableCell>

        <CustomBodyTableCell>
          <CustomTableText text={item?.description} />
        </CustomBodyTableCell>

        <CustomBodyTableCell>
          <CustomTableText text={item?.color} />
        </CustomBodyTableCell>

        <CustomBodyTableCell>
          <CustomTableText text={item?.warranty} />
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
