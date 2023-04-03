import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface ManageProductConditionForm {
  code: string;
  condition: string;
  grade: string;
  warranty?: number;
  color: string;
  description: string;
  default: boolean;
}

export const productConditionInitialValues: ManageProductConditionForm = {
  code: "",
  condition: "",
  grade: "",
  color: "",
  description: "",
  default: false,
};

interface IManageProductConditionForm {
  initialValues: ManageProductConditionForm;
  onSubmit: (
    values: ManageProductConditionForm,
    formikHelpers: FormikHelpers<ManageProductConditionForm>,
  ) => void | Promise<unknown>;
}

const Schema = Yup.object().shape({
  code: Yup.string().required("code is required"),
  condition: Yup.string().required("condition is required"),
  grade: Yup.string().required("grade is required"),
});

function useManageProductCondition(props: IManageProductConditionForm) {
  const { initialValues, onSubmit } = props;
  return useFormik({
    initialValues,
    onSubmit,
    validationSchema: Schema,
  });
}

export default useManageProductCondition;
