/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { ILeadSourceRequest } from "../query/useApiAction";

const defaultValues: ILeadSourceRequest = {
  id: 0,
  leadSourceName: "",
};

const schema = Yup.object().shape({
  leadSourceName: Yup.string().required(ErrorMessages.leadSource.name),
});

const useLeadSourceForm = (
  onSubmit: (
    values: ILeadSourceRequest,
    formikHelpers: FormikHelpers<ILeadSourceRequest>,
  ) => void | Promise<unknown>,
  initialValues: ILeadSourceRequest = defaultValues,
) => {
  return useFormik<ILeadSourceRequest>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useLeadSourceForm;
