import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import { addWarehouse } from "services/warehouse.services";
import { IAddWarehouseRequestRoot } from "types/warehouse/addWarehouseRequest";
import { QueryKeys } from "utils/QueryKeys";

function useWarehouseAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const addWarehouseAction = async (
    data: IAddWarehouseRequestRoot,
  ): Promise<string> => {
    try {
      const response = await addWarehouse(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllWarehouse]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
      }
      return "";
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
      return "";
    }
  };

  return {
    addWarehouseAction,
  };
}

export default useWarehouseAction;
