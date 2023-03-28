import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface AddSupplierForm {
  companyName: string;
  shortName: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  city: string;
  zipCode: string;
  firstName: string;
  lastName: string;
  primaryEmail: string;
  primaryPhone: string;
}

interface IAddSupplierForm {
  onSubmit: (
    values: AddSupplierForm,
    formikHelpers: FormikHelpers<AddSupplierForm>,
  ) => void | Promise<unknown>;
  initialValues: AddSupplierForm;
}

const defaultValues: AddSupplierForm = {
  companyName: "",
  shortName: "",
  email: "",
  phoneNumber: "",
  address: "",
  country: "",
  city: "",
  zipCode: "",
  firstName: "",
  lastName: "",
  primaryEmail: "",
  primaryPhone: "",
};

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required(ErrorMessages.add_supplier.compnayName),
  shortName: Yup.string().required(ErrorMessages.add_supplier.shortName),
});

function useAddSupplierForm({
  onSubmit,
  initialValues = defaultValues,
}: IAddSupplierForm) {
  return useFormik<AddSupplierForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useAddSupplierForm;
