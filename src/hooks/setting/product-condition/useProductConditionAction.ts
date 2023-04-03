import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import {
  addProductCondition,
  deleteProductCondition,
  editProductCondition,
} from "services/productCondition.services";
import { IAddProductConditionRequestRoot } from "types/setting/product-condition/addProductConditionRequest";

import { QueryKeys } from "utils/QueryKeys";

function useProductConditionAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const addProductConditionAction = async (
    data: IAddProductConditionRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await addProductCondition(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllProductCondition]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
      }
      return true;
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
      return false;
    }
  };

  const editProductConditionAction = async (
    data: IAddProductConditionRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await editProductCondition(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllProductCondition]);
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

  const deleteProductConditionAction = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteProductCondition(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllProductCondition]);
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
    addProductConditionAction,
    deleteProductConditionAction,
    editProductConditionAction,
  };
}

export default useProductConditionAction;
