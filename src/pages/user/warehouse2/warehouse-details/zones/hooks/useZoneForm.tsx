import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface ZoneInitialValues {
  warehouse: string;
  label: string;
  name: string;
  status: string;
  area: string;
}

export const zoneInitialValues: ZoneInitialValues = {
  warehouse: "",
  label: "",
  name: "",
  area: "",
  status: "1",
};

interface IuseZoneForm {
  initialValues: ZoneInitialValues;
  onSubmit: (
    values: ZoneInitialValues,
    formikHelpers: FormikHelpers<ZoneInitialValues>,
  ) => void | Promise<unknown>;
}

const schema = Yup.object().shape({
  label: Yup.string().required("label is required"),
  name: Yup.string().required("name is required"),
  area: Yup.string().required("area is required"),
});

const useZoneForm = (props: IuseZoneForm) => {
  const { initialValues, onSubmit } = props;
  return useFormik({
    initialValues,
    onSubmit,
    validationSchema: schema,
  });
};

export default useZoneForm;
