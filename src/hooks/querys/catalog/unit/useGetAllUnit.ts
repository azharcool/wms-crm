import { useQuery } from "react-query";
import { getAllUnit } from "services/unit.service";
import { QueryKeys } from "utils/QueryKeys";

function useGetAllUnit() {
  const cachedKey = [QueryKeys.getAllUnit];
  return useQuery(cachedKey, () => getAllUnit());
}

export default useGetAllUnit;
