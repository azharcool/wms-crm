import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface ManageStockCount {
  warehouse: string;
  area: string;
  zone: string;
}

interface IuseManageStockCount {
  onSubmit: (
    values: ManageStockCount,
    formikHelpers: FormikHelpers<ManageStockCount>,
  ) => void | Promise<unknown>;
  initialValues: ManageStockCount;
}

const validationSchema = Yup.object().shape({
  warehouseId: Yup.string().required(
    ErrorMessages.add_stockcount.warehouseName,
  ),
  zoneId: Yup.string().required(ErrorMessages.add_stockcount.zone),
  areaId: Yup.string().required(ErrorMessages.add_stockcount.area),
});

const defaultValues: ManageStockCount = {
  warehouse: "",
  area: "",
  zone: "",
};

function useManageStockCount({
  onSubmit,
  initialValues = defaultValues,
}: IuseManageStockCount) {
  return useFormik<ManageStockCount>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useManageStockCount;
