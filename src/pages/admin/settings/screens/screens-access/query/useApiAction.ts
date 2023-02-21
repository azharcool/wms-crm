import { useSnackbar } from "components/snackbar";
import { IResponse } from "constants/interfaces";
import { useQueryClient } from "react-query";
import {
  removeScreenAccess,
  saveScreenAccess,
} from "services/screen-access.service";
import { QueryKeys } from "utils/QueryKeys";

export interface Permission {
  permissionId: number;
}

export interface Screen {
  screenId: number;
  permissions: Permission[];
}

export interface IScreenAccessRequest {
  roleId: number;
  screens: Screen[];
}

const useApiActions = () => {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const trySave = async (values: IScreenAccessRequest) => {
    try {
      const response: IResponse = await saveScreenAccess(values);
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

  const deleteScreenAccess = async (screenId: number) => {
    try {
      const response: IResponse = await removeScreenAccess(screenId);
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
    deleteScreenAccess,
  };
};

export { useApiActions };
