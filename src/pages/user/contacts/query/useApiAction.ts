import { useSnackbar } from "components/snackbar";
import ErrorMessages from "constants/ErrorMessages";
import { IResponse } from "constants/interfaces";
import useDecodedData from "hooks/useDecodedData";
import { useQueryClient } from "react-query";
import {
  deleteBulkContact,
  removeContact,
  saveContact,
  savePreference,
} from "services/contacts.service";
import { deleteMyList, saveMyList } from "services/myList.service";
import { saveUser } from "services/team.service";
import { QueryKeys } from "utils/QueryKeys";
import { AddMyListRoot } from "../components/types/AddMyListRequest";
import { IContactAddRoot } from "../components/types/ContactAddRequest";

export interface IPreference {
  preferenceName: string;
  preferences: string;
}

const useApiActions = () => {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();
  const decode = useDecodedData();
  const tryCreate = async (values: any) => {
    try {
      const response: IResponse = await saveUser(values);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.users]);
        snackbar?.show({
          title: ErrorMessages.team.success,
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

  const trySavePreferences = async (values: IPreference) => {
    try {
      await savePreference({
        ...values,
        userId: Number(decode.id),
      });
    } catch (err: any) {
      const msg = err.message || "Something went wrong";
      snackbar?.show({
        title: msg,
        type: "error",
      });
    }
  };
  const addContactAction = async (data: IContactAddRoot): Promise<boolean> => {
    try {
      const response = await saveContact({
        ...data,
        recordOwnerId: 0,
        userId: Number(decode?.id),
      });
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.contacts]);
        snackbar?.show({
          title: response?.message,
          type: "success",
        });
        return true;
      }
    } catch (err: any) {
      const msg = err?.message || "Something went wrong";
      snackbar?.show({
        title: msg,
        type: "error",
      });
    }
    return false;
  };

  const addMyListAction = async (data: AddMyListRoot): Promise<boolean> => {
    try {
      const response = await saveMyList(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.contacts]);
        queryClient.invalidateQueries([QueryKeys.myList]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
      return false;
    } catch (err: any) {
      const msg = err?.message || "Something went wrong";
      snackbar?.show({
        title: msg,
        type: "error",
      });
    }
    return false;
  };

  const removeMyListAction = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteMyList(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.myList]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
      return false;
    } catch (err: any) {
      const msg = err?.message || "Something went wrong";
      snackbar?.show({
        title: msg,
        type: "error",
      });
    }
    return false;
  };

  const bulkRemoveContacts = async (data: any): Promise<boolean> => {
    try {
      const response = await deleteBulkContact(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.contacts]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
      return false;
    } catch (err: any) {
      const msg = err?.message || "Something went wrong";
      snackbar?.show({
        title: msg,
        type: "error",
      });
    }
    return false;
  };

  const removeContactAction = async (id: number): Promise<boolean> => {
    try {
      const response = await removeContact(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.contacts]);
        snackbar?.show({
          title: response.message,
          type: "warning",
        });
        return true;
      }
      return false;
    } catch (err: any) {
      const msg = err?.message || "Something went wrong";
      snackbar?.show({
        title: msg,
        type: "error",
      });
    }
    return false;
  };

  return {
    trySavePreferences,
    tryCreate,
    addContactAction,
    addMyListAction,
    removeMyListAction,
    removeContactAction,
    bulkRemoveContacts,
  };
};

export { useApiActions };
