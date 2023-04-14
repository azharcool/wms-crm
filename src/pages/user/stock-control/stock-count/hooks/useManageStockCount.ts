import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface AddLocation {
  warehouse: string;
  area: string;
  zone: string;
}

interface IuseAddLocation {
  onSubmit: (
    values: AddLocation,
    formikHelpers: FormikHelpers<AddLocation>,
  ) => void | Promise<unknown>;
  initialValues: AddLocation;
}

const validationSchema = Yup.object().shape({
  warehouseId: Yup.string().required(ErrorMessages.add_warehouse.warehouseName),
});

const defaultValues: AddLocation = {
  warehouse: "",
  area: "",
  zone: "",
};

function useAddLocation({
  onSubmit,
  initialValues = defaultValues,
}: IuseAddLocation) {
  return useFormik<AddLocation>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useAddLocation;
