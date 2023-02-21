/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { IPermissionRequest } from "../query/useApiAction";

const defaultValues: IPermissionRequest = {
  id: 0,
  permissions: "",
  permissionDescription: "",
  permissionCode: "",
  screenId: 0,
  screenUrl: "",
  screenCode: "",
  isScreen: false,
};

const useScreenForm = (
  onSubmit: (
    values: IPermissionRequest,
    formikHelpers: FormikHelpers<IPermissionRequest>,
  ) => void | Promise<unknown>,
  initialValues: IPermissionRequest = defaultValues,
) => {
  let validation: any = null;
  if (initialValues.isScreen) {
    validation = {
      permissions: Yup.string().required(ErrorMessages.permissions.permission),
      permissionDescription: Yup.string().required(
        ErrorMessages.permissions.permissionDesc,
      ),
      permissionCode: Yup.string().required(
        ErrorMessages.permissions.permissionCode,
      ),
      screenId: Yup.string().required(ErrorMessages.permissions.screen),
      // .matches(URL_REGEX, ErrorMessages.screens.invalid_url),
      screenCode: Yup.string().required(ErrorMessages.permissions.screenCode),
      screenUrl: Yup.string().required(ErrorMessages.permissions.screenUrl),
    };
  } else {
    validation = {
      permissions: Yup.string().required(ErrorMessages.permissions.permission),
      permissionDescription: Yup.string().required(
        ErrorMessages.permissions.permissionDesc,
      ),
      permissionCode: Yup.string().required(
        ErrorMessages.permissions.permissionCode,
      ),
      screenId: Yup.string().required(ErrorMessages.permissions.screen),
      // .matches(URL_REGEX, ErrorMessages.screens.invalid_url),
    };
  }
  const schema = Yup.object().shape(validation);
  return useFormik<IPermissionRequest>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useScreenForm;
