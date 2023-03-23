import { useSnackbar } from "components/snackbar";
import useDecodedData from "hooks/useDecodedData";
import { useQueryClient } from "react-query";
import { addBrandDetail } from "services/brand.services";
import { IAddBrandRequestRoot } from "types/catalog/brands/addBrandRequest";
import { QueryKeys } from "utils/QueryKeys";

function useBrandDetail() {
  const snackbar = useSnackbar();
  const userDecoded = useDecodedData();
  const queryClient = useQueryClient();

  const addBrandDetailFunc = async (
    data: IAddBrandRequestRoot,
  ): Promise<string> => {
    try {
      const response = await addBrandDetail(data);
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

  return {
    addBrandDetailFunc,
  };
}

export default useBrandDetail;
