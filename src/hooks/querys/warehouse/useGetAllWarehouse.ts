import { useQuery } from "react-query";
import {
  getAllPaginationWarehouse,
  getAllWarehouse,
} from "services/warehouse.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllWarehouse {
  pageSize: number;
  page: number;
}

function useGetAllWarehouse(props: IuseGetAllWarehouse) {
  const cachedKey = [QueryKeys.getAllWarehouse];
  const url = `PageSize=${props.pageSize}&Page=${props.page + 1 || 1}`;
  return useQuery(cachedKey, () =>
    props.pageSize !== 0 ? getAllPaginationWarehouse(url) : getAllWarehouse(),
  );
}

export default useGetAllWarehouse;
