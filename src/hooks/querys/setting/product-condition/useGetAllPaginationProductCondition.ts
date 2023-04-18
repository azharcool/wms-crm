import { useQuery } from "react-query";
import { getAllPaginationProductCondition } from "services/productCondition.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllPaginationProductCondition {
  pageSize: number;
  page: number;
}

function useGetAllPaginationProductCondition(
  props: IuseGetAllPaginationProductCondition,
) {
  const cachedKey = [QueryKeys.getAllProductCondition];
  const url = `PageSize=${props.pageSize}&Page=${props.page + 1 || 1} `;
  return useQuery(cachedKey, () => getAllPaginationProductCondition(url));
}

export default useGetAllPaginationProductCondition;
