import { Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useNavigate } from "react-router-dom";
import { IGetWarehouseResponseData } from "types/warehouse/getWarehouseResponse";

interface IWarehouseItem {
  item?: IGetWarehouseResponseData;
}

function WarehouseItem(props: IWarehouseItem) {
  const { item } = props;
  const navigate = useNavigate();
  const navigateDetails = `/${AppRoutes.warehouse.warehouseLayout}/${AppRoutes.warehouse.details}/${item?.id}/${AppRoutes.warehouse.generalDetails}`;
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
        <Checkbox checked={false} />
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
        <TableActionButton onDeleteHandle={() => {}} />
      </TableCell>
    </TableRow>
  );
}

export default WarehouseItem;
