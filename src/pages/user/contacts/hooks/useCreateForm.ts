/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface ICreateForm {
  listName: string;
  listDescription: string;
}

const defaultValues: ICreateForm = {
  listName: "",
  listDescription: "",
};

const schema = Yup.object().shape({
  listName: Yup.string().required(ErrorMessages.create_contact.listName),
  listDescription: Yup.string().required(
    ErrorMessages.create_contact.listDescription,
  ),
});

const useCreateForm = (
  onSubmit: (
    values: ICreateForm,
    formikHelpers: FormikHelpers<ICreateForm>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  return useFormik<ICreateForm>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useCreateForm;
