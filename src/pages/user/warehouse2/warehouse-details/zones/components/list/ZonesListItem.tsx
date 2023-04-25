import { Checkbox, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import StatusTableCell from "components/table/status-table-cell";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import useZoneAction from "hooks/actions/warehouse/zone/useZoneAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";
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
  const { deleteZoneAction } = useZoneAction();
  const navigateDetails = `/${warehouseLayout}/${zonesDetails}/${item.id}`;
  return (
    <TableRow>
      <CustomBodyTableCell
        padding="checkbox"
        sx={{
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox checked={false} />
      </CustomBodyTableCell>

      <CustomBodyTableCell
        sx={{
          position: "sticky",
          left: "60px",
          zIndex: 999,

          cursor: "pointer",
        }}
        onClick={() => {
          navigate(navigateDetails);
        }}
      >
        <CustomTableText link text={item.name} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item.label} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item.warehouseName} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item.areaName} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <StatusTableCell
          success={item?.status !== 2}
          title={item?.status === 2 ? "InActive" : "Active"}
        />
      </CustomBodyTableCell>

      <CustomBodyTableCell
        sx={{
          position: "sticky",
          right: 0,
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            deleteZoneAction(item.id, item.warehouseId);
          }}
        />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default ZonesListItem;
