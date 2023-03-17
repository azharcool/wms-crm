import { useSnackbar } from "components/snackbar";
import useDecodedData from "hooks/useDecodedData";
import { addCategory } from "services/categories.services";
import { IAddCategoriesRequestRoot } from "types/catalog/catagories/addCategoriesRequest";

function useCategoriesAction() {
  const snackbar = useSnackbar();
  const userDecoded = useDecodedData();

  const addCategoriesAction = async (
    data: IAddCategoriesRequestRoot,
  ): Promise<string> => {
    try {
      const response = await addCategory(data);
      if (response.statusCode === 200) {
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return response?.categoryId?.toString();
      }
      return "";
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "success",
      });
      return "";
    }
  };

  return {
    addCategoriesAction,
  };
}

export default useCategoriesAction;
