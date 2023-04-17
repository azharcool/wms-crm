import { FormikHelpers, useFormik } from "formik";

export interface IManageBillingAddressData {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}
export interface ManageBillingAddressForm {
  manageBillingAddressData: IManageBillingAddressData[];
}

export const manageBillingAddressForm: ManageBillingAddressForm = {
  manageBillingAddressData: [
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

interface IManageBillingAddressForm {
  onSubmit: (
    values: ManageBillingAddressForm,
    FormikHelpers: FormikHelpers<ManageBillingAddressForm>,
  ) => void | Promise<unknown>;
  initialValues: ManageBillingAddressForm;
}

const useManageBillingAddressForm = (props: IManageBillingAddressForm) => {
  const { initialValues, onSubmit } = props;
  return useFormik({
    initialValues,
    onSubmit,
  });
};

export default useManageBillingAddressForm;
