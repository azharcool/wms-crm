import { useQuery } from "react-query";
import { getByIdProductCondition } from "services/productCondition.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByIdProductCondition {
  productConditionId?: number;
}

function useGetByIdProductCondition(props: IuseGetByIdProductCondition) {
  const cachedKey = [
    QueryKeys.getByIdProductCondition,
    props.productConditionId,
  ];
  return useQuery(
    cachedKey,
    () => getByIdProductCondition(props.productConditionId || 0),
    {
      enabled: Boolean(props.productConditionId),
    },
  );
}

export default useGetByIdProductCondition;
