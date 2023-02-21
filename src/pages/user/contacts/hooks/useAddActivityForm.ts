/**
 * @format
 */
import ErrorMessages from "constants/ErrorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";

export interface IAddActivityForm {
  id?: number;
  contactId?: number | string;
  userId?: number | string;
  activityTypeId?: number | string;
  title?: string;
  descrition?: string;
  assignToId?: number | string;
  date?: Date | string;
  time?: string;
  duration?: string;
  durationCount?: number;
  contactName?: string;
  contactEmail?: string;
  isSendEmailToAttendee?: boolean;
  isReminder?: boolean;
  // isToggle?: any;
  setReminderBefore?: number | string;
}

const defaultValues: IAddActivityForm = {
  id: 0,
  contactId: 0,
  userId: 0,
  activityTypeId: 0,
  title: "",
  descrition: "",
  assignToId: 0,
  date: "",
  time: "",
  duration: "",
  contactName: "",
  contactEmail: "",
  setReminderBefore: "",
  isReminder: false,
  isSendEmailToAttendee: false,
  // isToggle: false,
};

const useAddActivityForm = (
  onSubmit: (
    values: IAddActivityForm,
    formikHelpers: FormikHelpers<IAddActivityForm>,
  ) => void | Promise<unknown>,
  initialValues: any = defaultValues,
) => {
  const schema = Yup.object().shape({
    activityTypeId: Yup.string().required(
      ErrorMessages.activity.activityTypeId,
    ),
    title: Yup.string().required(ErrorMessages.activity.title),
    assignToId: Yup.string().required(ErrorMessages.activity.assignTo),
    descrition: Yup.string().required(ErrorMessages.activity.description),
    duration: Yup.string().required(ErrorMessages.activity.duration),
    date: Yup.string().required(ErrorMessages.activity.date),
    time: Yup.string().required(ErrorMessages.activity.time),
  });

  return useFormik<IAddActivityForm>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useAddActivityForm;
