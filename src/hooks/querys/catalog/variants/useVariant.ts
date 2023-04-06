import useGetAllVariant from "hooks/querys/catalog/variants/useGetAllVariant";
import useGetAllWarehouseAreaWithoutPagnation from "hooks/querys/warehouse/area/useGetAllWarehouseAreaWithoutPagination";
import useGetAllWarehouseWithoutPagination from "hooks/querys/warehouse/useGetAllWarehouseWithoutPagination";
import { useEffect, useState } from "react";
import { IGetAllVariantResponseData } from "types/catalog/variants/getAllVariantResponse";

function useVariant() {
  const [variant, setVariant] = useState<IGetAllVariantResponseData[]>([]);
  const { data: variantResponse } = useGetAllVariant({});
  useEffect(() => {
    if (variantResponse?.data) {
      const response = variantResponse.data
      setVariant(response);
    }
  }, [variantResponse]);

  return {
    variant,
  };
}

export default useVariant;