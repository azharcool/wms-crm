/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { ILeadStatusRequest } from "../query/useApiAction";

const defaultValues: ILeadStatusRequest = {
  id: 0,
  leadStatusName: "",
};

const schema = Yup.object().shape({
  leadStatusName: Yup.string().required(ErrorMessages.leadStatus.name),
});

const useLeadStatusForm = (
  onSubmit: (
    values: ILeadStatusRequest,
    formikHelpers: FormikHelpers<ILeadStatusRequest>,
  ) => void | Promise<unknown>,
  initialValues: ILeadStatusRequest = defaultValues,
) => {
  return useFormik<ILeadStatusRequest>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useLeadStatusForm;
