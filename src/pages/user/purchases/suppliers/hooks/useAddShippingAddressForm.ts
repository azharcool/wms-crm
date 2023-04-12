import { FormikHelpers, useFormik } from "formik";

export interface AddShippingAddressForm {
  userId: number;
  supplierId: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

interface IuseAddShippingAddressForm {
  onSubmit: (
    values: AddShippingAddressForm,
    formikHelpers: FormikHelpers<AddShippingAddressForm>,
  ) => void | Promise<unknown>;
  initialValues: AddShippingAddressForm;
}

const deafultValues: AddShippingAddressForm = {
  userId: 0,
  supplierId: 0,
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  zipCode: "",
  country: "",
};

function useAddShippingAddressForm({
  onSubmit,
  initialValues = deafultValues,
}: IuseAddShippingAddressForm) {
  return useFormik<AddShippingAddressForm>({
    initialValues,
    onSubmit,
  });
}

export default useAddShippingAddressForm;
