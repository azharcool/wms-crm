import { useSnackbar } from "components/snackbar";
import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { removeAllBrandIds } from "redux/catalog/brandSlice";
import {
  addBrand,
  bulkDeleteBrand,
  deleteBrand,
  editBrand,
} from "services/brand.services";
import { IAddBrandRequestRoot } from "types/catalog/brands/addBrandRequest";
import { QueryKeys } from "utils/QueryKeys";

function useBrandAction() {
  const snackbar = useSnackbar();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const addBrandAction = async (
    data: IAddBrandRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await addBrand(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllBrand]);
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

  const editBrandAction = async (
    data: IAddBrandRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await editBrand(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllBrand]);
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

  const deleteBrandAsync = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteBrand(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllBrand]);
        dispatch(removeAllBrandIds());
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

  const bulkDeleteBrandAsync = async (ids: string): Promise<boolean> => {
    try {
      const response = await bulkDeleteBrand(ids);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllBrand]);
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
    addBrandAction,
    deleteBrandAsync,
    editBrandAction,
    bulkDeleteBrandAsync,
  };
}

export default useBrandAction;
