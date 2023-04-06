import { useQuery } from "react-query";
import { getAllWarehouse } from "services/warehouse.services";
import { QueryKeys } from "utils/QueryKeys";

function useGetAllWarehouseWithoutPagination() {
  const cachedKey = [QueryKeys.getAllWarehouse];

  return useQuery(cachedKey, () => getAllWarehouse());
}

export default useGetAllWarehouseWithoutPagination;