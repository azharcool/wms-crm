import { useQuery } from "react-query";
import { getAllPaginationWarehouse } from "services/warehouse.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllWarehouse {
  pageSize: number;
  page: number;
}

function useGetAllWarehouse(props: IuseGetAllWarehouse) {
  const cachedKey = [QueryKeys.getAllWarehouse];
  const url = `PageSize=${props.pageSize}&Page=${props.page}`;
  return useQuery(cachedKey, () => getAllPaginationWarehouse(url));
}

export default useGetAllWarehouse;
