import { useQuery } from "react-query";
import { getAllPaginationVariant } from "services/variant.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllVariant {
  pageSize: number;
  page: number;
}

function useGetAllVariant(props: IuseGetAllVariant) {
  const cachedKey = [QueryKeys.getAllVariant];
  const url = `PageSize=${props.pageSize}&Page=${props.page}`;
  return useQuery(cachedKey, () => getAllPaginationVariant(url));
}

export default useGetAllVariant;
