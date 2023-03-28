import { useQuery } from "react-query";
import { getAllSupplierWithPagination } from "services/supplier.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllSupplierWithPagination {
  pageSize: number;
  page: number;
}

function useGetAllSupplierWithPagination(
  props: IuseGetAllSupplierWithPagination,
) {
  const cachedKey = [QueryKeys.getAllSupplierWithPagination];
  const url = `PageSize=${props.pageSize}&Page=${props.page}`;
  return useQuery(cachedKey, () => getAllSupplierWithPagination(url));
}

export default useGetAllSupplierWithPagination;
