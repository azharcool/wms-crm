import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import { addZone, deleteZone, editZone } from "services/zone.services";
import { AddZoneRequestRoot } from "types/warehouse/zone/addZoneRequest";
import { QueryKeys } from "utils/QueryKeys";

function useZoneAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const addZoneAction = async (data: AddZoneRequestRoot): Promise<boolean> => {
    try {
      const response = await addZone(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllZone]);
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

  const editZoneAction = async (data: AddZoneRequestRoot): Promise<boolean> => {
    try {
      const response = await editZone(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getByIdZone, data.id]);
        queryClient.invalidateQueries([QueryKeys.getAllZone]);
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

  const deleteZoneAction = async (
    id: number,
    warehouseId: number,
  ): Promise<boolean> => {
    try {
      const response = await deleteZone(id, warehouseId);
      if(response.statusCode === 200){
        queryClient.invalidateQueries([QueryKeys.getAllZone])
        snackbar?.show({
          title:response.message,
          type:"success"
        })
        return true
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "error",
      });
    }
    return false
  };

  return {
    addZoneAction,
    editZoneAction,
    deleteZoneAction
  };
}

export default useZoneAction;
