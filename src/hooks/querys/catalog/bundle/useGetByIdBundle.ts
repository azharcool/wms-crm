import { useQuery } from "react-query";
import { getBundleById } from "services/bundle.services";
import { QueryKeys } from "utils/QueryKeys";

function useGetByIdBundle(id:number) {
  const cachedKey = [QueryKeys.getAllBundle, id];
  const url = `id=${id}`;
  return useQuery(cachedKey, () => getBundleById(url));
}

export default useGetByIdBundle;
