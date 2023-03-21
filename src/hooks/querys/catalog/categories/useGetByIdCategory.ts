import { useQuery } from "react-query";
import { getByIdCategory } from "services/categories.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByIdCategory {
  categoryId: number;
}

function useGetByIdCategory(props: IuseGetByIdCategory) {
  const cachedKey = [QueryKeys.getByIdCategory, props.categoryId];
  return useQuery(cachedKey, () => getByIdCategory(props.categoryId), {
    enabled: Boolean(props.categoryId),
  });
}

export default useGetByIdCategory;
