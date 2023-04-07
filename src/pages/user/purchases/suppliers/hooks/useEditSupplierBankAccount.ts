import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface EditSupplierBankAccount {
  id: number;
  userId: number;
  supplierId: number;
  bankName: string;
  bankBranch: string;
  bankCode: string;
  bankSwift: string;
  accountHolder: string;
  accountNumber: string;
}

interface IuseEditSupplierBankAccount {
  onSubmit: (
    values: EditSupplierBankAccount,
    formikHelpers: FormikHelpers<EditSupplierBankAccount>,
  ) => void | Promise<unknown>;
  initialValues: EditSupplierBankAccount;
}

const validationSchema = Yup.object().shape({
  bankName: Yup.string().required(ErrorMessages.add_supplier.companyName),
  shortName: Yup.string().required(ErrorMessages.add_supplier.shortName),
  status: Yup.string().required(ErrorMessages.add_supplier.status),
});

const defaultValues: EditSupplierBankAccount = {
  id: 0,
  userId: 0,
  supplierId: 0,
  bankName: "",
  bankBranch: "",
  bankCode: "",
  bankSwift: "",
  accountHolder: "",
  accountNumber: "",
};

function useEditSupplierBankAccount({
  onSubmit,
  initialValues = defaultValues,
}: IuseEditSupplierBankAccount) {
  return useFormik<EditSupplierBankAccount>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useEditSupplierBankAccount;
