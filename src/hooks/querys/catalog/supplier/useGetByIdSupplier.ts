import { useQuery } from "react-query";
import { getByIdSupplier } from "services/supplier.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByIdSupplier {
  supplierId: number;
}

function useGetByIdSupplier(props: IuseGetByIdSupplier) {
  const cachedKey = [QueryKeys.getByIdSupplier, props.supplierId];
  return useQuery(cachedKey, () => getByIdSupplier(props.supplierId), {
    enabled: Boolean(props.supplierId),
  });
}

export default useGetByIdSupplier;
