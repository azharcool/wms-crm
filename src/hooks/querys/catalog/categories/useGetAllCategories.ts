import { useQuery } from "react-query";
import { getAllPaginationCategories } from "services/categories.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllCategories {
  pageSize: number;
  page: number;
}

function useGetAllCategories(props: IuseGetAllCategories) {
  const cachedKey = [QueryKeys.getAllCategories];
  const url = `PageSize=${props.pageSize}&Page=${props.page}`;
  return useQuery(cachedKey, () => getAllPaginationCategories(url));
}

export default useGetAllCategories;
