import { useQuery } from "react-query";
import { getAllVariantByProductId } from "services/variant.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllVariantByProductId {
  pageSize: number;
  page: number;
  productId: number;
}

function useGetAllVariantByProductId(props: IuseGetAllVariantByProductId) {
  const cachedKey = [QueryKeys.getAllVariantByProductId, props.productId];
  const url = `PageSize=${props.pageSize}&Page=${props.page}&productId=${props.productId}`;
  return useQuery(cachedKey, () => getAllVariantByProductId(url), {
    enabled: Boolean(props.productId),
  });
}

export default useGetAllVariantByProductId;
