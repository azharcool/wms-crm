/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface INotesForm {
  id?: number;
  contactId?: number;
  userId?: number;
  notesdescription: string;
}

const defaultValues: INotesForm = {
  id: 0,
  contactId: 1,
  userId: 1,
  notesdescription: "string",
};

const schema = Yup.object().shape({
  notesdescription: Yup.string().required(ErrorMessages.notes.addNotes),
});

const useNotesForm = (
  onSubmit: (
    values: INotesForm,
    formikHelpers: FormikHelpers<INotesForm>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  return useFormik<INotesForm>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useNotesForm;
