import useGetAllWarehouse from "hooks/querys/warehouse/useGetAllWarehouse";
import { useEffect, useState } from "react";

interface IMenuItem {
  id: string;
  value: string;
}

function useWarehouse() {
  const [warehouse, setSetWarehouse] = useState<IMenuItem[]>([]);
  const { data: getAllWarehouseResponse } = useGetAllWarehouse({
    pageSize: 0,
    page: 0,
  });

  useEffect(() => {
    if (getAllWarehouseResponse?.data) {
      const response = getAllWarehouseResponse.data.map((item) => {
        return {
          id: String(item.id),
          value: item.warehouseName,
        };
      });
      setSetWarehouse(response);
    }
  }, [getAllWarehouseResponse]);

  return {
    warehouse,
  };
}

export default useWarehouse;
