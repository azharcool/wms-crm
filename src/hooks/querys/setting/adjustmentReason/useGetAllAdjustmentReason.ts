import { useQuery } from "react-query";
import { getAllAdjustmentReason } from "services/adjustmentReason.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllAdjustmentReason {
  pageSize: number;
  page: number;
}

function useGetAllAdjustmentReason(props: IuseGetAllAdjustmentReason) {
  const cachedKey = [QueryKeys.getAllAdjustmentReason];
  const url = `PageSize=${props.pageSize}&Page=${props.page}`;
  return useQuery(cachedKey, () => getAllAdjustmentReason(url));
}

export default useGetAllAdjustmentReason;
