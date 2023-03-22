import { useSnackbar } from "components/snackbar";
import useDecodedData from "hooks/useDecodedData";
import { useQueryClient } from "react-query";
import {
  addBrand,
  bulkDeleteBrand,
  deleteBrand,
} from "services/brand.services";
import { IAddBrandRequestRoot } from "types/catalog/brands/addBrandRequest";
import { QueryKeys } from "utils/QueryKeys";

function useBrandAction() {
  const snackbar = useSnackbar();
  const userDecoded = useDecodedData();
  const queryClient = useQueryClient();

  const addBrandAction = async (
    data: IAddBrandRequestRoot,
  ): Promise<string> => {
    try {
      const response = await addBrand(data);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllBrand]);
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

  const deleteBrandAsync = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteBrand(id);
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
    bulkDeleteBrandAsync,
  };
}

export default useBrandAction;
