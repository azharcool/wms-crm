import { useQuery } from "react-query";
import { getAllShippingAddress } from "services/supplier.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllShippingAddress {
  supplierId: number;
}

function useGetAllShippingAddress(props: IuseGetAllShippingAddress) {
  const cachedKey = [
    QueryKeys.getAllShippingAddressByIdSupplier,
    props.supplierId,
  ];
  return useQuery(cachedKey, () => getAllShippingAddress(props.supplierId), {
    enabled: Boolean(props.supplierId),
  });
}

export default useGetAllShippingAddress;
