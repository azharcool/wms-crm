import { useSnackbar } from "components/snackbar";
import { IResponse } from "constants/interfaces";
import useDecodedData from "hooks/useDecodedData";
import { saveCustomFields } from "services/customFields.service";

export interface ICustomFields {
  id?: string | number;
  companyId?: string | number;
  contactId?: string | number;
  userId?: string | number;
  customField?: string;
}

export interface IFormBuilderRequest {
  id?: number;
  label: string;
  options?: any[];
  isRequired: boolean;
}
const useApiActions = () => {
  const snackbar = useSnackbar();
  const decode = useDecodedData();

  const trySaveCustomFields = async (values: ICustomFields) => {
    try {
      const response: IResponse = await saveCustomFields({
        ...values,
        userId: Number(decode.id),
        companyId: 1,
      });
      if (response.statusCode === 200) {
        snackbar?.show({
          title: response?.message,
          type: "success",
        });
      } else {
        snackbar?.show({
          title: response?.message,
          type: "error",
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
    trySaveCustomFields,
  };
};

export { useApiActions };
