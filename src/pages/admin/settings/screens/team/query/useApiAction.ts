import { useSnackbar } from "components/snackbar";
import { IResponse } from "constants/interfaces";
import { useQueryClient } from "react-query";
import { activeInactive, removeUser, saveUser } from "services/team.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IUserRequest {
  id?: number;
  fullName: string;
  roleId: string | number;
  email: string;
  password: string;
  mobileNumber: string;
  address: string;
}

const useApiActions = () => {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const trySave = async (values: IUserRequest) => {
    try {
      const response: IResponse = await saveUser(values);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.users]);
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

  const toggleUser = async (screenId: number) => {
    try {
      const response: IResponse = await activeInactive(screenId);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.users]);
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

  const deleteUser = async (screenId: number) => {
    try {
      const response: IResponse = await removeUser(screenId);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.users]);
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
    toggleUser,
    deleteUser,
  };
};

export { useApiActions };
