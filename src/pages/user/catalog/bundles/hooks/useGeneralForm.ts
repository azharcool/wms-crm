/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IGeneralForm {
  name: string;
  description: string;
}

const defaultValues: IGeneralForm = {
  name: "",
  description: "",
};

const schema = Yup.object().shape({
  name: Yup.string().required(ErrorMessages.general.name),
  description: Yup.string().required(ErrorMessages.general.description),
});

const useGeneralForm = (
  onSubmit: (
    values: IGeneralForm,
    formikHelpers: FormikHelpers<IGeneralForm>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  return useFormik<IGeneralForm>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useGeneralForm;
