/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { IRoleRequest } from "../query/useApiAction";

const defaultValues: IRoleRequest = {
  id: 0,
  roleName: "",
};

const schema = Yup.object().shape({
  roleName: Yup.string().required(ErrorMessages.roles.name),
});

const useRoleForm = (
  onSubmit: (
    values: IRoleRequest,
    formikHelpers: FormikHelpers<IRoleRequest>,
  ) => void | Promise<unknown>,
  initialValues: IRoleRequest = defaultValues,
) => {
  return useFormik<IRoleRequest>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useRoleForm;
