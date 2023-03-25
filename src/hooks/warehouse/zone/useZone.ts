import useGetAllZoneWithoutPagnation from "hooks/querys/warehouse/zone/useGetAllZoneWithoutPagination";
import { useEffect, useState } from "react";

interface IMenuItem {
  id: string;
  value: string;
}
function useZone() {
  const [zones, setZones] = useState<IMenuItem[]>([]);
  const { data: zoneResponse } = useGetAllZoneWithoutPagnation();

  useEffect(() => {
    if (zoneResponse?.data) {
      const response = zoneResponse.data.map((item) => {
        return {
          id: String(item.id),
          value: item.name,
        };
      });
      setZones(response);
    }
  }, [zoneResponse]);

  return {
    zones,
  };
}

export default useZone;
