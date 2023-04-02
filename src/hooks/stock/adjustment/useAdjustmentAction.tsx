import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import {
  addAdjustment,
  bulkDeleteAdjustment,
  deleteAdjustment,
  editAdjustment,
} from "services/adjustment.services";
import { AddAdjustmentRequestRoot } from "types/stock/adjustment/addAdjustmentRequest";

import { QueryKeys } from "utils/QueryKeys";

function useAdjustmentAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const editAdjustmentAction = async (
    data: AddAdjustmentRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await editAdjustment(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllAdjustment]);
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

  const addAdjustmentAction = async (
    data: AddAdjustmentRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await addAdjustment(data);
      if (response.statusCode === 200) {
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

  const deleteAdjustmentAsync = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteAdjustment(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllAdjustment]);
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

  const bulkDeleteAdjustmentAsync = async (ids: string): Promise<boolean> => {
    try {
      const response = await bulkDeleteAdjustment(ids);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllAdjustment]);
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
    addAdjustmentAction,
    deleteAdjustmentAsync,
    bulkDeleteAdjustmentAsync,
    editAdjustmentAction,
  };
}

export default useAdjustmentAction;
