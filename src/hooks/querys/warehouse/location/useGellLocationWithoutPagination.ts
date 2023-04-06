import { useQuery } from "react-query";
import { getAllLocation } from "services/location.services";
import { QueryKeys } from "utils/QueryKeys";

function useGetAllLocationWithoutPagination(warehouseId:number) {
  const cachedKey = [QueryKeys.getAllLocation, warehouseId];

  return useQuery(cachedKey, () => getAllLocation(warehouseId),{
    enabled: Boolean(warehouseId),
  });
}

export default useGetAllLocationWithoutPagination;