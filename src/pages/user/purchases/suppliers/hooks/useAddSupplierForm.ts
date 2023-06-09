import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface AddSupplierForm {
  companyName: string;
  shortName: string;
  email: string;
  phoneNumber: string;
  address: string;
  region: string;
  city: string;
  zipCode: string;
  countryId: string;
  firstName: string;
  lastName: string;
  primaryEmail: string;
  primaryPhoneNumber: string;
  status: string;
}

interface IuseAddSupplierForm {
  onSubmit: (
    values: AddSupplierForm,
    formikHelpers: FormikHelpers<AddSupplierForm>,
  ) => void | Promise<unknown>;
  initialValues: AddSupplierForm;
}

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required(ErrorMessages.add_supplier.companyName),
  shortName: Yup.string().required(ErrorMessages.add_supplier.shortName),
  status: Yup.string().required(ErrorMessages.add_supplier.status),
});

const defaultValues: AddSupplierForm = {
  companyName: "",
  shortName: "",
  email: "",
  phoneNumber: "",
  address: "",
  region: "",
  city: "",
  zipCode: "",
  countryId: "",
  firstName: "",
  lastName: "",
  primaryEmail: "",
  primaryPhoneNumber: "",
  status: "",
};

function useAddSupplierForm({
  onSubmit,
  initialValues = defaultValues,
}: IuseAddSupplierForm) {
  return useFormik<AddSupplierForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useAddSupplierForm;
