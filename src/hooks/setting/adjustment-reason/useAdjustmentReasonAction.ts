import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import {
  addAdjustmentReason,
  bulkDeleteAdjustmentReason,
  deleteAdjustmentReason,
  editAdjustmentReason,
} from "services/adjustmentReason.services";
import { IAddAdjustmentRequestRoot } from "types/setting/adjustment/addAdjustmentRequest";
import { QueryKeys } from "utils/QueryKeys";

function useAdjustmentReasonAction() {
  const snackbar = useSnackbar();

  const queryClient = useQueryClient();

  const addAdjustmentReasonAction = async (
    data: IAddAdjustmentRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await addAdjustmentReason(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllAdjustmentReason]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
      }
      return true;
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
      return false;
    }
  };

  const editAdjustmentReasonAction = async (
    data: IAddAdjustmentRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await editAdjustmentReason(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllAdjustmentReason]);
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

  const deleteAdjustmentReasonAction = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteAdjustmentReason(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllAdjustmentReason]);
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

  const bulkDeleteAdjustmentReasonAsync = async (
    ids: string,
  ): Promise<boolean> => {
    try {
      const response = await bulkDeleteAdjustmentReason(ids);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllAdjustmentReason]);
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
    addAdjustmentReasonAction,
    deleteAdjustmentReasonAction,
    editAdjustmentReasonAction,
    bulkDeleteAdjustmentReasonAsync,
  };
}

export default useAdjustmentReasonAction;
