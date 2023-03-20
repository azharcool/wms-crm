import { useQuery } from "react-query";
import { getByIdProduct } from "services/product.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByIdProduct {
  productId: number;
}

function useGetByIdProduct(props: IuseGetByIdProduct) {
  const cachedKey = [QueryKeys.getByIdProduct, props.productId];
  return useQuery(cachedKey, () => getByIdProduct(props.productId), {
    enabled: Boolean(props.productId),
  });
}

export default useGetByIdProduct;
