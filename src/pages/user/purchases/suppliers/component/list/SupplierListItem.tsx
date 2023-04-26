import { Checkbox, TableCell, TableRow } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TableActionButton from "components/table/TableActionButton";
import StatusTableCell from "components/table/status-table-cell";
import CustomBodyTableCell, {
  CustomTableText,
} from "components/table/status-table-cell/CustomBodyTableCell";
import useSupplierAction from "hooks/actions/catalog/supplier/useSupplierAction";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSelectedSupplierById } from "redux/purchase/supplierSelector";
import { setSupplierId } from "redux/purchase/supplierSlice";
import { RootState, useAppDispatch } from "redux/store";
import AppRoutes from "routes/appRoutes";
import { GetAllSupplierData } from "types/catalog/supplier/getAllSupplierResponse";

interface ISupplierListItem {
  item: GetAllSupplierData;
}

function SupplierListItem(props: ISupplierListItem) {
  const { item } = props;

  const navigate = useNavigate();
  const { deleteSupplierAsync } = useSupplierAction();
  const theme = useTheme();
  const getSelectedSupplierByIdState = useSelector((state: RootState) =>
    getSelectedSupplierById(state, item.id),
  );
  const dispatch = useAppDispatch();

  const select = () => {
    dispatch(setSupplierId(item.id));
  };

  return (
    <TableRow>
      <CustomBodyTableCell
        padding="checkbox"
        sxProps={{
          minWidth: 60,
          position: "sticky",
          left: 0,
          zIndex: 999,
        }}
      >
        <Checkbox
          checked={getSelectedSupplierByIdState}
          sx={{
            color: theme.palette.primary.darkBlue,
            "&.Mui-checked": {
              color: theme.palette.primary.darkBlue,
            },
          }}
          onChange={select}
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
          navigate(
            `/${AppRoutes.purchases.layout}/${AppRoutes.purchases.supplier.details}/${item.id}/${AppRoutes.purchases.supplier.generalDetails}`,
          );
        }}
      >
        <CustomTableText text={item?.companyName} link />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.shortName} />
      </CustomBodyTableCell>
      <CustomBodyTableCell>
        <CustomTableText text={item?.id} />
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
        <CustomTableText text={`${item?.firstName} ${item?.lastName}`} />
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
            deleteSupplierAsync(item?.id);
          }}
        />
      </CustomBodyTableCell>
    </TableRow>
  );
}

export default SupplierListItem;
