/**
 * @format
 */
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IEditContactInfo {
  id?: number;
  phone: string;
  email: string;
}

const defaultValues: IEditContactInfo = {
  id: 0,
  phone: "",
  email: "",
};

const schema = Yup.object().shape({
  //   phone: Yup.string().required(ErrorMessages.edit_contact.phoneNumber),
  //   email: Yup.string().required(ErrorMessages.edit_contact.email),
});

const useEContactInfoForm = (
  onSubmit: (
    values: IEditContactInfo,
    formikHelpers: FormikHelpers<IEditContactInfo>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  return useFormik<IEditContactInfo>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useEContactInfoForm;
