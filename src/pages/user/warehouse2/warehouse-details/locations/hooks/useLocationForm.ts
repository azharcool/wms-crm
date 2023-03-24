import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface LocationInitialValues {
  area: string;
  aisle: string;
  bay: string;
  level: string;
  bin: string;
  height: string;
  width: string;
  length: string;
  maxLoad: string;
  volumn: string;
  locationAlias: string;
  locationType: string;
  operation: string;
  status: string;
  x: string;
  y: string;
  z: string;
  zone: string;
}

export const locationInitialValues: LocationInitialValues = {
  area: "",
  aisle: "",
  bay: "",
  level: "",
  bin: "",
  height: "",
  width: "",
  length: "",
  maxLoad: "",
  volumn: "",
  locationAlias: "",
  locationType: "",
  operation: "",
  status: "",
  x: "",
  y: "",
  z: "",
  zone: "",
};

interface IuseLocationForm {
  initialValues: LocationInitialValues;
  onSubmit: (
    values: LocationInitialValues,
    formikHelpers: FormikHelpers<LocationInitialValues>,
  ) => void | Promise<unknown>;
}

const schema = Yup.object().shape({
  area: Yup.string().required("area is required"),
  locationType: Yup.string().required("location type is required"),
});

const useLocationForm = (props: IuseLocationForm) => {
  const { initialValues, onSubmit } = props;
  return useFormik({
    initialValues,
    onSubmit,
    validationSchema: schema,
  });
};

export default useLocationForm;
