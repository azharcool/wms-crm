import { useSnackbar } from "components/snackbar";
import ErrorMessages from "constants/ErrorMessages";
import { IResponse } from "constants/interfaces";
import useDecodedData from "hooks/useDecodedData";
import { useQueryClient } from "react-query";
import {
  completeActivity,
  deleteActivity,
  saveActivity,
} from "services/activity.service";
import {
  changeLeadOwnerByContactId,
  changeLeadSourceByContactId,
  deleteNote,
  editContact,
  saveAddress,
  saveNote,
} from "services/contacts.service";
import { QueryKeys } from "utils/QueryKeys";
import { IAddActivityForm } from "../../hooks/useAddActivityForm";
import { IViewInfoForm } from "../component/contact-tabs/view-info-popup/useViewInfoForm";
import { INotesForm } from "../component/notes/useNotesForm";
import { IAddress } from "../hooks/useAddressForm";
import { IEditContact } from "../hooks/useEditContactForm";

export interface IPreference {
  preferenceName: string;
  preferences: string;
}

const useApiActions = () => {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();
  const decode = useDecodedData();

  const trySaveActivity = async (values: IAddActivityForm) => {
    try {
      const newValues = {
        ...values,
        // time: `${values.date}T${values.time}:00Z`,
        // date: `values.date`,
        durationCount: Number(values.durationCount || 0),
      };
      const response: IResponse = await saveActivity({
        ...newValues,
        userId: Number(decode.id),
      });
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([
          QueryKeys.activities,
          values?.contactId,
        ]);
        queryClient.invalidateQueries([QueryKeys.allCounts, values?.contactId]);
        queryClient.invalidateQueries([
          QueryKeys.activities,
          values?.contactId,
        ]);
        queryClient.invalidateQueries([
          QueryKeys.getAllActivities,
          values?.contactId,
        ]);
        snackbar?.show({
          title: values?.id
            ? ErrorMessages?.activity.updated
            : ErrorMessages?.activity.success,

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

  const tryEditContact = async (values: IEditContact) => {
    try {
      const response: IResponse = await editContact({
        ...values,
        userId: Number(decode.id),
      });
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.contacts]);
        queryClient.invalidateQueries([QueryKeys.contacts, values?.id]);
        snackbar?.show({
          title: ErrorMessages.edit_contact.success,
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

  const trySaveAddress = async (values: IAddress | IViewInfoForm) => {
    try {
      const response: IResponse = await saveAddress({
        ...values,
        userId: Number(decode.id),
      });
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.contacts]);
        queryClient.invalidateQueries([QueryKeys.contacts, values?.id]);
        snackbar?.show({
          title: values?.id
            ? ErrorMessages.address.updated
            : ErrorMessages.address.success,
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

  const trySaveNote = async (values: INotesForm) => {
    try {
      const response: IResponse = await saveNote({
        ...values,
        userId: Number(decode.id),
      });
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.notes, values.contactId]);
        snackbar?.show({
          title: values?.id
            ? ErrorMessages.notes.updated
            : ErrorMessages.notes.success,
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

  const tryDeleteNote = async (id: number, contactId: number) => {
    try {
      const response: IResponse = await deleteNote(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.notes, contactId]);
        snackbar?.show({
          title: ErrorMessages.notes.deleted,
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

  const tryDeleteActivity = async (id: number, contactId: number) => {
    try {
      const response: IResponse = await deleteActivity(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.activities, contactId]);
        snackbar?.show({
          title: ErrorMessages.activity.deleted,
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

  const tryCompleteActivity = async (id: number, contactId: number) => {
    try {
      const response: IResponse = await completeActivity(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.activities, contactId]);
        queryClient.invalidateQueries([QueryKeys.getAllActivities, contactId]);
        queryClient.invalidateQueries([QueryKeys.allCounts, contactId]);
        snackbar?.show({
          title: ErrorMessages.activity.updated,
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

  const changeLeadOwner = async (
    salesRepId: number,
    contactId: number,
  ): Promise<boolean> => {
    try {
      const response = await changeLeadOwnerByContactId(salesRepId, contactId);
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

  const changeLeadSource = async (
    leadSourceId: number,
    contactId: number,
  ): Promise<boolean> => {
    try {
      const response = await changeLeadSourceByContactId(
        leadSourceId,
        contactId,
      );
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

  return {
    tryEditContact,
    trySaveAddress,
    trySaveNote,
    tryDeleteNote,
    trySaveActivity,
    tryDeleteActivity,
    tryCompleteActivity,
    changeLeadSource,
    changeLeadOwner,
  };
};

export { useApiActions };
