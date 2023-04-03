import useGetAllProductCondition from "hooks/querys/setting/product-condition/useGetAllProductCondition";
import { useEffect, useState } from "react";

interface IMenuItem {
  id: string;
  value: string;
}

function useProductCondition() {
  const [productCondition, setProductCondition] = useState<IMenuItem[]>([]);
  const { data: areasResponse } = useGetAllProductCondition();

  useEffect(() => {
    if (areasResponse?.data) {
      const response = areasResponse.data.map((item) => {
        return {
          id: String(item.id),
          value: item.code,
        };
      });
      setProductCondition(response);
    }
  }, [areasResponse]);

  return {
    productCondition,
  };
}

export default useProductCondition;
