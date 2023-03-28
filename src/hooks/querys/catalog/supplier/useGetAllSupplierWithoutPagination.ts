import { useQuery } from "react-query";
import { getAllSupplierWithoutPagination } from "services/supplier.services";
import { QueryKeys } from "utils/QueryKeys";

function useGetAllSupplierWithoutPagination() {
  const cachedKey = [QueryKeys.getAllSupplierWithoutPagination];
  return useQuery(cachedKey, getAllSupplierWithoutPagination);
}

export default useGetAllSupplierWithoutPagination;
