import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface EditVariantForm {
  id: number;
  userId: number;
  productId?: number;
  optionName: string;
  value: string;
  variantName: string;
  sku: string;
  barcode: string;
  supplyPrice: number;
  mrp: number;
  retailPrice: number;
  height: number;
  width: number;
  length: number;
  weight: number;
  crossDocking: boolean;
  enable: boolean;
  image?: string[];
  oldImage?: string[];
}

interface IuseEditVariantForm {
  onSubmit: (
    values: EditVariantForm,
    formikHelpers: FormikHelpers<EditVariantForm>,
  ) => void | Promise<unknown>;
  initialValues: EditVariantForm;
}

const validationSchema = Yup.object().shape({});

const deafultValues: EditVariantForm = {
  id: 0,
  userId: 0,
  productId: 0,
  optionName: "",
  value: "",
  variantName: "",
  sku: "",
  barcode: "",
  supplyPrice: 0,
  mrp: 0,
  retailPrice: 0,
  height: 0,
  width: 0,
  length: 0,
  weight: 0,
  crossDocking: true,
  enable: true,
  image: [],
  oldImage: [],
};
function useEditVariantForm({
  onSubmit,
  initialValues = deafultValues,
}: IuseEditVariantForm) {
  return useFormik<EditVariantForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useEditVariantForm;
