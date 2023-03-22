import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface EditCategoriesForm {
  parentCategoryId: string;
  position: string;
  tag: string;
  name: string;
  slug: string;
  detail: string;
  status: string;
}

interface IuseEditCategoriesForm {
  onSubmit: (
    values: EditCategoriesForm,
    formikHelpers: FormikHelpers<EditCategoriesForm>,
  ) => void | Promise<unknown>;
  initialValues: EditCategoriesForm;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Category name required."),
});

const deafultValues: EditCategoriesForm = {
  parentCategoryId: "",
  position: "",
  tag: "",
  name: "",
  slug: "",
  detail: "",
  status: "",
};
function useEditCategoriesForm({
  onSubmit,
  initialValues = deafultValues,
}: IuseEditCategoriesForm) {
  return useFormik<EditCategoriesForm>({
    initialValues,
    onSubmit,
    validationSchema,
  });
}

export default useEditCategoriesForm;
