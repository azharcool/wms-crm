import { Checkbox, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import StatusTableCell from "components/table/status-table-cell";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
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
      <CustomBodyTableCell
        padding="checkbox"
        sxProps={{
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox
          checked={getSelectedAreaByIdState}
          color="primary"
          onChange={select}
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
            deleteAreaActionAsync(item.id, item.warehouseId);
          }}
        />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default AreaListItem;
