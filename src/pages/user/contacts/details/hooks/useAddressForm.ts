/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IAddress {
  id?: number;
  contactId: number;
  googleAddress: string;
  street: string;
  state: string;
  city: string;
  country?: string;
  zipCode: string;
}
const defaultValues: IAddress = {
  id: 0,
  contactId: 0,
  googleAddress: "",
  street: "",
  state: "",
  city: "",
  zipCode: "",
};

const schema = Yup.object().shape({
  googleAddress: Yup.string().required(ErrorMessages.address.address),
});

const useAddContactForm = (
  onSubmit: (
    values: IAddress,
    formikHelpers: FormikHelpers<IAddress>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  return useFormik<IAddress>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useAddContactForm;
