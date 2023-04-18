import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IManageBankAccountData {
  id: number;
  bankName: string;
  bankBranch: string;
  bankCode: string;
  bankSwift: string;
  accountHolder: string;
  accountNumber: string;
}
export interface ManageBankAccountForm {
  manageBankAccountData: IManageBankAccountData[];
}

export const manageBankAccountForm: ManageBankAccountForm = {
  manageBankAccountData: [
    {
      id: 0,
      bankName: "",
      bankBranch: "",
      bankCode: "",
      bankSwift: "",
      accountHolder: "",
      accountNumber: "",
    },
  ],
};

const validationSchema = Yup.object().shape({
  bankName: Yup.string().required(ErrorMessages.manage_bank_Account.bankName),
  bankBranch: Yup.string().required(
    ErrorMessages.manage_bank_Account.bankBranch,
  ),
  bankCode: Yup.string().required(ErrorMessages.manage_bank_Account.bankCode),
  bankSwift: Yup.string().required(ErrorMessages.manage_bank_Account.bankSwift),
  accountHolder: Yup.string().required(
    ErrorMessages.manage_bank_Account.accountHolder,
  ),
  accountNumber: Yup.string().required(
    ErrorMessages.manage_bank_Account.accountNumber,
  ),
});

interface IManageBankAccountForm {
  onSubmit: (
    values: ManageBankAccountForm,
    FormikHelpers: FormikHelpers<ManageBankAccountForm>,
  ) => void | Promise<unknown>;
  initialValues: ManageBankAccountForm;
}

const useManageBankAccountForm = (props: IManageBankAccountForm) => {
  const { initialValues, onSubmit } = props;
  return useFormik<ManageBankAccountForm>({
    initialValues,
    onSubmit,
    // validationSchema,
  });
};

export default useManageBankAccountForm;
