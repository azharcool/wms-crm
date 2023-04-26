import { Checkbox, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import useLocationAction from "hooks/actions/warehouse/location/useLocation";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";
import { GetAllLocationResponseData } from "types/warehouse/location/getAllLocationResponse";

interface ILocationListItem {
  item: GetAllLocationResponseData;
}

function LocationsListItem(props: ILocationListItem) {
  const { item } = props;

  const navigate = useNavigate();
  const { deleteLocationAction } = useLocationAction();

  const {
    warehouse: { warehouseLayout, locationsDetails },
  } = AppRoutes;

  const navigateDetails = `/${warehouseLayout}/${locationsDetails}/${item.id}`;
  return (
    <TableRow>
      <CustomBodyTableCell
        padding="checkbox"
        sxProps={{
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox checked={false} />
      </CustomBodyTableCell>

      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          left: 60,
          zIndex: 999,
        }}
        onClick={() => {
          navigate(navigateDetails);
        }}
      >
        <CustomTableText
          link
          text={item.locationAlias || item.locationLabel || "-"}
        />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item.areaName || "-"} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item.zoneName || "-"} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item.aisle || "-"} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item.rack || "-"} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item.shelf || "-"} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item.position || "-"} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        {item.status === 1 ? "Active" : "InActive"}
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item.operations || "-"} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item.warehouseName || "-"} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item.locationType || "-"} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item.locationAlias || "-"} />
      </CustomBodyTableCell>

      {/* container */}
      <CustomBodyTableCell>
        <CustomTableText text="" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        {/* Available */}
        <CustomTableText text="0" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={`${item.volume}` || "-"} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        {/* used volumn */}
        <CustomTableText text="-" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText
          text={`${item.length}x${item.width}x${item.height} cm` || "-"}
        />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={`${item.maxLoad}` || "-"} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        {/* used load */}
        <CustomTableText text="-" />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        {/* utilization */}
        <CustomTableText text="-" />
      </CustomBodyTableCell>

      <CustomBodyTableCell
        sxProps={{
          position: "sticky",
          right: 0,
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            deleteLocationAction(item.id, item.warehouseId);
          }}
        />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default LocationsListItem;
