import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import {
  addBundle,
  bulkDeleteBundle,
  deleteBundleById,
  editBundle,
} from "services/bundle.services";
import { IAddBundleRequestRoot } from "types/catalog/bundles/addBundleRequest";
import { QueryKeys } from "utils/QueryKeys";

function useBundleAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const addBundleAction = async (
    data: IAddBundleRequestRoot,
  ): Promise<string> => {
    try {
      const response = await addBundle(data);
      if (response.statusCode === 200) {
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return "";
        // return response?.productId?.toString();
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

  const editBundleAction = async (
    data: IAddBundleRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await editBundle(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllBundle]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  const deleteBundleAction = async (id: number): Promise<string> => {
    try {
      const response = await deleteBundleById(id);
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
        title: "Something went wrong",
        type: "error",
      });
      return "";
    }
  };

  const bulkDeleteBundleAsync = async (ids: string): Promise<boolean> => {
    try {
      const response = await bulkDeleteBundle(ids);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllBundle]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  return {
    addBundleAction,
    editBundleAction,
    deleteBundleAction,
    bulkDeleteBundleAsync,
  };
}

export default useBundleAction;
