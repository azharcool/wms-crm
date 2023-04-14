import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import {
  addWarehouse,
  bulkDeleteWarehouse,
  deleteWarehouse,
  editWarehouse,
} from "services/warehouse.services";
import { IAddWarehouseRequestRoot } from "types/warehouse/addWarehouseRequest";
import { EditWarehouseRequestRoot } from "types/warehouse/editWarehouseRequestRoot";
import { QueryKeys } from "utils/QueryKeys";

function useWarehouseAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const addWarehouseAction = async (
    data: IAddWarehouseRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await addWarehouse(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllWarehouse]);
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
  const editWarehouseAction = async (
    data: EditWarehouseRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await editWarehouse(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getByIdWarehouse, data.id]);
        queryClient.invalidateQueries([QueryKeys.getAllWarehouse]);
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
  const deleteWarehouseAsync = async (id?: number): Promise<boolean> => {
    try {
      const response = await deleteWarehouse(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllWarehouse]);
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

  const bulkDeleteWarehouseAsync = async (ids: string): Promise<boolean> => {
    try {
      const response = await bulkDeleteWarehouse(ids);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllWarehouse]);
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
    addWarehouseAction,
    editWarehouseAction,
    deleteWarehouseAsync,
    bulkDeleteWarehouseAsync,
  };
}

export default useWarehouseAction;
