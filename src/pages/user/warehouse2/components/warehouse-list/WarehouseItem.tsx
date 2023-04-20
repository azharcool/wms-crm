import { Checkbox, TableCell, TableRow, Typography } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import StatusTableCell from "components/table/status-table-cell";
import useWarehouseAction from "hooks/actions/warehouse/useWarehouseAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch } from "redux/store";
import { getSelectedWarehouseById } from "redux/warehouse/warehouseSelector";
import { setWarehouse, setWarehouseId } from "redux/warehouse/warehouseSlice";
import AppRoutes from "routes/appRoutes";
import { IGetWarehouseResponseData } from "types/warehouse/getWarehouseResponse";

interface IWarehouseItem {
  item: IGetWarehouseResponseData;
}

function WarehouseItem(props: IWarehouseItem) {
  const { item } = props;

  const { deleteWarehouseAsync } = useWarehouseAction();
  const navigate = useNavigate();
  const getSelectedWarehouseByIdState = useSelector((state: RootState) =>
    getSelectedWarehouseById(state, item.id),
  );
  const dispatch = useAppDispatch();

  const navigateDetails = `/${AppRoutes.warehouse.warehouseLayout}/${AppRoutes.warehouse.details}/${item?.id}/${AppRoutes.warehouse.generalDetails}`;

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
        <Typography
          sx={{
            textDecoration: "underline",
            whiteSpace: "nowrap", //! Dont remove
          }}
        >
          {item?.warehouseName}
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

          cursor: "pointer",
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
