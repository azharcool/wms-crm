import { useSnackbar } from "components/snackbar";
import { IResponse } from "constants/interfaces";
import { useQueryClient } from "react-query";
import { removeLeadSource, saveLeadSource } from "services/leadSource.service";
import { QueryKeys } from "utils/QueryKeys";

export interface ILeadSourceRequest {
  id?: number;
  leadSourceName: string;
}

const useApiActions = () => {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const trySave = async (values: ILeadSourceRequest) => {
    try {
      const response: IResponse = await saveLeadSource(values);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.leadSources]);
        snackbar?.show({
          title: response?.message,
          type: "success",
        });
      }
    } catch (err: any) {
      const msg = err?.message || "Something went wrong";
      snackbar?.show({
        title: msg,
        type: "error",
      });
    }
  };

  const deleteLeadSource = async (leadSource: number) => {
    try {
      const response: IResponse = await removeLeadSource(leadSource);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.leadSources]);
        snackbar?.show({
          title: response?.message,
          type: "success",
        });
      }
    } catch (err: any) {
      const msg = err?.message || "Something went wrong";
      snackbar?.show({
        title: msg,
        type: "error",
      });
    }
  };

  return {
    trySave,
    deleteLeadSource,
  };
};

export { useApiActions };
