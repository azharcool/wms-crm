import { FormikHelpers, useFormik } from "formik";

export interface AddBillingAddressForm {
  billingFirstName: string;
  billingLastName: string;
  billingAddress: string;
  billingCity: string;
  billingZipCode: string;
  billingCountry: string;
}

export const addBillingAddressForm: AddBillingAddressForm = {
  billingFirstName: "",
  billingLastName: "",
  billingAddress: "",
  billingCity: "",
  billingZipCode: "",
  billingCountry: "",
};

interface IuseAddBillingAddressForm {
  onSubmit: (
    values: AddBillingAddressForm,
    formikHelpers: FormikHelpers<AddBillingAddressForm>,
  ) => void | Promise<unknown>;
  initialValues: AddBillingAddressForm;
}

const useAddBillingAddressForm = (props: IuseAddBillingAddressForm) => {
  const { initialValues, onSubmit } = props;
  return useFormik({
    initialValues,
    onSubmit,
  });
};

export default useAddBillingAddressForm;
