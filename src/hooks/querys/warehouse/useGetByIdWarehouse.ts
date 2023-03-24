import { useQuery } from "react-query";
import { getByIdWarehouse } from "services/warehouse.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByIdWarehouse {
  warehouseId: number;
}

function useGetByIdWarehouse(props: IuseGetByIdWarehouse){
  const cachedKey = [QueryKeys.getByIdWarehouse, props.warehouseId];
  return useQuery(cachedKey, () => getByIdWarehouse(props.warehouseId), {
    enabled: Boolean(props.warehouseId),
  });
}

export default useGetByIdWarehouse;
