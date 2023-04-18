import { useQuery } from "react-query";
import { getAllPaginationBrand } from "services/brand.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllBrand {
  pageSize: number;
  page: number;
}

function useGetAllBrand(props: IuseGetAllBrand) {
  const cachedKey = [QueryKeys.getAllBrand];
  const url = `PageSize=${props.pageSize}&Page=${props.page + 1 || 1}`;
  return useQuery(cachedKey, () => getAllPaginationBrand(url));
}

export default useGetAllBrand;
