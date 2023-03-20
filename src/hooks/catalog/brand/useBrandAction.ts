import { useSnackbar } from "components/snackbar";
import useDecodedData from "hooks/useDecodedData";
import { addBrandAction } from "services/brand.services";
import { IAddBrandRequestRoot } from "types/catalog/brands/addBrandRequest";

function useBrandAction() {
  const snackbar = useSnackbar();
  const userDecoded = useDecodedData();

  const addBrandActionFunc = async (
    data: IAddBrandRequestRoot,
  ): Promise<string> => {
    try {
      const response = await addBrandAction(data);
      if (response.statusCode === 200) {
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

  return {
    addBrandActionFunc,
  };
}

export default useBrandAction;
