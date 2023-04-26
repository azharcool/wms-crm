import { Box, Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TableActionButton from "components/table/TableActionButton";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import useUnitActions from "hooks/actions/catalog/useUnitActions";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";
import theme from "theme";
import { GetAllPaginationUnitResponseData } from "types/catalog/unit/getAllPaginationUnitResponse";

interface IUnitItem {
  item: GetAllPaginationUnitResponseData;
}
function UnitItem(props: IUnitItem) {
  const { item } = props;
  const navigate = useNavigate();
  const { deleteUnitAction } = useUnitActions();

  const goToDetails = () => {
    navigate(`${AppRoutes.CATALOG.unitHistory}/${item.unitNumber}`);
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
          checked={false}
          sx={{
            color: theme.palette.primary.darkBlue,
            "&.Mui-checked": {
              color: theme.palette.primary.darkBlue,
            },
          }}
          onChange={() => {}}
        />
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sxProps={{
          width: 50,
          position: "sticky",
          left: 60,
          zIndex: 999,
          cursor: "pointer",
        }}
        onClick={() => goToDetails()}
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
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sxProps={{
          width: 200,
          position: "sticky",
          zIndex: 999,
          left: 130,
        }}
      >
        <CustomTableText text={item?.variantName} />
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sxProps={{
          width: 200,
          position: "sticky",
          left: 0,
        }}
      >
        <CustomTableText text={item?.unitNumber} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.available} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.newQuantity} />
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
        <CustomTableText text={item?.price} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.warehouseName} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.locationName} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text="-" />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.createdOn} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.updatedOn} />
      </CustomBodyTableCell>
      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          right: 0,
          cursor: "pointer",
        }}
      >
        <TableActionButton
        // onDeleteHandle={() => {
        //   deleteUnitAction(item.id);
        // }}
        />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default UnitItem;
