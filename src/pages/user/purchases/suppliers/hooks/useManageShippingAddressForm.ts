import { FormikHelpers, useFormik } from "formik";

export interface IManageShippingAddressData {
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
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zipCode: "",
      country: "",
    },
  ],
};

interface IManageShippingAddressForm {
  onSubmit: (
    values: ManageShippingAddressForm,
    FormikHelpers: FormikHelpers<ManageShippingAddressForm>,
  ) => void | Promise<unknown>;
  initialValues: ManageShippingAddressForm;
}

const useManageShippingAddressForm = (props: IManageShippingAddressForm) => {
  const { initialValues, onSubmit } = props;
  return useFormik({
    initialValues,
    onSubmit,
  });
};

export default useManageShippingAddressForm;
