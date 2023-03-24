import { useQuery } from "react-query";
import { getByIdLocation } from "services/location.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByIdLocation {
  id: number;
  warehouseId: number;
}

function useGetByIdLocation(props: IuseGetByIdLocation) {
  const cachedKey = [QueryKeys.getByIdLocation, props.id];
  const url = `id=${props.id}&warehouseId=${props.warehouseId}`;
  return useQuery(cachedKey, () => getByIdLocation(url), {
    enabled: Boolean(props.warehouseId || props.id),
  });
}

export default useGetByIdLocation;
