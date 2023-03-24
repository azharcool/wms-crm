import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import {
  addWarehouseArea,
  editWarehouseArea,
} from "services/warehouseArea.services";
import { AddWarehouseAreaRequestRoot } from "types/warehouse/area/addWarehouseAreaRequest";
import { QueryKeys } from "utils/QueryKeys";

function useWarehouseAreaAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const addWarehouseAction = async (
    data: AddWarehouseAreaRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await addWarehouseArea(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllWarehouseArea]);
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
    data: AddWarehouseAreaRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await editWarehouseArea(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllWarehouseArea]);
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
  };
}

export default useWarehouseAreaAction;
