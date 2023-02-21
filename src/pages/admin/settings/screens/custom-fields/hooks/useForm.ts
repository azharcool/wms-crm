/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { IFormBuilderRequest } from "../query/useApiAction";

const defaultValues: IFormBuilderRequest = {
  id: 0,
  label: "",
  options: [],
  isRequired: false,
};

const schema = Yup.object().shape({
  label: Yup.string().required(ErrorMessages.formBuilder.label),
});

const useFormBuilderForm = (
  onSubmit: (
    values: IFormBuilderRequest,
    formikHelpers: FormikHelpers<IFormBuilderRequest>,
  ) => void | Promise<unknown>,
  initialValues: IFormBuilderRequest = defaultValues,
) => {
  return useFormik<IFormBuilderRequest>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useFormBuilderForm;
