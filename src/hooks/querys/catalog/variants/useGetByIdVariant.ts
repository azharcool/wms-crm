import { useQuery } from "react-query";
import { getByIdVariant } from "services/variant.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByIdVariant {
  variantId: number;
}

function useGetByIdVariant(props: IuseGetByIdVariant) {
  const cachedKey = [QueryKeys.getByIdVariant, props.variantId];
  return useQuery(cachedKey, () => getByIdVariant(props.variantId), {
    enabled: Boolean(props.variantId),
  });
}

export default useGetByIdVariant;
