import { Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import useWarehouseAreaAction from "hooks/warehouse/area/useWarehouseAreaAction";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "redux/store";
import { GetAllWarehouseAreaResponseData } from "types/warehouse/area/getAllWarehouseAreaResponse";
import { getSelectedAreaById } from "redux/warehouse/areaSelector";
import { setAreaId } from "redux/warehouse/areaSlice";

interface IAreaListItem {
  item: GetAllWarehouseAreaResponseData;
}
function AreaListItem(props: IAreaListItem) {
  const { item } = props;
  const navigate = useNavigate();
  const { deleteAreaActionAsync } = useWarehouseAreaAction();
  const {
    warehouse: { warehouseLayout, areasDetails },
  } = AppRoutes;

  const getSelectedAreaByIdState = useSelector((state: RootState) =>
    getSelectedAreaById(state, item.id),
  );

  const dispatch = useAppDispatch();

  const select = () => {
    dispatch(setAreaId(item.id));
  };
  const navigateDetails = `/${warehouseLayout}/${areasDetails}/${item.id}`;
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
        <Checkbox
          checked={getSelectedAreaByIdState}
          color="primary"
          onChange={select}
        />
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
        <TableActionButton
          onDeleteHandle={() => {
            deleteAreaActionAsync(item.id, item.warehouseId);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default AreaListItem;
