import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
import { getAllWarehouseArea } from "services/warehouseArea.services";
import { QueryKeys } from "utils/QueryKeys";

function useGetAllWarehouseAreaWithoutPagnation() {
  const getSelectedWarehouse = useSelector(getWarehouseSelected);
  const cachedKey = [
    QueryKeys.getAllWarehouseAreaWithoutPagination,
    getSelectedWarehouse.id,
  ];
  const url = `warehouseId=${getSelectedWarehouse.id}`;

  return useQuery(cachedKey, () => getAllWarehouseArea(url), {
    enabled: Boolean(getSelectedWarehouse.name),
  });
}

export default useGetAllWarehouseAreaWithoutPagnation;
