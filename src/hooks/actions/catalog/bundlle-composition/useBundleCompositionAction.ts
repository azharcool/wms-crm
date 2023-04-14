import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import {
  addBundleComposition,
  deleteBundleCompById,
  editBundleComposition,
} from "services/bundleComposition";
import { AddBundlCompositionRequestRoot } from "types/catalog/bundleComposition/addBundleCompostionRequest";
import { QueryKeys } from "utils/QueryKeys";

function useBundleCompositionAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const addBundleCompositionAction = async (
    data: AddBundlCompositionRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await addBundleComposition(data);
      if (response.statusCode === 200) {
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message || "something went wrong!",
        type: "error",
      });
    }
    return false;
  };

  const editBundleCompositionAction = async (
    data: AddBundlCompositionRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await editBundleComposition(data);
      if (response.statusCode === 200) {
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message || "something went wrong!",
        type: "error",
      });
    }
    return false;
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
    editBundleCompositionAction,
    deleteBundlCompeAction,
  };
}

export default useBundleCompositionAction;
