import { useQuery } from "react-query";
import { getAllBrand } from "services/brand.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllBrand {
  pageSize: number;
  page: number;
}

function useGetAllBrand(props: IuseGetAllBrand) {
  const cachedKey = [QueryKeys.getAllBrand];
  const url = `PageSize=${props.pageSize}&Page=${props.page}`;
  return useQuery(cachedKey, () => getAllBrand(url));
}

export default useGetAllBrand;
