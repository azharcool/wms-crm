import { useQuery } from "react-query";
import { getAllAdjustment } from "services/adjustment.services";
import { QueryKeys } from "utils/QueryKeys";

function useGetAllAdjustmentWithoutPagination() {
  const cachedKey = [QueryKeys.getAllAdjustment];

  return useQuery(cachedKey, () => getAllAdjustment());
}

export default useGetAllAdjustmentWithoutPagination;
