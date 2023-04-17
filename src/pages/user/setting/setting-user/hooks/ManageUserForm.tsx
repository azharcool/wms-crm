import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IUserForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  warehouse: string;
  role: string;
  image: string;
  status: string;
  language: string;
}
interface UserForm {
  onSubmit: (
    values: IUserForm,
    _helper: FormikHelpers<IUserForm>,
  ) => void | Promise<unknown>;
  initialValues: IUserForm;
}

const defaultValues: IUserForm = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  warehouse: "",
  role: "",
  image: "",
  status: "",
  language: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(ErrorMessages.setting_user.firstName),
  lastName: Yup.string().required(ErrorMessages.setting_user.lastName),
  email: Yup.string().required(ErrorMessages.setting_user.email).email(),
  password: Yup.string().required(ErrorMessages.setting_user.password).matches(
    /^.*(?=.{8,})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "At least one uppercase and lowercase letter, number is required."
  ),
  warehouse: Yup.string().required(ErrorMessages.setting_user.warehouse),
  role: Yup.string().required(ErrorMessages.setting_user.role),
});

function useManagaeUserForm({
  onSubmit,
  initialValues = defaultValues,
}: UserForm) {
  return useFormik<IUserForm>({
    onSubmit,
    initialValues,
    validationSchema,
  });
}

export default useManagaeUserForm;
