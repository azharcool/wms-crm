import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface AddAdjustmentForm {
  operations: string | undefined;
  name: string;
}

export const adjustmentInitialValues: AddAdjustmentForm = {
  name: "",
  operations: "",
};

interface IAddAdjustmentForm {
  initialValues: AddAdjustmentForm;
  onSubmit: (
    values: AddAdjustmentForm,
    formikHelpers: FormikHelpers<AddAdjustmentForm>,
  ) => void | Promise<unknown>;
}

const Schema = Yup.object().shape({
  name: Yup.string().required("Please enter name"),
  operations: Yup.string().required("Please enter name"),
});

const useAddAdjustmentForm = (props: IAddAdjustmentForm) => {
  const { initialValues, onSubmit } = props;
  return useFormik({
    initialValues,
    onSubmit,
    validationSchema: Schema,
  });
};

export default useAddAdjustmentForm;
