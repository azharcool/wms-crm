import { useQuery } from "react-query";
import { getAllBillingAddress } from "services/supplier.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllBillingAddress {
  supplierId: number;
}

function useGetAllBillingAddress(props: IuseGetAllBillingAddress) {
  const cachedKey = [
    QueryKeys.getAllBillingAddressByIdSupplier,
    props.supplierId,
  ];
  return useQuery(cachedKey, () => getAllBillingAddress(props.supplierId), {
    enabled: Boolean(props.supplierId),
  });
}

export default useGetAllBillingAddress;
