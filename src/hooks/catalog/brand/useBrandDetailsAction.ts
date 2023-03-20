import { useSnackbar } from "components/snackbar";
import useDecodedData from "hooks/useDecodedData";
import { BrandDetailAction } from "services/brand.services";
import { IAddBrandRequestRoot } from "types/catalog/brands/addBrandRequest";

function useBrandDetailAction() {
  const snackbar = useSnackbar();
  const userDecoded = useDecodedData();

  const addBrandDetailActionFunc = async (
    data: IAddBrandRequestRoot,
  ): Promise<string> => {
    try {
      const response = await BrandDetailAction(data);
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
    addBrandDetailActionFunc,
  };
}

export default useBrandDetailAction;
