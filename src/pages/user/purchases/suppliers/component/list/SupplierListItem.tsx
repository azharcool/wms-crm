import { Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import StatusTableCell from "components/table/status-table-cell";
import useSupplierAction from "hooks/actions/catalog/supplier/useSupplierAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedSupplierById } from "redux/purchase/supplierSelector";
import { setSupplierId } from "redux/purchase/supplierSlice";
import { RootState, useAppDispatch } from "redux/store";
import AppRoutes from "routes/appRoutes";
import palette from "theme/palette";
import { GetAllSupplierData } from "types/catalog/supplier/getAllSupplierResponse";

interface ISupplierListItem {
  item: GetAllSupplierData;
}

function SupplierListItem(props: ISupplierListItem) {
  const { item } = props;
  const navigate = useNavigate();
  const newtheme = useSelector((state: any) => state.theme);
  const { deleteSupplierAsync } = useSupplierAction();
  const getSelectedSupplierByIdState = useSelector((state: RootState) =>
    getSelectedSupplierById(state, item.id),
  );
  const dispatch = useAppDispatch();
  const select = () => {
    dispatch(setSupplierId(item.id));
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
          background: newtheme.isDarkMode
            ? "#26263D"
            : palette.background.default,
        }}
      >
        <Checkbox
          checked={getSelectedSupplierByIdState}
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
            deleteSupplierAsync(item?.id);
          }}
        />
      </TableCell>
    </TableRow>
  );
}

export default SupplierListItem;
