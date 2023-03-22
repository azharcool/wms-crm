import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface AddBundleCompForm {
  userId: number;
  bundleId?: number;
  productId: number;
  productVariantId: number;
  unitPrice: number;
  conditionCode: string;
  discount: number;
  qty: number;
  total: number;
}

interface IuseAddBundleForm {
  onSubmit: (
    values: AddBundleCompForm,
    formikHelpers: FormikHelpers<AddBundleCompForm>,
  ) => void | Promise<unknown>;
  initialValues: AddBundleCompForm;
}



const deafultValues: AddBundleCompForm = {
  userId: 0,
  bundleId: 0,
  productId: 1,
  productVariantId: 0,
  unitPrice: 0,
  conditionCode: "",
  discount: 0,
  qty: 0,
  total: 0,
};

function useAddBundleCompositionForm({
  onSubmit,
  initialValues = deafultValues,
}: IuseAddBundleForm) {
  return useFormik<AddBundleCompForm>({
    initialValues,
    onSubmit,
  });
}

export default useAddBundleCompositionForm;
