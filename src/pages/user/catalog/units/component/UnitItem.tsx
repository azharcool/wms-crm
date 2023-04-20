import { Box, Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import useUnitActions from "hooks/actions/catalog/useUnitActions";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";
import palette from "theme/palette";
import { GetAllPaginationUnitResponseData } from "types/catalog/unit/getAllPaginationUnitResponse";

interface IUnitItem {
  item: GetAllPaginationUnitResponseData;
}
function UnitItem(props: IUnitItem) {
  const { item } = props;
  const navigate = useNavigate();
  const newtheme = useSelector((state: any) => state.theme);
  const { deleteUnitAction } = useUnitActions();

  const goToDetails = () => {
    navigate(`${AppRoutes.CATALOG.unitHistory}/${item.unitNumber}`);
  };

  return (
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
        <Checkbox checked={false} color="primary" onChange={() => {}} />
      </TableCell>
      <TableCell
        sx={{
          width: 50,
          position: "sticky",
          left: 60,
          zIndex: 999,
          cursor: "pointer",
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
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
      </TableCell>
      <TableCell
        sx={{
          width: 200,
          position: "sticky",
          zIndex: 999,
          left: 130,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
        }}
      >
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap",
          }}
        >
          {item.variantName}
        </Typography>
      </TableCell>
      <TableCell
        sx={{
          width: 200,
          position: "sticky",
          left: 0,
        }}
      >
        {item.unitNumber}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {item.available}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {item.newQuantity}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {/* UOM */}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>{" "}
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>{" "}
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {item.price} -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {item.warehouseName}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {item.locationName}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        -
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {item.createdOn}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 200,
        }}
      >
        {item.updatedOn}
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
        // onDeleteHandle={() => {
        //   deleteUnitAction(item.id);
        // }}
        />
      </TableCell>
    </TableRow>
  );
}

export default UnitItem;
