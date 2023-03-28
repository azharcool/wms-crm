import { Checkbox, TableCell, TableRow } from "@mui/material";
import TableActionButton from "components/table/TableActionButton";
import useWarehouseAction from "hooks/warehouse/useWarehouseAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import palette from "theme/palette";

function SupplierListItem() {
  // const { item } = props;
  const { deleteWarehouseAsync } = useWarehouseAction();
  const navigate = useNavigate();
  // const navigateDetails = `/${AppRoutes.warehouse.warehouseLayout}/${AppRoutes.warehouse.details}/${item?.id}/${AppRoutes.warehouse.generalDetails}`;
  const newtheme = useSelector((state: any) => state.theme);
  // const getSelectedWarehouseByIdState = useSelector((state: RootState) =>
  //   getSelectedWarehouseById(state, item.id),
  // );
  // const dispatch = useAppDispatch();
  // const select = () => {
  //   dispatch(setWarehouseId(item.id));
  // };

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
          // checked={getSelectedWarehouseByIdState}
          color="primary"
          // onChange={select}
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
          // dispatch(
          //   setWarehouse({
          //     id: item?.id || 0,
          //     name: item?.warehouseName || "",
          //   }),
          // );
          // navigate(navigateDetails);
        }}
      >
        {/* {item?.warehouseName} */} Name
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // left: 169,
          // background: "white",
        }}
      >
        {/* {item?.label} */} Short Name
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* {item?.city} */} Supplier ID
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* {item?.email} */} City
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* {item?.phoneNumber} */}Email
      </TableCell>

      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* {item?.primaryPhoneNumber} */} Phone
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* {item?.primaryPhoneNumber} */} Primary contact
      </TableCell>
      <TableCell
        sx={{
          minWidth: 150,
          // background: "white",
        }}
      >
        {/* {item?.status === 1 ? "Active" : "Inactive"} */}Status
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
