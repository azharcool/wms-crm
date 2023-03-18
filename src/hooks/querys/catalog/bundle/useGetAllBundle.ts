import { useQuery } from "react-query";
import { getAllPaginationBundle } from "services/bundle.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllBundle {
  pageSize: number;
  page: number;
}

function useGetAllBundle(props: IuseGetAllBundle) {
  const cachedKey = [QueryKeys.getAllBundle];
  const url = `PageSize=${props.pageSize}&Page=${props.page}`;
  return useQuery(cachedKey, () => getAllPaginationBundle(url));
}

export default useGetAllBundle; 
