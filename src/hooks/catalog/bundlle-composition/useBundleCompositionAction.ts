import { useSnackbar } from "components/snackbar";
import useDecodedData from "hooks/useDecodedData";
import { addBundleComposition, deleteBundleCompById } from "services/bundleComposition";
import { QueryKeys } from "utils/QueryKeys";
import { useQueryClient } from "react-query";

function useBundleCompositionAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const addBundleCompositionAction = async (
    data: any,
  ): Promise<string> => {
    try {
      const response = await addBundleComposition(data);
      if (response.statusCode === 200) {
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return "";
      }
      return "";
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "success",
      });
      return "";
    }
  };

  const deleteBundlCompeAction = async (id: number): Promise<string> => {
    try {
      const response = await deleteBundleCompById(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllBundle]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return "";
      }
      return "";
    } catch (error: any) {
      snackbar?.show({
        title: "Something went wrong",
        type: "error",
      });
      return "";
    }
  };

  return {
    addBundleCompositionAction,
    deleteBundlCompeAction
  };
}

export default useBundleCompositionAction;
