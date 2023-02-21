import { useSnackbar } from "components/snackbar";
import { IResponse } from "constants/interfaces";
import { useQueryClient } from "react-query";
import { removePermission, savePermission } from "services/permission.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IPermissionRequest {
  id?: number;
  permissions: string;
  permissionDescription: string;
  permissionCode: string;
  screenId: number;
  screenUrl: string;
  screenCode: string;
  isScreen?: boolean;
}

const useApiActions = () => {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const trySave = async (values: IPermissionRequest) => {
    try {
      const response: IResponse = await savePermission(values);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.permissions]);
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

  const deletePermission = async (permissionId: number) => {
    try {
      const response: IResponse = await removePermission(permissionId);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.permissions]);
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
    deletePermission,
  };
};

export { useApiActions };
