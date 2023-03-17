import { useSnackbar } from "components/snackbar";
import useDecodedData from "hooks/useDecodedData";
import { addProduct } from "services/product.services";
import { IAddProductRequestRoot } from "types/catalog/products/addProductRequest";

function useProductAction() {
  const snackbar = useSnackbar();
  const userDecoded = useDecodedData();

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

  return {
    addProductAction,
  };
}

export default useProductAction;
