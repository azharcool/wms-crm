import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import { deleteUnit } from "services/unit.service";
import { QueryKeys } from "utils/QueryKeys";

function useUnitActions() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();

  const deleteUnitAction = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteUnit(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllPaginationUnit]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "success",
      });
    }
    return false;
  };

  return { deleteUnitAction };
}

export default useUnitActions;
