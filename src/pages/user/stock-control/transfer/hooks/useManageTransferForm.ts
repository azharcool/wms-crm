import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IStock {
  id?: 0;
  userId?: 0;
  adjustmentId?: 0;
  productId?: 0;
  variantId?: 0;
  image?: "";
  sku?: "";
  barcode?: "";
  optionName?: "";
  value?: "";
  barcodeStrategy?: "";
  unitCost: 0;
  unitNumber?: "";
  serialNumber?: "";
  batchNumber?: "";
  quantity: 0;
  conditionCodeId?: 0;
  containerNumber?: "";
  expiryDate?: "";
  locationId?: 0;
}
export interface ManageTransferForm {
  id: 0;
  userId: 0;
  warehosuseId: 0;
  adjustmentReasonId: 0;
  referenceId: 0;
  companyId: 0;
  sa: "";
  lineItem: 0;
  qtyChange: 0;
  notes: "";
  totalQuantity: 0;
  totalValue: 0;
  stock: IStock[];
}

interface IManageTransferForm {
  onSubmit: (
    values: ManageTransferForm,
    FormikHelpers: FormikHelpers<ManageTransferForm>,
  ) => void | Promise<unknown>;
  initialValues: ManageTransferForm;
}
const validationSchema = Yup.object().shape({
  warehosuseId: Yup.number()
    .required("Please select warehouse")
    .min(1, "Please select warehouse"),
  adjustmentReasonId: Yup.number()
    .required("Please select adjustment reason")
    .min(1, "Please select adjustment reason"),
});

export const defaultValues: ManageTransferForm = {
  id: 0,
  userId: 0,
  warehosuseId: 0,
  adjustmentReasonId: 0,
  referenceId: 0,
  companyId: 0,
  sa: "",
  lineItem: 0,
  qtyChange: 0,
  notes: "",
  totalQuantity: 0,
  totalValue: 0,
  stock: [],
};

function useManageTransferForm({
  onSubmit,
  initialValues = defaultValues,
}: IManageTransferForm) {
  return useFormik<ManageTransferForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useManageTransferForm;
