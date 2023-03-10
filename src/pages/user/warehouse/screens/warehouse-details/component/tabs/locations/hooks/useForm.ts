/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { IPermissionRequest, IWarehouses } from "../query/useApiAction";

const defaultValues: IWarehouses = {
  id: 0,
  aisle:"",
  bay:"",
  level:"",
  bin:"",
  X:"",
  Z:  "",
  Y: "",
  volume:0,
  height:0,
  width:0,
  max:0,
  warehouseName: "",
  area: "",
  warehouse: undefined,
  label: "",
  email: "",
  phoneNumber: 0,
  address: "",
  country: "",
  city: "",
  zipcode: 0,
  longitude: 0,
  latitude: 0,
  status: "",
  pickingStrategy: "",
  receivingStrategy: "",
  timezone: "",
  receivingType: "",
  defaultWarehouse: false,
  allowPartialPicking: false
};

const useWarehouseForm = (
  onSubmit: (
    values: IWarehouses,
    formikHelpers: FormikHelpers<IWarehouses>,
  ) => void | Promise<unknown>,
  initialValues: IWarehouses = defaultValues,
) => {
  let validation: any = null;
    validation = {
      warehouseName: Yup.string().required(ErrorMessages.warehouse.warehouseName),
      label: Yup.string().required(
        ErrorMessages.warehouse.label,
      ),
      email: Yup.string().required(
        ErrorMessages.warehouse.email,
      ),
      phoneNumber: Yup.string().required(ErrorMessages.warehouse.phoneNumber),
      // .matches(URL_REGEX, ErrorMessages.screens.invalid_url),
      address: Yup.string().required(ErrorMessages.warehouse.address),
      country: Yup.string().required(ErrorMessages.warehouse.country),
      city: Yup.string().required(ErrorMessages.warehouse.city),
      zipcode: Yup.string().required(ErrorMessages.warehouse.zipCode),
      longitude: Yup.string().required(ErrorMessages.warehouse.longitude),
      latitude: Yup.string().required(ErrorMessages.warehouse.latitude),
      status: Yup.string().required(ErrorMessages.warehouse.status),
      pickingStrategy: Yup.string().required(ErrorMessages.warehouse.pickingStrategy),
      receivingStrategy: Yup.string().required(ErrorMessages.warehouse.receivingStrategy),
      receivingType: Yup.string().required(ErrorMessages.warehouse.receivingType),
      defaultWarehouse: Yup.string().required(ErrorMessages.warehouse.defaultWarehouse),
      allowPartialPicking: Yup.string().required(ErrorMessages.warehouse.allowPartialPicking),
      X: Yup.string().required(ErrorMessages.Location.X),
  Z:   Yup.string().required(ErrorMessages.Location.Z),
  Y:  Yup.string().required(ErrorMessages.Location.Y),
  volume: Yup.string().required(ErrorMessages.Location.volume),
  height: Yup.string().required(ErrorMessages.Location.height),
  width: Yup.string().required(ErrorMessages.Location.width),
  max: Yup.string().required(ErrorMessages.Location.max),
  aisle:Yup.string().required(ErrorMessages.Location.aisle),
  bay:Yup.string().required(ErrorMessages.Location.bay),
  level:Yup.string().required(ErrorMessages.Location.level),
  bin:Yup.string().required(ErrorMessages.Location.bin)
    };
   
  const schema = Yup.object().shape(validation);
  return useFormik<IWarehouses>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useWarehouseForm;
