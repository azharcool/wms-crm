import { useQuery } from "react-query";
import {
  getAllCategories,
  getAllPaginationCategories,
} from "services/categories.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllCategories {
  pageSize?: number;
  page?: number;
}

function useGetAllCategories(props: IuseGetAllCategories) {
  const cachedKey = [QueryKeys.getAllCategories];
  const url = `PageSize=${props.pageSize}&Page=${props.page}`;
  return useQuery(cachedKey, () =>
    props.pageSize ? getAllPaginationCategories(url) : getAllCategories(),
  );
}

export default useGetAllCategories;
