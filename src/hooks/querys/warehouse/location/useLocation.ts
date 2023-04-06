import useGetAllLocationWithoutPagination from "hooks/querys/warehouse/location/useGellLocationWithoutPagination";
import { useEffect, useState } from "react";

interface IMenuItem {
  id: string;
  value: string;
}
function useLocation(warehouseId: number) {
  const [location, setLocation] = useState<IMenuItem[]>([]);
  const { data: LocationResponse } =
    useGetAllLocationWithoutPagination(warehouseId);
  useEffect(() => {
    if (LocationResponse?.data) {
      const response = LocationResponse.data.map((item) => {
        return {
          id: String(item.id),
          value: item.warehouseName,
        };
      });
      setLocation(response);
    }
  }, [LocationResponse || warehouseId]);

  return {
    location,
  };
}

export default useLocation;
