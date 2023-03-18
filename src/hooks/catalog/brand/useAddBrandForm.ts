/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IAddBrand {
  id: number;
  userId: number;
  name: string;
  slug: string;
  image: string;
  fileUrl: string;
}

const defaultValues: IAddBrand = {
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

const useAddBrandForm = (
  onSubmit: (
    values: IAddBrand,
    formikHelpers: FormikHelpers<IAddBrand>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  return useFormik<IAddBrand>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useAddBrandForm;
