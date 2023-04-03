import { useQuery } from "react-query";
import { getAllPaginationUnit } from "services/unit.service";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllPaginationUnit {
  pageSize: number;
  page: number;
}

function useGetAllPaginationUnit(props: IuseGetAllPaginationUnit) {
  const cachedKey = [QueryKeys.getAllPaginationUnit];
  const url = `PageSize=${props.pageSize}&Page=${props.page}`;
  return useQuery(cachedKey, () => getAllPaginationUnit(url));
}

export default useGetAllPaginationUnit;
