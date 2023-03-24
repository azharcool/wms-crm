import { useQuery } from "react-query";
import { getAllPaginationLocation } from "services/location.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllLocation {
  pageSize: number;
  page: number;
  warehouseId: number;
}

function useGetAllLocation(props: IuseGetAllLocation) {
  const cachedKey = [QueryKeys.getAllLocation];
  const url = `PageSize=${props.pageSize}&Page=${props.page}&warehouseId=${props.warehouseId}`;
  return useQuery(cachedKey, () => getAllPaginationLocation(url), {
    enabled: Boolean(props.warehouseId),
  });
}

export default useGetAllLocation;
