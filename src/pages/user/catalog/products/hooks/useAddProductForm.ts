import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface AddProductForm {
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
    values: AddProductForm,
    formikHelpers: FormikHelpers<AddProductForm>,
  ) => void | Promise<unknown>;
  initialValues: AddProductForm;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("enter product name"),
  sku: Yup.string().required("generate product sku"),
  barcode: Yup.string().required("generate product barcode"),
});

const deafultValues: AddProductForm = {
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
function useAddProductForm({
  onSubmit,
  initialValues = deafultValues,
}: IuseAddProductForm) {
  return useFormik<AddProductForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useAddProductForm;
