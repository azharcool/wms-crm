import { useSnackbar } from "components/snackbar";
import { IResponse } from "constants/interfaces";
import { useQueryClient } from "react-query";
import { removeScreen, saveScreen } from "services/screen.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IScreenRequest {
  id?: number;
  screenName: string;
  screenCode: string;
  screenUrl: string;
}

const useApiActions = () => {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const trySave = async (values: IScreenRequest) => {
    try {
      const response: IResponse = await saveScreen(values);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.screens]);
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

  const deleteScreen = async (screenId: number) => {
    try {
      const response: IResponse = await removeScreen(screenId);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.screens]);
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
    deleteScreen,
  };
};

export { useApiActions };
