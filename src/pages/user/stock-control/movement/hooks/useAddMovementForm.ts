import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface AddMovementForm {
  userId: number;
  warehouse: string;
  area: string;
  zone: string;
  location: string;
}

interface IuseAddMovementForm {
  onSubmit: (
    values: AddMovementForm,
    formikHelpers: FormikHelpers<AddMovementForm>,
  ) => void | Promise<unknown>;
  initialValues: AddMovementForm;
}

const validationSchema = Yup.object().shape({
  warehouseId: Yup.string().required(ErrorMessages.add_warehouse.warehouseName),
});

const defaultValues: AddMovementForm = {
  userId: 0,
  warehouse: "",
  area: "",
  zone: "",
  location: "",
};

function useAddMovementForm({
  onSubmit,
  initialValues = defaultValues,
}: IuseAddMovementForm) {
  return useFormik<AddMovementForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useAddMovementForm;
