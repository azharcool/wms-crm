import { useQuery } from "react-query";
import { getAllPaginationProduct } from "services/product.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllProduct {
  pageSize: number;
  page: number;
}

function useGetAllProduct(props: IuseGetAllProduct) {
  const cachedKey = [QueryKeys.getAllProduct];
  const url = `PageSize=${props.pageSize}&Page=${props.page}`;
  return useQuery(cachedKey, () => getAllPaginationProduct(url));
}

export default useGetAllProduct;
