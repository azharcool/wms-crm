import { useSnackbar } from "components/snackbar";
import { IResponse } from "constants/interfaces";
import { useQueryClient } from "react-query";
import { removePipeline, savePipeline } from "services/pipeline.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IPipelineRequest {
  id?: number;
  stageName: string;
}

const useApiActions = () => {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const trySave = async (values: IPipelineRequest) => {
    try {
      const response: IResponse = await savePipeline(values);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.pipelines]);
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

  const deletePipeline = async (pipelineId: number) => {
    try {
      const response: IResponse = await removePipeline(pipelineId);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.pipelines]);
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
    deletePipeline,
  };
};

export { useApiActions };
