import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
import { getAllWarehouseArea } from "services/warehouseArea.services";
import { QueryKeys } from "utils/QueryKeys";

function useGetAllWarehouseAreaWithoutPagnation() {
  const cachedKey = [QueryKeys.getAllWarehouseAreaWithoutPagination];
  const getSelectedWarehouse = useSelector(getWarehouseSelected);

  const url = `warehouseId=${getSelectedWarehouse.id}`;
  console.log("id--->", getSelectedWarehouse);
  return useQuery(cachedKey, () => getAllWarehouseArea(url), {
    enabled: Boolean(getSelectedWarehouse.name),
  });
}

export default useGetAllWarehouseAreaWithoutPagnation;
