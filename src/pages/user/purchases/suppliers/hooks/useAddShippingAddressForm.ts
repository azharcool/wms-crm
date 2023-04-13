import { FormikHelpers, useFormik } from "formik";

export interface AddShippingAddressForm {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

export const addShippingAddressForm: AddShippingAddressForm = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  zipCode: "",
  country: "",
};

interface IuseAddShippingAddressForm {
  onSubmit: (
    values: AddShippingAddressForm,
    formikHelpers: FormikHelpers<AddShippingAddressForm>,
  ) => void | Promise<unknown>;
  initialValues: AddShippingAddressForm;
}

const useAddShippingAddressForm = (props: IuseAddShippingAddressForm) => {
  const { initialValues, onSubmit } = props;
  return useFormik({
    initialValues,
    onSubmit,
  });
};

export default useAddShippingAddressForm;
