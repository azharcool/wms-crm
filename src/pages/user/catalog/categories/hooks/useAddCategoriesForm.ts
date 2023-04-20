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
  image:string
}

interface IuseAddCategoriesForm {
  onSubmit: (
    values: AddCategoriesForm,
    formikHelpers: FormikHelpers<AddCategoriesForm>,
  ) => void | Promise<unknown>;
  initialValues: AddCategoriesForm;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Category name required."),
});

const deafultValues: AddCategoriesForm = {
  parentCategoryId: "",
  position: "",
  tag: "",
  name: "",
  slug: "",
  detail: "",
  status: "",
  image:""
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
