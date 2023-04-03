import { useQuery } from "react-query";
import { getAllProductCondition } from "services/productCondition.services";
import { QueryKeys } from "utils/QueryKeys";

function useGetAllProductCondition() {
  const cachedKey = [QueryKeys.getAllProductCondition];

  return useQuery(cachedKey, getAllProductCondition);
}

export default useGetAllProductCondition;
