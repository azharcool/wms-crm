import { useQuery } from "react-query";
import { getByIdZone } from "services/zone.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByIdZone {
  id: number;
  warehouseId: number;
}

function useGetByIdZone(props: IuseGetByIdZone) {
  const cachedKey = [QueryKeys.getByIdZone, props.id];
  const url = `id=${props.id}&warehouseId=${props.warehouseId}`;
  return useQuery(cachedKey, () => getByIdZone(url), {
    enabled: Boolean(props.warehouseId || props.id),
  });
}

export default useGetByIdZone;
