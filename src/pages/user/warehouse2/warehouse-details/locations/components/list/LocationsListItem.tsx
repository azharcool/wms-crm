import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
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
      <TableCell
        padding="checkbox"
        sx={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
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
        }}
        onClick={() => {
          navigate(navigateDetails);
        }}
      >
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          {item.locationAlias || item.locationLabel || "-"}
        </Typography>
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          position: "sticky",
          // left: 169,
          // background: "white",
        }}
      >
        {item.areaName || "-"}
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
        {item.rack || "-"}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item.shelf || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item.position || "-"}
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
        {item.operations || "-"}
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
        {item.locationType || "-"}
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
        {/* container */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* Available */}0
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {`${item.volume}` || "-"}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* used volumn */}-
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {`${item.length}x${item.width}x${item.height} cm` || "-"}
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
