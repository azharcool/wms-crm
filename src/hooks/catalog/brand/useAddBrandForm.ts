/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IAddBrand {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const defaultValues: IAddBrand = {
  userId: 1,
  id: 1,
  title: "",
  completed: false,
};

const schema = Yup.object().shape({
  // Client Info
  firstName: Yup.string().required(ErrorMessages.edit_contact.firstName),
  lastName: Yup.string().required(ErrorMessages.edit_contact.lastName),
  phone: Yup.string().required(ErrorMessages.edit_contact.phoneNumber),
  email: Yup.string().required(ErrorMessages.edit_contact.email),
  leadStatusId: Yup.string().required(ErrorMessages.edit_contact.leadStatus),
  rate: Yup.string().required(ErrorMessages.edit_contact.leadStatus),
});

const useEditContactForm = (
  onSubmit: (
    values: IAddBrand,
    formikHelpers: FormikHelpers<IAddBrand>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  return useFormik<IAddBrand>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useEditContactForm;
