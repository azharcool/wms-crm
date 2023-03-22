/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IBrandDetail {
  id: number;
  userId: number;
  name: string;
  slug: string;
  image: string;
  fileUrl: string;
}

const defaultValues: IBrandDetail = {
  id: 0,
  userId: 0,
  name: "",
  slug: "",
  image: "",
  fileUrl: "",
};

const schema = Yup.object().shape({
  // Client Info
  name: Yup.string().required(ErrorMessages.add_brand.name),
  slug: Yup.string().required(ErrorMessages.add_brand.slug),
  image: Yup.string().required(ErrorMessages.add_brand.image),
  fileUrl: Yup.string().required(ErrorMessages.add_brand.fileUrl),
});

const useBrandDetailsForm = (
  onSubmit: (
    values: IBrandDetail,
    formikHelpers: FormikHelpers<IBrandDetail>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  return useFormik<IBrandDetail>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useBrandDetailsForm;
