/**
 * @format
 */
import { ONLY_TEXT, PASSWORD_REGEX } from "constants/constants";
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { IUserRequest } from "../query/useApiAction";

const defaultValues: IUserRequest = {
  fullName: "",
  address: "",
  roleId: "",
  email: "",
  password: "",
  mobileNumber: "",
};

const useUserForm = (
  onSubmit: (
    values: IUserRequest,
    formikHelpers: FormikHelpers<IUserRequest>,
  ) => void | Promise<unknown>,
  initialValues: IUserRequest = defaultValues,
) => {
  let validation: any = null;
  if (initialValues?.id) {
    validation = {
      fullName: Yup.string()
        .required(ErrorMessages.team.fullName)
        .matches(ONLY_TEXT, ErrorMessages.team.validate.fullName),
      roleId: Yup.number().required(ErrorMessages.team.role),
      email: Yup.string()
        .email(ErrorMessages.team.validate.email)
        .required(ErrorMessages.team.email),
    };
  } else {
    validation = {
      fullName: Yup.string()
        .matches(ONLY_TEXT, ErrorMessages.team.validate.fullName)
        .required(ErrorMessages.team.fullName),
      roleId: Yup.number().required(ErrorMessages.team.role),
      email: Yup.string()
        .email(ErrorMessages.team.validate.email)
        .required(ErrorMessages.team.email),
      password: Yup.string()
        .required(ErrorMessages.team.password)
        .matches(PASSWORD_REGEX, ErrorMessages.team.password_matches),
    };
  }
  const schema = Yup.object().shape(validation);
  return useFormik<IUserRequest>({
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
