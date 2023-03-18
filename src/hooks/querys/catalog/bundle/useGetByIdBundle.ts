import { useQuery } from "react-query";
import { getBundleById } from "services/bundle.services";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetByIdBundle {
 id:number
}

function useGetByIdBundle(props: IuseGetByIdBundle) {
  const cachedKey = [QueryKeys.getAllBundle, props.id];
  const url = `id=${props.id}`;
  return useQuery(cachedKey, () => getBundleById(url));
}

export default useGetByIdBundle;
