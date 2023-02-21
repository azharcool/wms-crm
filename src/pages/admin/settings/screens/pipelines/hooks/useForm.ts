/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { IPipelineRequest } from "../query/useApiAction";

const defaultValues: IPipelineRequest = {
  id: 0,
  stageName: "",
};

const schema = Yup.object().shape({
  stageName: Yup.string().required(ErrorMessages.pipeline.name),
});

const usePipelineForm = (
  onSubmit: (
    values: IPipelineRequest,
    formikHelpers: FormikHelpers<IPipelineRequest>,
  ) => void | Promise<unknown>,
  initialValues: IPipelineRequest = defaultValues,
) => {
  return useFormik<IPipelineRequest>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default usePipelineForm;
