import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface AddBundleForm {
  name: string;
  sku: string;
  barcode: string;
  description: string;
  categorys:string;
  brand: string; 
  tags: string; 
}

interface IuseAddBundleForm {
  onSubmit: (
    values: AddBundleForm,
    formikHelpers: FormikHelpers<AddBundleForm>,
  ) => void | Promise<unknown>;
  initialValues: AddBundleForm;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("enter bundle name"),
  sku: Yup.string().required("generate bundle sku"),
});

const deafultValues: AddBundleForm = {
  name: "",
  sku: "",
  barcode: "",
  description: "",
  categorys:"",
  brand: "",
  tags: ""
};

function useAddBundleForm({
  onSubmit,
  initialValues = deafultValues,
}: IuseAddBundleForm) {
  return useFormik<AddBundleForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useAddBundleForm;
