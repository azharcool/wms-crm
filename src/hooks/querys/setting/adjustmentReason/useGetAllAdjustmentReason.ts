import { useQuery } from "react-query";
import { getAllPaginationAdjustmentReason } from "services/adjustmentReason.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllAdjustmentReason {
  pageSize: number;
  page: number;
}

function useGetAllAdjustmentReason(props: IuseGetAllAdjustmentReason) {
  const cachedKey = [QueryKeys.getAllAdjustmentReason];
  const url = `PageSize=${props.pageSize}&Page=${props.page + 1 || 1}`;
  return useQuery(cachedKey, () => getAllPaginationAdjustmentReason(url));
}

export default useGetAllAdjustmentReason;
