import { useSnackbar } from "components/snackbar";
import { addVariant } from "services/variant.services";
import { IAddVariantRequestRoot } from "types/catalog/variants/addVariantRequest";

function useVariantAction() {
  const snackbar = useSnackbar();

  const addVariantAction = async (
    data: IAddVariantRequestRoot,
  ): Promise<boolean> => {
    try {
      const response = await addVariant(data);
      if (response.statusCode === 200) {
        snackbar?.show({
          title: response.message,
          type: "success",
        });
        return true;
      }
      return false;
    } catch (error: any) {
      snackbar?.show({
        title: error.message,
        type: "success",
      });
      return false;
    }
  };

  return {
    addVariantAction,
  };
}

export default useVariantAction;
