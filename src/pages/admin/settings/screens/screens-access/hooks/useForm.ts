/**
 * @format
 */
import { FormikHelpers, useFormik } from "formik";
import { IScreenAccessRequest } from "../query/useApiAction";

const defaultValues: IScreenAccessRequest = {
  roleId: 0,
  screens: [],
};

const useScreenForm = (
  onSubmit: (
    values: IScreenAccessRequest,
    formikHelpers: FormikHelpers<IScreenAccessRequest>,
  ) => void | Promise<unknown>,
  initialValues: IScreenAccessRequest = defaultValues,
) => {
  return useFormik<IScreenAccessRequest>({
    initialValues,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useScreenForm;
