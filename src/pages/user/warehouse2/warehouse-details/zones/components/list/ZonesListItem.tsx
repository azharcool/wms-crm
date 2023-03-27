import { Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import useZoneAction from "hooks/warehouse/zone/useZoneAction";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import { GetAllZoneResponseData } from "types/warehouse/zone/getAllZoneResponse";

interface IZonesListItem {
  item: GetAllZoneResponseData;
}
function ZonesListItem(props: IZonesListItem) {
  const { item } = props;
  const navigate = useNavigate();
  const {
    warehouse: { warehouseLayout, zonesDetails },
  } = AppRoutes;
  const {deleteZoneAction} = useZoneAction();
  const navigateDetails = `/${warehouseLayout}/${zonesDetails}/${item.id}`;
  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
          // background: "white",
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
          // background: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(navigateDetails);
        }}
      >
        {item.name}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item.label}
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
        {item.areaName}
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
          position: "sticky",
          right: 0,
          // background: "white",
        }}
      >
        <TableActionButton onDeleteHandle={() => {
          deleteZoneAction(item.id, item.warehouseId)
        }} />
      </TableCell>
    </TableRow>
  );
}

export default ZonesListItem;
