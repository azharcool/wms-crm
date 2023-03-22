import useGetAllSupplier from "hooks/querys/catalog/supplier/useGetAllSupplier";
import { useEffect, useState } from "react";

interface IMenuItem {
  id: string;
  value: string;
}
function useSupplier() {
  const [supplier, setSupplier] = useState<IMenuItem[]>([]);
  const { data: supplierResponse } = useGetAllSupplier();

  useEffect(() => {
    if (supplierResponse?.data) {
      const response = supplierResponse.data.map((item) => {
        return {
          id: String(item.id),
          value: item.companyName,
        };
      });
      setSupplier(response);
    }
  }, [supplierResponse]);

  return {
    supplier,
  };
}

export default useSupplier;
