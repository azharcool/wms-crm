
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
  unitCost?: 0;
  unitNumber?: "";
  serialNumber?: "";
  batchNumber?: "";
  quantity?: 0;
  conditionCodeId?: 0;
  containerNumber?: "";
  expiryDate?: "";
  locationId?: 0;
}
export interface AddAdjustmentForm {
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

interface IAddAdjustmentForm {
  onSubmit: (
    values: AddAdjustmentForm,
    FormikHelpers: FormikHelpers<AddAdjustmentForm>,
  ) => void | Promise<unknown>;
  initialValues: AddAdjustmentForm;
}
const validationSchema = Yup.object().shape({
  warehosuseId: Yup.number()
    .required("Please selected warehouse")
    .min(1, "Please selected warehouse"),
  adjustmentReasonId: Yup.number()
    .required("Please selected adjustment reason")
    .min(1, "Please selected adjustment reason"),
});

export const deafultValues: AddAdjustmentForm = {
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
  stock: [
    {
      id: 0,
      userId: 0,
      adjustmentId: 0,
      productId: 0,
      variantId: 0,
      image: "",
      sku: "",
      barcode: "",
      optionName: "",
      value: "",
      barcodeStrategy: "",
      unitCost: 0,
      unitNumber: "",
      serialNumber: "",
      batchNumber: "",
      quantity: 0,
      conditionCodeId: 0,
      containerNumber: "",
      expiryDate: "",
      locationId: 0,
    },
  ],
};

function useAddAdjustmentForm({
  onSubmit,
  initialValues = deafultValues,
}: IAddAdjustmentForm) {
  return useFormik<AddAdjustmentForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useAddAdjustmentForm;