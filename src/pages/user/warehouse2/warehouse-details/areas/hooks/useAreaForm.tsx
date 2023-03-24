import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface AreaInitialValues {
  warehouse: string;
  label: string;
  name: string;
  status: string;
}

export const areaInitialValues: AreaInitialValues = {
  warehouse: "",
  label: "",
  name: "",
  status: "1",
};

interface IuseAreaForm {
  initialValues: AreaInitialValues;
  onSubmit: (
    values: AreaInitialValues,
    formikHelpers: FormikHelpers<AreaInitialValues>,
  ) => void | Promise<unknown>;
}

const schema = Yup.object().shape({
  label: Yup.string().required("label is required"),
  name: Yup.string().required("name is required"),
});

const useAreaForm = (props: IuseAreaForm) => {
  const { initialValues, onSubmit } = props;
  return useFormik({
    initialValues,
    onSubmit,
    validationSchema: schema,
  });
};

export default useAreaForm;
