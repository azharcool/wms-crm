/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { ILoginRequest } from "../query/useLogin";

const defaultValues: ILoginRequest = {
  email: "",
  password: "",
};

const schema = Yup.object().shape({
  email: Yup.string().required(ErrorMessages.login.email),
  password: Yup.string().required(ErrorMessages.login.password),
});

const useUserForm = (
  onSubmit: (
    values: ILoginRequest,
    formikHelpers: FormikHelpers<ILoginRequest>,
  ) => void | Promise<unknown>,
  initialValues: ILoginRequest = defaultValues,
) => {
  return useFormik<ILoginRequest>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useUserForm;
