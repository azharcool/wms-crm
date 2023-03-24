import { Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import useWarehouseAction from "hooks/warehouse/useWarehouseAction";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "redux/store";
import { getSelectedWarehouseById } from "redux/warehouse/warehouseSelector";
import { setWarehouse, setWarehouseId } from "redux/warehouse/warehouseSlice";
import { IGetWarehouseResponseData } from "types/warehouse/getWarehouseResponse";

interface IWarehouseItem {
  item: IGetWarehouseResponseData;
}

function WarehouseItem(props: IWarehouseItem) {
  const { item } = props;
  const { deleteWarehouseAsync } = useWarehouseAction();
  const navigate = useNavigate();
  const navigateDetails = `/${AppRoutes.warehouse.warehouseLayout}/${AppRoutes.warehouse.details}/${item?.id}/${AppRoutes.warehouse.generalDetails}`;
  const getSelectedWarehouseByIdState = useSelector((state: RootState) =>
    getSelectedWarehouseById(state, item.id),
  );
  const dispatch = useAppDispatch();
  const select = () => {
    dispatch(setWarehouseId(item.id));
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
          background: "white",
        }}
      >
        <Checkbox
          checked={getSelectedWarehouseByIdState}
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
          background: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch(
            setWarehouse({
              id: item?.id || 0,
              name: item?.warehouseName || "",
            }),
          );
          navigate(navigateDetails);
        }}
      >
        {item?.warehouseName}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          position: "sticky",
          // left: 169,
          // background: "white",
        }}
      >
        {item?.label}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item?.city}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item?.email}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item?.phoneNumber}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item?.primaryPhoneNumber}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item?.status}
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          position: "sticky",
          right: 0,
          background: "white",
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            deleteWarehouseAsync(item?.id);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default WarehouseItem;
