import { useQuery } from "react-query";
import { getByUnitNumberUnit } from "services/unit.service";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByUnitNumberUnit {
  unitNumber?: number;
}

function useGetByUnitNumberUnit(props: IuseGetByUnitNumberUnit) {
  const cachedKey = [QueryKeys.getAllUnit];
  return useQuery(cachedKey, () => getByUnitNumberUnit(props.unitNumber || 0), {
    enabled: Boolean(props.unitNumber),
  });
}

export default useGetByUnitNumberUnit;
