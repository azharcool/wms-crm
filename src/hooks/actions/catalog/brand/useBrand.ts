import useGetAllBrand from "hooks/querys/catalog/brands/useGetAllBrand";
import { useEffect, useState } from "react";

interface IMenuItem {
  id: string;
  value: string;
}

function useBrand() {
  const [brand, setBrand] = useState<IMenuItem[]>([]);
  const { data: brandResponse } = useGetAllBrand({
    pageSize: 10,
    page: 1,
  });

  useEffect(() => {
    if (brandResponse?.data) {
      const response = brandResponse.data.map((item) => {
        return {
          id: String(item.id),
          value: item.name,
        };
      });
      setBrand(response);
    }
  }, [brandResponse]);

  return { brand };
}

export default useBrand;
