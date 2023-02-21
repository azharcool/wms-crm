import { useSnackbar } from "components/snackbar";
import { IResponse } from "constants/interfaces";
import { useQueryClient } from "react-query";
import { removeLeadStatus, saveLeadStatus } from "services/leadStatus.service";
import { QueryKeys } from "utils/QueryKeys";

export interface ILeadStatusRequest {
  id?: number;
  leadStatusName: string;
}

const useApiActions = () => {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const trySave = async (values: ILeadStatusRequest) => {
    try {
      const response: IResponse = await saveLeadStatus(values);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.leadStatuses]);
        snackbar?.show({
          title: response?.message,
          type: "success",
        });
      }
    } catch (err: any) {
      const msg = err.message || "Something went wrong";
      snackbar?.show({
        title: msg,
        type: "error",
      });
    }
  };

  const deleteLeadStatus = async (leadStatus: number) => {
    try {
      const response: IResponse = await removeLeadStatus(leadStatus);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.leadStatuses]);
        snackbar?.show({
          title: response?.message,
          type: "success",
        });
      }
    } catch (err: any) {
      const msg = err.message || "Something went wrong";
      snackbar?.show({
        title: msg,
        type: "error",
      });
    }
  };

  return {
    trySave,
    deleteLeadStatus,
  };
};

export { useApiActions };
