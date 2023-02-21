/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IEditContact {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  leadStatusId?: number;
  companyName?: string;
  companyWebsite?: string;
}

const defaultValues: IEditContact = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  leadStatusId: 0,
};

const schema = Yup.object().shape({
  // Client Info
  firstName: Yup.string().required(ErrorMessages.edit_contact.firstName),
  lastName: Yup.string().required(ErrorMessages.edit_contact.lastName),
  phone: Yup.string().required(ErrorMessages.edit_contact.phoneNumber),
  email: Yup.string().required(ErrorMessages.edit_contact.email),
  leadStatusId: Yup.string().required(ErrorMessages.edit_contact.leadStatus),
});

const useEditContactForm = (
  onSubmit: (
    values: IEditContact,
    formikHelpers: FormikHelpers<IEditContact>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  return useFormik<IEditContact>({
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
