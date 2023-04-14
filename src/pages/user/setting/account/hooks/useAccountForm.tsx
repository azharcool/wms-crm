import { FormikHelpers, useFormik } from "formik";

export interface IAccountForm {
  companyName: string;
  companyType: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  city: string;
  zipCode: string;
  image: string;
  primaryColor: string;
  secondaryColor: string;
  language: string;
  timezone: string;
  currency: string;
  weight: string;
  size: string;
}

interface IuseAccountForm {
  onSubmit: (
    values: IAccountForm,
    _helper: FormikHelpers<IAccountForm>,
  ) => void | Promise<unknown>;
  initialValues: IAccountForm;
}

const defaultValues: IAccountForm = {
  companyName: "",
  companyType: "",
  email: "",
  phoneNumber: "",
  address: "",
  country: "",
  city: "",
  zipCode: "",
  image: "",
  primaryColor: "",
  secondaryColor: "",
  language: "",
  timezone: "",
  currency: "",
  weight: "",
  size: "",
};

function useAccountForm({
  onSubmit,
  initialValues = defaultValues,
}: IuseAccountForm) {
  return useFormik<IAccountForm>({
    onSubmit,
    initialValues,
  });
}

export default useAccountForm;
