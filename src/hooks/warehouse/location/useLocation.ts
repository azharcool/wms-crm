import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import { addLocation, editLocation } from "services/location.services";
import { AddLocationRequestRoot } from "types/warehouse/location/addLocationRequest";
import { QueryKeys } from "utils/QueryKeys";

function useLocationAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const addLocationAction = async (
    data: AddLocationRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await addLocation(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllLocation]);
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

  const editLocationAction = async (
    data: AddLocationRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await editLocation(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getByIdLocation, data.id]);
        queryClient.invalidateQueries([QueryKeys.getAllLocation]);
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
    addLocationAction,
    editLocationAction,
  };
}

export default useLocationAction;
