import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";
import { getAllZone } from "services/zone.services";
import { QueryKeys } from "utils/QueryKeys";

function useGetAllZoneWithoutPagnation() {
  const cachedKey = [QueryKeys.getAllZonePagination];
  const getSelectedWarehouse = useSelector(getWarehouseSelected);

  const url = `warehouseId=${getSelectedWarehouse.id}`;
  return useQuery(cachedKey, () => getAllZone(url), {
    enabled: Boolean(getSelectedWarehouse.name),
  });
}

export default useGetAllZoneWithoutPagnation;
