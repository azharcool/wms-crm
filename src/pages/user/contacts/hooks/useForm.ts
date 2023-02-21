/**
 * @format
 */
import { ONLY_TEXT, US_PHONE_NUMBER_REGEX } from "constants/constants";
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IAddContact {
  firstName: string;
  lastName: string;
  phone: string;
  mobile: string;
  email: string;
  secondEmail: string;
  companyName: string;
  companyWebsite: string;
  salesRepId: number | string;
  entityType: string;
  leadStatus: string;
  pipelineLead: string;
  followUp: string;
  recordOwner: string;
  leadSource: string;
  emailFollowUpOptions: string;
  role: string;
  description: string;
  referredBy: string;
  referredName?: string;
  dateContractsSent: string;
  taxId: string;
  seqStartDate: string;
  googleAddress: string;
  street: string;
  state: string;
  city: string;
  zipCode: string;
  serviceAgreementMonth: string;
  setupFree: string;
  employeesType: string;
  serviceAgreementDays: string;
  hoursDayWorked: string;
  virtualEmployees: string;
  rate: string;
  totalHoursMonth: string;
  perApptFee: string;
  totalHoursCycle: string;
  daysPriorCancel: string;
  ccName: string;
  type: string;
  cardNumber: string;
  expiryDate: string;
  security: string;
  address: string;
  dateOfPayment: string;
}

const defaultValues: IAddContact = {
  firstName: "",
  lastName: "",
  phone: "",
  mobile: "",
  email: "",
  secondEmail: "",
  companyName: "",
  companyWebsite: "",
  salesRepId: "",
  entityType: "",
  leadStatus: "",
  pipelineLead: "",
  followUp: "",
  recordOwner: "",
  leadSource: "",
  emailFollowUpOptions: "",
  role: "",
  description: "",
  referredBy: "",
  dateContractsSent: "",
  taxId: "",
  seqStartDate: "",
  googleAddress: "",
  street: "",
  state: "",
  city: "",
  zipCode: "",
  serviceAgreementMonth: "",
  setupFree: "",
  employeesType: "",
  serviceAgreementDays: "",
  hoursDayWorked: "",
  virtualEmployees: "",
  rate: "",
  totalHoursMonth: "",
  perApptFee: "",
  totalHoursCycle: "",
  daysPriorCancel: "",
  ccName: "",
  type: "",
  cardNumber: "",
  expiryDate: "",
  security: "",
  address: "",
  dateOfPayment: "",
};

const schema = Yup.object().shape({
  // Client Info
  firstName: Yup.string()
    .required(ErrorMessages.add_contact.firstName.firstName)
    .matches(ONLY_TEXT, ErrorMessages.add_contact.firstName.validate),
  lastName: Yup.string()
    .required(ErrorMessages.add_contact.lastName.lastName)
    .matches(ONLY_TEXT, ErrorMessages.add_contact.lastName.validate),
  phone: Yup.string()
    .required(ErrorMessages.add_contact.number.phone)
    .max(10, ErrorMessages.add_contact.number.max)
    .matches(US_PHONE_NUMBER_REGEX, ErrorMessages.add_contact.number.validate),
  mobile: Yup.string()
    .required(ErrorMessages.add_contact.number.mobile)
    .max(10, ErrorMessages.add_contact.number.max)
    .matches(US_PHONE_NUMBER_REGEX, ErrorMessages.add_contact.number.validate),
  email: Yup.string().required(ErrorMessages.add_contact.email),
  salesRepId: Yup.string().required(ErrorMessages.add_contact.salesRep),
  leadSource: Yup.string().required(ErrorMessages.add_contact.leadSource),
  leadStatus: Yup.string().required(ErrorMessages.add_contact.leadStatus),
  pipelineLead: Yup.string().required(ErrorMessages.add_contact.pipelineLead),
});

const useAddContactForm = (
  onSubmit: (
    values: IAddContact,
    formikHelpers: FormikHelpers<IAddContact>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  return useFormik<IAddContact>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useAddContactForm;
