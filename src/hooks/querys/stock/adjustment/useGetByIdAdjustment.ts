import { useQuery } from "react-query";
import { getByIdAdjustment } from "services/adjustment.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByIdAdjustment {
  adjustmentId: number;
}

function useGetByIdAdjustment(props: IuseGetByIdAdjustment) {
  const cachedKey = [QueryKeys.getByIdAdjustment, props.adjustmentId];
  return useQuery(cachedKey, () => getByIdAdjustment(props.adjustmentId || 0), {
    enabled: Boolean(props.adjustmentId),
  });
}

export default useGetByIdAdjustment;
