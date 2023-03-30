import { useSnackbar } from "components/snackbar";
import useDecodedData from "hooks/useDecodedData";
import { useQueryClient } from "react-query";
import { addAdjustment } from "services/adjustment.services";
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

  return {
    addAdjustmentAction,
  };
}

export default useAdjustmentAction;
