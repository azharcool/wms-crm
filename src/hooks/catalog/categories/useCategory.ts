import useGetAllCategories from "hooks/querys/catalog/categories/useGetAllCategories";
import { useEffect, useState } from "react";

interface IMenuItem {
  id: string;
  value: string;
}

function useCategory() {
  const [category, setSetCategory] = useState<IMenuItem[]>([]);
  const { data: getAllCategoryResponse } = useGetAllCategories({});

  useEffect(() => {
    if (getAllCategoryResponse?.data) {
      const response = getAllCategoryResponse.data.map((item) => {
        return {
          id: String(item.id),
          value: item.name,
        };
      });
      setSetCategory(response);
    }
  }, [getAllCategoryResponse]);

  return {
    category,
  };
}

export default useCategory;
