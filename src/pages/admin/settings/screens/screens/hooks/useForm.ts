/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { IScreenRequest } from "../query/useApiAction";

const defaultValues: IScreenRequest = {
  id: 0,
  screenName: "",
  screenCode: "",
  screenUrl: "",
};

const schema = Yup.object().shape({
  screenName: Yup.string().required(ErrorMessages.screens.name),
  screenCode: Yup.string().required(ErrorMessages.screens.code),
  screenUrl: Yup.string().required(ErrorMessages.screens.url),
  // .matches(URL_REGEX, ErrorMessages.screens.invalid_url),
});

const useScreenForm = (
  onSubmit: (
    values: IScreenRequest,
    formikHelpers: FormikHelpers<IScreenRequest>,
  ) => void | Promise<unknown>,
  initialValues: IScreenRequest = defaultValues,
) => {
  return useFormik<IScreenRequest>({
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
