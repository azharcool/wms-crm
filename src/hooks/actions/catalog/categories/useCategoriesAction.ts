import { useSnackbar } from "components/snackbar";
import useDecodedData from "hooks/useDecodedData";
import { useQueryClient } from "react-query";
import {
  addCategory,
  bulkDeleteCategory,
  deleteCategory,
  editCategory,
} from "services/categories.services";
import { IAddCategoriesRequestRoot } from "types/catalog/catagories/addCategoriesRequest";
import { EditCategoryRequestRoot } from "types/catalog/catagories/editCategoryRequest";
import { QueryKeys } from "utils/QueryKeys";

function useCategoriesAction() {
  const snackbar = useSnackbar();
  const userDecoded = useDecodedData();
  const queryClient = useQueryClient();

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
        type: "error",
      });
      return "";
    }
  };

  const editCategoryAction = async (
    data: EditCategoryRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await editCategory(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllCategories]);
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
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

  const deleteCategoryAsync = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteCategory(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllCategories]);
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

  const bulkDeleteCategoriesAsync = async (ids: string): Promise<boolean> => {
    try {
      const response = await bulkDeleteCategory(ids);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllCategories]);
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
    addCategoriesAction,
    deleteCategoryAsync,
    editCategoryAction,
    bulkDeleteCategoriesAsync,
  };
}

export default useCategoriesAction;
