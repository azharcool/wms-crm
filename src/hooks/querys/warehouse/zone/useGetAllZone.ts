import { useQuery } from "react-query";
import { getAllPaginationZone } from "services/zone.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllZone {
  pageSize: number;
  page: number;
  warehouseId: number;
}

function useGetAllZone(props: IuseGetAllZone) {
  const cachedKey = [QueryKeys.getAllZone];
  const url = `PageSize=${props.pageSize}&Page=${props.page}&warehouseId=${props.warehouseId}`;
  return useQuery(cachedKey, () => getAllPaginationZone(url), {
    enabled: Boolean(props.warehouseId),
  });
}

export default useGetAllZone;
