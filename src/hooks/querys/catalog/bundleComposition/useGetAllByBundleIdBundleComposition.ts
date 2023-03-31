import { useQuery } from "react-query";
import { getAllByBundleIdBundleComposition } from "services/bundleComposition";
import { QueryKeys } from "utils/QueryKeys";

interface IuseGetAllByBundleIdBundleComposition {
  bundleId: number;
}

function useGetAllByBundleIdBundleComposition(
  props: IuseGetAllByBundleIdBundleComposition,
) {
  const { bundleId } = props;
  const cachedKey = [QueryKeys.getAllByBundleIdBundleComposition, bundleId];
  return useQuery(
    cachedKey,
    () => getAllByBundleIdBundleComposition(bundleId),
    {
      enabled: Boolean(bundleId),
    },
  );
}

export default useGetAllByBundleIdBundleComposition;
