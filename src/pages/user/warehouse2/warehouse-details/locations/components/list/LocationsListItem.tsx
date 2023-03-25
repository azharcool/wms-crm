import { Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import useLocationAction from "hooks/warehouse/location/useLocation";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";
import { GetAllLocationResponseData } from "types/warehouse/location/getAllLocationResponse";

interface ILocationListItem {
  item: GetAllLocationResponseData;
}

function LocationsListItem(props: ILocationListItem) {
  const { item } = props;
  const navigate = useNavigate();
  const newtheme = useSelector((state: any) => state.theme);
  const { deleteLocationAction } = useLocationAction();
  const {
    warehouse: { warehouseLayout, locationsDetails },
  } = AppRoutes;
  const navigateDetails = `/${warehouseLayout}/${locationsDetails}/${item.id}`;
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
        <Checkbox checked={false} />
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
        }}
        onClick={() => {
          navigate(navigateDetails);
        }}
      >
        {item.areaName}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          position: "sticky",
          // left: 169,
          // background: "white",
        }}
      >
        {item.areaName}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item.zoneName}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item.aisle || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* bay */}-
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* level */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* bin */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item.status === 1 ? "Active" : "InActive"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* operation */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item.warehouseName}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item.locationType}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item.locationAlias || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* company */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* container */}0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* available */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* use volumn */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* dimensions */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item.maxLoad}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* used load */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* utilization */}0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          position: "sticky",
          right: 0,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            deleteLocationAction(item.id, item.warehouseId);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default LocationsListItem;
