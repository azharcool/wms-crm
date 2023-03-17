import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface AddCategoriesForm {
  parentCategoryId: string;
  position: string;
  tag: string;
  name: string;
  slug: string;
  detail: string;
  status: string;
}

interface IuseAddCategoriesForm {
  onSubmit: (
    values: AddCategoriesForm,
    formikHelpers: FormikHelpers<AddCategoriesForm>,
  ) => void | Promise<unknown>;
  initialValues: AddCategoriesForm;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("enter category name"),
});

const deafultValues: AddCategoriesForm = {
  parentCategoryId: "",
  position: "",
  tag: "",
  name: "",
  slug: "",
  detail: "",
  status: "",
};
function useAddCategoriesForm({
  onSubmit,
  initialValues = deafultValues,
}: IuseAddCategoriesForm) {
  return useFormik<AddCategoriesForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useAddCategoriesForm;
