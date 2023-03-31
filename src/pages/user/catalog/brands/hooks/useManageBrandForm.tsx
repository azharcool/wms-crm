import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface ManageBrandInitialValues {
  name: string;
  slug: string;
  image: string;
  fileUrl: string;
}

export const manageBrandInitialValues: ManageBrandInitialValues = {
  name: "",
  slug: "",
  image: "",
  fileUrl: "",
};

interface IManageBrandForm {
  initialValues: ManageBrandInitialValues;
  onSubmit: (
    values: ManageBrandInitialValues,
    formikHelpers: FormikHelpers<ManageBrandInitialValues>,
  ) => void | Promise<unknown>;
}

const schema = Yup.object().shape({
  slug: Yup.string().required("slug is required"),
  name: Yup.string().required("name is required"),
});

const useManageBrandForm = (props: IManageBrandForm) => {
  const { initialValues, onSubmit } = props;
  return useFormik({
    initialValues,
    onSubmit,
    validationSchema: schema,
  });
};

export default useManageBrandForm;
