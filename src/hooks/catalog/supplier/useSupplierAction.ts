import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import {
  addSupplier,
  buldDeleteSupplier,
  deleteSupplier,
  editSupplier,
} from "services/supplier.services";

import { AddSupplierRequestRoot } from "types/catalog/supplier/addSupplierRequest";
import { QueryKeys } from "utils/QueryKeys";

function useSupplierAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const editSupplierAction = async (
    data: AddSupplierRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await editSupplier(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllSupplierWithPagination]);
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

  const addSupplierAction = async (
    data: AddSupplierRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await addSupplier(data);
      if (response.statusCode === 200) {
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

  const deleteSupplierAsync = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteSupplier(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllSupplierWithPagination]);
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

  const bulkDeleteSupplierAsync = async (ids: string): Promise<boolean> => {
    try {
      const response = await buldDeleteSupplier(ids);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllSupplierWithPagination]);
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
    addSupplierAction,
    deleteSupplierAsync,
    bulkDeleteSupplierAsync,
    editSupplierAction,
  };
}

export default useSupplierAction;
