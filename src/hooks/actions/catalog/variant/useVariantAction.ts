import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import {
  addVariant,
  deleteVariant,
  editVariant,
} from "services/variant.services";
import { IAddVariantRequestRoot } from "types/catalog/variants/addVariantRequest";
import { IEditVariantRequestRoot } from "types/catalog/variants/editVariantRequest";
import { QueryKeys } from "utils/QueryKeys";

function useVariantAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const addVariantAction = async (
    data: IAddVariantRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await addVariant(data);
      if (response.statusCode === 200) {
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
      return false;
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "success",
      });
      return false;
    }
  };

  const editVariantAction = async (
    data: IEditVariantRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await editVariant(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getByIdVariant, data.id]);
        queryClient.invalidateQueries([QueryKeys.getAllVariant]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
      return false;
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "success",
      });
      return false;
    }
  };

  const deleteVariantAsync = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteVariant(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllVariant]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false;
  };

  return {
    addVariantAction,
    editVariantAction,
    deleteVariantAsync,
  };
}

export default useVariantAction;
