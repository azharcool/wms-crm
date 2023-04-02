import { useQuery } from "react-query";
import { getByIdAdjustmentReason } from "services/adjustmentReason.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByIdAdjustmentReason {
  adjustmentId?: number;
}

function useGetByIdAdjustmentReason(props: IuseGetByIdAdjustmentReason) {
  const cachedKey = [QueryKeys.getByIdAdjustmentReason, props.adjustmentId];
  return useQuery(
    cachedKey,
    () => getByIdAdjustmentReason(props.adjustmentId || 0),
    {
      enabled: Boolean(props.adjustmentId),
    },
  );
}

export default useGetByIdAdjustmentReason;
