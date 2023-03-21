import { useQuery } from "react-query";
import { getAllSupplier } from "services/supplier.services";
import { QueryKeys } from "utils/QueryKeys";

function useGetAllSupplier() {
  const cachedKey = [QueryKeys.getAllSupplier];
  return useQuery(cachedKey, getAllSupplier);
}

export default useGetAllSupplier;
