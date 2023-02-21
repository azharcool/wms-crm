/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface ICreateDealForm {
  dealTitle: string;
  dealValue: string;
  selectPipLine: string;
  selectStorage: string;
  estimateCloseDate: string;
}

const defaultValues: ICreateDealForm = {
  dealTitle: "",
  dealValue: "",
  selectPipLine: "",
  selectStorage: "",
  estimateCloseDate: "",
};

const schema = Yup.object().shape({
  dealTitle: Yup.string().required(ErrorMessages.create_deal.dealTitle),
  dealValue: Yup.string().required(ErrorMessages.create_deal.dealValue),
  selectPipLine: Yup.string().required(ErrorMessages.create_deal.selectPipLine),
  selectStorage: Yup.string().required(ErrorMessages.create_deal.selectStorage),
  estimateCloseDate: Yup.string().required(
    ErrorMessages.create_deal.estimateCloseDate,
  ),
});

const useCreateDealForm = (
  onSubmit: (
    values: ICreateDealForm,
    formikHelpers: FormikHelpers<ICreateDealForm>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  return useFormik<ICreateDealForm>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useCreateDealForm;
