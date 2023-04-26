import { Checkbox, TableRow } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TableActionButton from "components/table/TableActionButton";
import StatusTableCell from "components/table/status-table-cell";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
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
  const theme = useTheme();

  const navigateDetails = `/${AppRoutes.warehouse.warehouseLayout}/${AppRoutes.warehouse.details}/${item?.id}/${AppRoutes.warehouse.generalDetails}`;

  const select = () => {
    dispatch(setWarehouseId(item.id));
  };

  return (
    <TableRow>
      <CustomBodyTableCell
        padding="checkbox"
        sxProps={{
          minWidth: "60px",
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox
          checked={getSelectedWarehouseByIdState}
          onChange={select}
          sx={{
            color: theme.palette.primary.darkBlue,
            "&.Mui-checked": {
              color: theme.palette.primary.darkBlue,
            },
          }}
        />
      </CustomBodyTableCell>

      <CustomBodyTableCell
        sxProps={{
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
        <CustomTableText text={item?.warehouseName} link />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item?.label} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item?.city} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item?.email} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item?.phoneNumber} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <CustomTableText text={item?.primaryPhoneNumber} />
      </CustomBodyTableCell>

      <CustomBodyTableCell>
        <StatusTableCell
          success={item?.status !== 2}
          title={item?.status === 2 ? "InActive" : "Active"}
        />
      </CustomBodyTableCell>

      <CustomBodyTableCell
        sxProps={{
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
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default WarehouseItem;
