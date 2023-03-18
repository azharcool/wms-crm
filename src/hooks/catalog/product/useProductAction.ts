import { useSnackbar } from "components/snackbar";
import useDecodedData from "hooks/useDecodedData";
import { useQueryClient } from "react-query";
import {
  addProduct,
  buldDeleteProduct,
  deleteProduct,
} from "services/product.services";
import { IAddProductRequestRoot } from "types/catalog/products/addProductRequest";
import { QueryKeys } from "utils/QueryKeys";

function useProductAction() {
  const snackbar = useSnackbar();
  const userDecoded = useDecodedData();
  const queryClient = useQueryClient();

  const addProductAction = async (
    data: IAddProductRequestRoot,
  ): Promise<string> => {
    try {
      const response = await addProduct(data);
      if (response.statusCode === 200) {
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return response?.productId?.toString();
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

  const deleteProductAsync = async (id: number): Promise<boolean> => {
    try {
      const response = await deleteProduct(id);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllProduct]);
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

  const bulkDeleteProductAsync = async (ids: string): Promise<boolean> => {
    try {
      const response = await buldDeleteProduct(ids);
      if (response.statusCode === 200) {
        queryClient.invalidateQueries([QueryKeys.getAllProduct]);
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
    addProductAction,
    deleteProductAsync,
    bulkDeleteProductAsync,
  };
}

export default useProductAction;
