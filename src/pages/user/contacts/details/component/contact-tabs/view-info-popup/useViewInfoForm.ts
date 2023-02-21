/**
 * @format
 */
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IViewInfoForm {
  id?: number;
  contactId?: number;
  googleAddress: string;
  city: string;
  state: string;
  country: string;
  zipCode: string | number;
}

const defaultValues: IViewInfoForm = {
  id: 0,
  contactId: 0,
  googleAddress: "",
  city: "",
  state: "",
  country: "",
  zipCode: "",
};

const schema = Yup.object().shape({
  // googleAddress: Yup.string().required(ErrorMessages.add_contact.googleAddress),
  // city: Yup.string().required(ErrorMessages.add_contact.city),
  // state: Yup.string().required(ErrorMessages.add_contact.state),
  // country: Yup.string().required(ErrorMessages.add_contact.country),
  // zipCode: Yup.string().required(ErrorMessages.add_contact.zipCode),
});

const useViewInfoForm = (
  onSubmit: (
    values: IViewInfoForm,
    formikHelpers: FormikHelpers<IViewInfoForm>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  return useFormik<IViewInfoForm>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useViewInfoForm;
