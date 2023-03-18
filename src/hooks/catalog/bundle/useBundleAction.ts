import { IAddBundleRequestRoot } from "types/catalog/bundles/addBundleRequest";
import { useSnackbar } from "components/snackbar";
import useDecodedData from "hooks/useDecodedData";
import { addProduct } from "services/product.services";
import { addBundle } from "services/bundle.services";

function useBundleAction() {
  const snackbar = useSnackbar();
  const userDecoded = useDecodedData();

  const addBundleAction = async (
    data: IAddBundleRequestRoot,
  ): Promise<string> => {
    try {
      const response = await addBundle(data);
      if (response.statusCode === 200) {
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return "";
        // return response?.productId?.toString();
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
    addBundleAction
  };
}

export default useBundleAction;
