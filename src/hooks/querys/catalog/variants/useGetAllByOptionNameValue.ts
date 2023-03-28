import { useQuery } from "react-query";
import { getAllByOptionNameValue } from "services/variant.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllVariant {
  optionName?: string;
  value?: string;
}

function useGetAllByOptionNameValue(props: IuseGetAllVariant) {
  const cachedKey = [QueryKeys.getAllVariant];
  const url = `optionName=${props.optionName}&value=${props.value}`;
  return useQuery(cachedKey, () => getAllByOptionNameValue(url));
}

export default useGetAllByOptionNameValue;
