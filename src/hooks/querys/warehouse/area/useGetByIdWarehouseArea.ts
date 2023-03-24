import { useQuery } from "react-query";
import { getByIdWarehouseArea } from "services/warehouseArea.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByIdWarehouseArea {
  id: number;
  warehouseId: number;
}

function useGetByIdWarehouseArea(props: IuseGetByIdWarehouseArea) {
  const cachedKey = [QueryKeys.getAllWarehouseArea, props.id];
  const url = `id=${props.id}&warehouseId=${props.warehouseId}`;
  return useQuery(cachedKey, () => getByIdWarehouseArea(url), {
    enabled: Boolean(props.warehouseId || props.id),
  });
}

export default useGetByIdWarehouseArea;
