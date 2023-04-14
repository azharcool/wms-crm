/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IAddLocation {
  id?: number;
  warehouse?: string;
  area?: string;
  zone?: string;
  aisle?: string;
  bay?: string;
  level?: number;
  bin?: any;
  height?: any;
  width?: any;
  length?: any;
  maxload?: any;
  volume?: any;
  location_alias?: string;
  location_type?: string;
  operations?: string;
  status?: string;
  x?: number;
  y?: number;
  z?: number;
}

const defaultValues: IAddLocation = {
  id: 0,
  warehouse: "",
  area: "",
  zone: "",
  aisle: "",
  bay: "",
  level: 0,
  bin: "",
  height: "",
  width: "",
  length: 0,
  maxload: 0,
  volume: 0,
  location_alias: "",
  location_type: "",
  operations: "",
  x: 0,
  y: 0,
  z: 0,
};

const schema = Yup.object().shape({
  // Client Info
  area: Yup.string().required(ErrorMessages.add_location.area),
  location_type: Yup.string().required(
    ErrorMessages.add_location.location_type,
  ),
});

const useAddLocationForm = (
  onSubmit: (
    values: IAddLocation,
    formikHelpers: FormikHelpers<IAddLocation>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  return useFormik<IAddLocation>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useAddLocationForm;
