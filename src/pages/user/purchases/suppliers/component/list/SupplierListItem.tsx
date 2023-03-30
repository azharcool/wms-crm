import { Checkbox, TableCell, TableRow } from "@mui/material";
import StatusTableCell from "components/table/status-table-cell";
import TableActionButton from "components/table/TableActionButton";
import AppRoutes from "navigation/appRoutes";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";
import { GetAllSupplierData } from "types/catalog/supplier/getAllSupplierResponse";

interface ISupplierListItem {
  item: GetAllSupplierData;
}

function SupplierListItem(props: ISupplierListItem) {
  const { item } = props;
  const navigate = useNavigate();
  const newtheme = useSelector((state: any) => state.theme);

  return (
    <TableRow>
      <TableCell
        padding="checkbox"
        sx={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
        }}
      >
        <Checkbox color="primary" />
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          position: "sticky",
          left: 60,
          zIndex: 999,
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(
            `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplier.details}/${item.id}/${AppRoutes.purchases.supplier.generalDetails}`,
          );
        }}
      >
        {item?.companyName}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // left: 169,
          // background: "white",
        }}
      >
        {item?.shortName}
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {item?.id}
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
        {item?.firstName} {item?.lastName}
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
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
          cursor: "pointer",
        }}
      >
        <TableActionButton
          onDeleteHandle={() => {
            // deleteWarehouseAsync(item?.id);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default SupplierListItem;
