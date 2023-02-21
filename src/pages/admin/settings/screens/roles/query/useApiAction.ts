import { useSnackbar } from "components/snackbar";
import { IResponse } from "constants/interfaces";
import { useQueryClient } from "react-query";
import { removeRole, saveRole } from "services/roles.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IRoleRequest {
  id?: number;
  roleName: string;
}

const useApiActions = () => {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const trySave = async (values: IRoleRequest) => {
    try {
      const response: IResponse = await saveRole(values);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.roles]);
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

  const deleteRole = async (role: number) => {
    try {
      const response: IResponse = await removeRole(role);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.roles]);
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
    deleteRole,
  };
};

export { useApiActions };
