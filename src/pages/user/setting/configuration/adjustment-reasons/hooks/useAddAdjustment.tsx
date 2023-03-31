import { FormikHelpers,useFormik } from "formik";
import * as Yup from "yup";

export interface AddAdjustmentForm {
  name: string;
  operation: string;
}

const defaultValues: AddAdjustmentForm = {
  name: "",
  operation: "",
};

interface IAddAdjustmentForm {
  onSubmit: (
    values: AddAdjustmentForm,
    formikHelpers: FormikHelpers<AddAdjustmentForm>,
  ) => void | Promise<unknown>;
  initialValues: AddAdjustmentForm;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
  opertaions: Yup.string().required("Please enter name"),
});

function useAddAdjustmentForm({
  onSubmit,
  initialValues = defaultValues,
}: IAddAdjustmentForm) {
  return useFormik<AddAdjustmentForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useAddAdjustmentForm;
