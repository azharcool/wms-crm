import useGetAllWarehouseAreaWithoutPagnation from "hooks/querys/warehouse/area/useGetAllWarehouseAreaWithoutPagination";
import { useEffect, useState } from "react";

interface IMenuItem {
  id: string;
  value: string;
}
function useArea() {
  const [areas, setAreas] = useState<IMenuItem[]>([]);
  const { data: areasResponse } = useGetAllWarehouseAreaWithoutPagnation();

  useEffect(() => {
    if (areasResponse?.data) {
      const response = areasResponse.data.map((item) => {
        return {
          id: String(item.id),
          value: item.name,
        };
      });
      setAreas(response);
    }
  }, [areasResponse]);

  return {
    areas,
  };
}

export default useArea;
