import { useSnackbar } from "components/snackbar";
import useDecodedData from "hooks/useDecodedData";
import { putBrandDetail } from "services/brand.services";
import { IAddBrandRequestRoot } from "types/catalog/brands/addBrandRequest";

function useBrandDetail() {
  const snackbar = useSnackbar();
  const userDecoded = useDecodedData();

  const addBrandDetailFunc = async (
    data: IAddBrandRequestRoot,
  ): Promise<string> => {
    try {
      const response = await putBrandDetail(data);
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
    addBrandDetailFunc,
  };
}

export default useBrandDetail;
