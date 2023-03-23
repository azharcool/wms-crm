import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface AddWarehouseForm {
  userId: number;
  warehouseName: string;
  label: string;
  email: string;
  phoneNumber: string;
  address: string;
  country: string;
  city: string;
  zipCode: string;
  lat: number;
  lng: number;
  firstName: string;
  lastName: string;
  primaryEmail: string;
  primaryPhoneNumber: string;
  pickingStrategy: string;
  receivingStrategy: string;
  timezone: string;
  receivingType: string;
  defaultWarehouse: boolean;
  allowPartialPacking: boolean;
  status: number;
}

interface IuseAddWarehouseForm {
  onSubmit: (
    values: AddWarehouseForm,
    formikHelpers: FormikHelpers<AddWarehouseForm>,
  ) => void | Promise<unknown>;
  initialValues: AddWarehouseForm;
}

const validationSchema = Yup.object().shape({
  warehouseName: Yup.string().required(ErrorMessages.add_warehouse.warehouseName),
  country: Yup.string().required(ErrorMessages.add_warehouse.country),
  city: Yup.string().required(ErrorMessages.add_warehouse.city),
});

const deafultValues: AddWarehouseForm = {
  userId: 0,
  warehouseName: "",
  label: "",
  email: "",
  phoneNumber: "",
  address: "",
  country: "",
  city: "",
  zipCode: "",
  lat: 0,
  lng: 0,
  firstName: "",
  lastName: "",
  primaryEmail: "",
  primaryPhoneNumber: "",
  pickingStrategy: "",
  receivingStrategy: "",
  timezone: "",
  receivingType: "",
  defaultWarehouse: false,
  allowPartialPacking: false,
  status: 0,
};

function useAddWarehouseForm({
  onSubmit,
  initialValues = deafultValues,
}: IuseAddWarehouseForm) {
  return useFormik<AddWarehouseForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useAddWarehouseForm;
