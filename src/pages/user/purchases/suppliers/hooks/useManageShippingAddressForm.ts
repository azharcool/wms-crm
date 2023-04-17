import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IManageShippingAddressData {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}
export interface ManageShippingAddressForm {
  manageShippingAddressData: IManageShippingAddressData[];
}

export const manageShippingAddressForm: ManageShippingAddressForm = {
  manageShippingAddressData: [
    {
      id: 0,
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zipCode: "",
      country: "",
    },
  ],
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(
    ErrorMessages.add_shipping_billing.firstName,
  ),
  lastName: Yup.string().required(ErrorMessages.add_shipping_billing.lastName),
  address: Yup.string().required(ErrorMessages.add_shipping_billing.address),
  city: Yup.string().required(ErrorMessages.add_shipping_billing.city),
  zipCode: Yup.string().required(ErrorMessages.add_shipping_billing.zipCode),
});

interface IManageShippingAddressForm {
  onSubmit: (
    values: ManageShippingAddressForm,
    FormikHelpers: FormikHelpers<ManageShippingAddressForm>,
  ) => void | Promise<unknown>;
  initialValues: ManageShippingAddressForm;
}

const useManageShippingAddressForm = (props: IManageShippingAddressForm) => {
  const { initialValues, onSubmit } = props;
  return useFormik<ManageShippingAddressForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
};

export default useManageShippingAddressForm;
