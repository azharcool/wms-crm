import { useQuery } from "react-query";
import { getAllAdjustment } from "services/adjustment.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllAdjustment {
  pageSize: number;
  page: number;
}

function useGetAllAdjustment(props: IuseGetAllAdjustment) {
  const cachedKey = [QueryKeys.getAllAdjustment];
  const url = `PageSize=${props.pageSize}&Page=${props.page}`;
  return useQuery(cachedKey, () => getAllAdjustment(url));
}

export default useGetAllAdjustment;
