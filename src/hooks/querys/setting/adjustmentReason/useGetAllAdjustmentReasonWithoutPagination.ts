import { useQuery } from "react-query";
import { getAllAdjustmentReasonWithoutPagination } from "services/adjustmentReason.services";
import { QueryKeys } from "utils/QueryKeys";

function useGetAllAdjustmentReasonWithoutPagination() {
  const cachedKey = [QueryKeys.getAllAdjustment];

  return useQuery(cachedKey, () => getAllAdjustmentReasonWithoutPagination());
}

export default useGetAllAdjustmentReasonWithoutPagination;
