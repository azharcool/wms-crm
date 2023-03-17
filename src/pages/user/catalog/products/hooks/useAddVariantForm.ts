import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface AddVariantForm {
  name: string;
  sku: string;
  type: string;
  barcode: string;
  description: string;
  uniqueBarcoding: string;
  quantity: string;
  UoM: string;
  supply: string;
  category: string;
  brand: string;
  tags: string;
  height: string;
  width: string;
  length: string;
  weigth: string;
  strategy: string;
  minExpiryDays: string;
  trackSerialNumbers: string;
  trackExpiryDates: string;
  syncSupplyPrice: string;
}

interface IuseAddProductForm {
  onSubmit: (
    values: AddVariantForm,
    formikHelpers: FormikHelpers<AddVariantForm>,
  ) => void | Promise<unknown>;
  initialValues: AddVariantForm;
}

const validationSchema = Yup.object().shape({});

const deafultValues: AddVariantForm = {
  name: "",
  sku: "",
  type: "",
  barcode: "",
  description: "",
  uniqueBarcoding: "",
  quantity: "",
  UoM: "",
  supply: "",
  category: "",
  brand: "",
  tags: "",
  height: "",
  width: "",
  length: "",
  weigth: "",
  strategy: "",
  minExpiryDays: "",
  trackSerialNumbers: "",
  trackExpiryDates: "",
  syncSupplyPrice: "",
};
function useAddVariantForm({
  onSubmit,
  initialValues = deafultValues,
}: IuseAddProductForm) {
  return useFormik<AddVariantForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useAddVariantForm;
