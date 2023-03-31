import { useQuery } from "react-query";
import { getByIdBrand } from "services/brand.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByIdBrand {
  brandId?: number;
}

function useGetByIdBrand(props: IuseGetByIdBrand) {
  const cachedKey = [QueryKeys.getByIdBrand, props.brandId];
  return useQuery(cachedKey, () => getByIdBrand(props.brandId || 0), {
    enabled: Boolean(props.brandId),
  });
}

export default useGetByIdBrand;
