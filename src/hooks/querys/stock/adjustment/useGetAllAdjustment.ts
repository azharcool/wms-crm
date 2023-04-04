import { useQuery } from "react-query";
import { getAllPaginationAdjustment } from "services/adjustment.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllAdjustmentReason {
  pageSize: number;
  page: number;
}

function useGetAllAdjustment(props: IuseGetAllAdjustmentReason) {
  const cachedKey = [QueryKeys.getAllAdjustment];
  const url = `PageSize=${props.pageSize}&Page=${props.page}`;
  return useQuery(cachedKey, () => getAllPaginationAdjustment(url));
}

export default useGetAllAdjustment;
