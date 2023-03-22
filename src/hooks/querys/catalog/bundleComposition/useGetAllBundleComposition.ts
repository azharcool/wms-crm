import { useQuery } from "react-query";
import { getAllPaginationBundleComposition } from "services/bundleComposition";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllBundle {
  pageSize: number;
  page: number;
}

function useGetAllBundleComposition(props: IuseGetAllBundle) {
  const cachedKey = [QueryKeys.getAllBundle];
  const url = `PageSize=${props.pageSize}&Page=${props.page}`;
  return useQuery(cachedKey, () => getAllPaginationBundleComposition(url));
}

export default useGetAllBundleComposition; 
