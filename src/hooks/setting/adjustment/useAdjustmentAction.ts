import { useSnackbar } from "components/snackbar";
import useDecodedData from "hooks/useDecodedData";
import { useQueryClient } from "react-query";
import {
  addAdjustment,
  deleteAdjustment,
  editAdjustment,
} from "services/adjustment.services";
import { IAddAdjustmentRequestRoot } from "types/setting/adjustment/addAdjustmentRequest";
import { QueryKeys } from "utils/QueryKeys";

function useAdjustmentAction() {
  const snackbar = useSnackbar();
  const userDecoded = useDecodedData();
  const queryClient = useQueryClient();

  const addAdjustmentAction = async (
    data: IAddAdjustmentRequestRoot,
  ): Promise<string> => {
    try {
      const response = await addAdjustment(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllAdjustment]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
      }
      return "";
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
      return "";
    }
  };

  const editAdjustmentAction = async (
    data: IAddAdjustmentRequestRoot,
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

  return {
    addAdjustmentAction,
    deleteAdjustmentAsync,
    editAdjustmentAction,
  };
}

export default useAdjustmentAction;
