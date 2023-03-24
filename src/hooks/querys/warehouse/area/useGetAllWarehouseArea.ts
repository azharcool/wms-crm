import { useQuery } from "react-query";
import { getAllPaginationWarehouseArea } from "services/warehouseArea.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllWarehouseArea {
  pageSize: number;
  page: number;
  warehouseId: number;
}

function useGetAllWarehouseArea(props: IuseGetAllWarehouseArea) {
  const cachedKey = [QueryKeys.getAllWarehouseArea];
  const url = `PageSize=${props.pageSize}&Page=${props.page}&warehouseId=${props.warehouseId}`;
  return useQuery(cachedKey, () => getAllPaginationWarehouseArea(url), {
    enabled: Boolean(props.warehouseId),
  });
}

export default useGetAllWarehouseArea;
