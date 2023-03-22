import { useQuery } from "react-query";
import { getVariantById } from "services/variant.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetVariantById {
  id: number;
}

function useGetVariantById(props: IuseGetVariantById) {
  const cachedKey = [QueryKeys.getAllVariantByProductId, props.id];
  return useQuery(cachedKey, () => getVariantById(props.id));
}

export default useGetVariantById;
