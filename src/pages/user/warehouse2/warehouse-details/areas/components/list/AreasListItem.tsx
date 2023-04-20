import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import StatusTableCell from "components/table/status-table-cell";
import useWarehouseAreaAction from "hooks/actions/warehouse/area/useWarehouseAreaAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "redux/store";
import { getSelectedAreaById } from "redux/warehouse/areaSelector";
import { setAreaId } from "redux/warehouse/areaSlice";
import AppRoutes from "routes/appRoutes";
import { GetAllWarehouseAreaResponseData } from "types/warehouse/area/getAllWarehouseAreaResponse";

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
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          {item.name}
        </Typography>
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
        <StatusTableCell
          success={item?.status !== 2}
          title={item?.status === 2 ? "InActive" : "Active"}
        />
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
