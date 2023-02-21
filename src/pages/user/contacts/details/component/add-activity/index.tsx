import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Checkbox,
  CircularProgress,
  DialogContent,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Autocomplete from "components/auto-complete";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import moment from "moment";
import useAddActivityForm, {
  IAddActivityForm,
} from "pages/user/contacts/hooks/useAddActivityForm";
import { useFetchContactsBySearch } from "pages/user/contacts/query/useFetchContactBySearch";
import { useFetchUserRoleByRoleName } from "pages/user/contacts/query/useFetchUserRoleByRoleName";
import React, { SyntheticEvent, useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useContactActions } from "redux/contacts/contacts";
import palette from "theme/palette";
import { formatPhoneNumber, timeDuration } from "utils";
import { useApiActions } from "../../query/useApiActions";
import { useFetchActivitiesTypes } from "../../query/useFetchActivitiesTypes";
import { IToggleModel } from "../../type";
import ActivityFields from "./ActivityFields";
import ActivityToolTip from "./ActivityTooltip";

interface IAddActivity {
  open: boolean;
  handleClose: (_: keyof IToggleModel) => void;
  name?: string;
  title?: string;
}
const initialValues: IAddActivityForm = {
  id: 0,
  title: "",
  descrition: "",
  contactId: 0,
  assignToId: "",
  duration: "",
  durationCount: 0,
  date: "",
  time: "",
  contactName: "",
  activityTypeId: "",
  contactEmail: "",
  isSendEmailToAttendee: false,
  isReminder: false,
  setReminderBefore: 15,
};

function AddActivity(props: IAddActivity) {
  const { open, handleClose, name, title } = props;
  const [toggleSearch, setToggleSearch] = useState(true);
  const [search, setSearch] = useState("");
  const [contactInfo, setContactInfo] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [data, setData] = useState<any[]>([]);

  const handleContactInfo = (data: any) => {
    setContactInfo(data);
  };
  const contactsStore = useSelector((state: any) => state.contacts);
  const { contact, activity } = contactsStore;
  const { trySaveActivity } = useApiActions();
  const { removeActivity } = useContactActions();
  const { data: salesTeam, refetch: refetchTeam } = useFetchUserRoleByRoleName(
    "Sales",
    false,
  );

  const { data: contacts, refetch: refetchContacts } = useFetchContactsBySearch(
    "",
    false,
  );

  const { data: activities, refetch: refetchActivitiesTypes } =
    useFetchActivitiesTypes(false);

  const onSubmit = async (values: IAddActivityForm) => {
    await trySaveActivity({
      ...values,
      setReminderBefore: Number(values.setReminderBefore),
    });
    handleClose?.(name?.toLowerCase() as keyof IToggleModel);
    removeActivity();
    formik?.resetForm();
    setToggleSearch(false);
    setContactInfo({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
    return true;
  };
  const formik = useAddActivityForm(onSubmit, initialValues);
  useEffect(() => {
    if (open) {
      refetchTeam();
      refetchContacts();
      refetchActivitiesTypes();

      setFieldValue("assignToId", contact?.salesRepId);
      setFieldValue("contactId", contact?.id);
      setFieldValue("date", moment().format("YYYY-MM-DD[T]HH:mm"));
      setFieldValue("time", moment().format("YYYY-MM-DD[T]HH:mm"));

      if (activity) {
        setFieldValue("id", activity.id);
        setFieldValue("title", activity?.title);
        setFieldValue("descrition", activity?.descrition);
        setFieldValue("assignToId", activity?.assignToId);
        setFieldValue("duration", activity?.duration);
        setFieldValue("durationCount", activity?.durationCount);
        setFieldValue("date", activity?.date);
        setFieldValue("time", activity?.time);
        setFieldValue("contactName", activity?.contactName);
        setFieldValue("activityTypeId", activity?.activityTypeId);
        setFieldValue("contactEmail", activity?.contactEmail);
        setFieldValue("isSendEmailToAttendee", activity?.isSendEmailToAttendee);
        setFieldValue("isReminder", activity?.isReminder);
        setFieldValue("setReminderBefore", activity?.setReminderBefore);
      }
      if (name) {
        const filteredType = activities?.data?.find(
          (x: any) => x.activityTypeName === name,
        );
        if (filteredType) {
          setFieldValue("activityTypeId", filteredType.id);
        }
      }
    }
  }, [open]);

  // const initialValues: IAddActivityForm = {
  //   id: activity?.id || 0,
  //   title: activity?.title || "",
  //   descrition: activity?.descrition || "",
  //   contactId: contact?.id,
  //   assignToId: contact?.salesRepId || activity?.assignToId || "",
  //   duration: activity?.duration || "",
  //   durationCount: activity?.durationCount?.toString() || "",
  //   date: activity?.date || moment().format("YYYY-MM-DD[T]HH:mm"),
  //   time: activity?.date || moment().format("YYYY-MM-DD[T]HH:mm"),
  //   contactName: activity?.contactName || "",
  //   activityTypeId: activity?.activityTypeId || "",
  //   contactEmail: activity?.contactEmail || "",
  //   isSendEmailToAttendee: activity?.isSendEmailToAttendee || false,
  //   isReminder: false,
  //   setReminderBefore: 15,
  // };

  useEffect(() => {
    console.log("name", name);
    if (name && activities?.data) {
      const filteredType = activities?.data?.find(
        (x: any) => x.activityTypeName === name,
      );
      if (filteredType) {
        setFieldValue("activityTypeId", filteredType.id);
        setTouched({ ...formik.touched, activityTypeId: true });
        setFieldError("activityTypeId", "");
      }
    }
  }, [name, activities]);

  const handleSearch = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setSearch(target.value);
    const value = target.value.toLowerCase();
    const filterContact = contacts
      ? contacts?.data?.filter(
          (i) =>
            i.email.toLowerCase().includes(value) ||
            i.firstName.toLowerCase().includes(value) ||
            i.lastName.toLowerCase().includes(value) ||
            i.phone.toLowerCase().includes(value),
        )
      : [];
    setData(filterContact);
  };
  const {
    handleSubmit,
    setFieldValue,
    setFieldError,
    setTouched,
    handleBlur,
    handleChange,
    isSubmitting,
    values,
    touched,
    errors,
  } = formik;

  const handleActivitySelect = (id: number) => {
    setFieldValue("activityTypeId", id);
  };

  const onClose = () => {
    handleClose(name?.toLowerCase() as keyof IToggleModel);
    removeActivity();
    formik?.resetForm();
  };

  return (
    <Slider open={open}>
      <DialogTitle>
        {title || "Add Activity"}
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <PerfectScrollbar>
        <DialogContent dividers>
          <form>
            <>
              {!name ? (
                <ActivityToolTip
                  activities={activities?.data || []}
                  error={!!touched.activityTypeId && !!errors.activityTypeId}
                  handleActivitySelect={handleActivitySelect}
                  helperText={
                    (touched.activityTypeId &&
                      errors &&
                      errors.activityTypeId) ||
                    ""
                  }
                  values={values}
                />
              ) : null}
              <ActivityFields
                formik={formik}
                salesTeam={salesTeam?.data || []}
              />

              {(contactInfo.firstName || contactInfo.email) && (
                <Stack direction="row" gap={2}>
                  {contactInfo.firstName && (
                    <TextField
                      disabled
                      label="Name"
                      name="name"
                      placeholder="Enter Name"
                      style={{ width: "550px" }}
                      value={contactInfo.firstName}
                    />
                  )}
                  {contactInfo.email && (
                    <TextField
                      disabled
                      label="Email"
                      name="email"
                      placeholder="Enter email"
                      style={{ width: "550px" }}
                      value={contactInfo.email}
                    />
                  )}
                </Stack>
              )}

              {(contactInfo.firstName ||
                contactInfo.email ||
                contactInfo.phone) && (
                <Stack
                  alignItems="center"
                  direction="row"
                  gap={2}
                  marginTop="1rem"
                >
                  {contactInfo.phone && (
                    <TextField
                      disabled
                      label="Phone"
                      name="phone"
                      placeholder="Enter phone"
                      style={{ width: "550px" }}
                      value={formatPhoneNumber(contactInfo.phone)}
                    />
                  )}

                  <Box>
                    <Box />
                    <Button
                      sx={{
                        backgroundColor: palette.success.dark,
                        "&:hover": {
                          backgroundColor: palette.success.lightGreen,
                        },
                      }}
                      variant="contained"
                      onClick={() => {
                        setToggleSearch(true);
                        setContactInfo({
                          firstName: "",
                          lastName: "",
                          phone: "",
                          email: "",
                        });
                      }}
                    >
                      Search Again
                    </Button>
                  </Box>
                </Stack>
              )}
              {toggleSearch && (
                <Autocomplete
                  data={data}
                  handleData={(data) => {
                    handleContactInfo({
                      email: data.email,
                      firstName: data.firstName,
                      lastName: data.lastName,
                      phone: contact.phone,
                    });
                    setFieldValue(
                      "contactName",
                      `${contact.firstName} ${data.lastName}`,
                    );
                    setFieldValue("contactEmail", data.email);
                    setData([]);
                    setToggleSearch(false);
                    setSearch("");
                  }}
                  handleSearch={handleSearch}
                  placeholder="Search"
                  value={search}
                />
              )}
              <FormGroup>
                <Stack alignItems="center" direction="row">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.isReminder}
                        onChange={(event) => {
                          setFieldValue("isReminder", !values.isReminder);
                        }}
                      />
                    }
                    label="Remind me before the event"
                    onChange={handleChange("isReminder")}
                  />

                  {values.isReminder ? (
                    <>
                      <TextField
                        isSelect
                        error={
                          !!touched.setReminderBefore &&
                          !!errors.setReminderBefore
                        }
                        helperText={
                          (touched.setReminderBefore &&
                            errors &&
                            errors.setReminderBefore) ||
                          ""
                        }
                        label="Before Meeting"
                        menuItems={timeDuration(5)}
                        name="activityBefore"
                        placeholder=""
                        style={{ width: "250px" }}
                        value={values.setReminderBefore}
                        onBlur={handleBlur("setReminderBefore")}
                        onSelectHandler={(event) => {
                          if (event.target.value) {
                            setFieldValue(
                              "setReminderBefore",
                              event.target.value,
                            );
                          } else {
                            setFieldValue("setReminderBefore", 0);
                          }
                        }}
                      />
                    </>
                  ) : null}
                </Stack>

                <FormControlLabel
                  control={<Checkbox checked={values.isSendEmailToAttendee} />}
                  label="Send an email notification to the attendee"
                  onChange={() => {
                    setFieldValue(
                      "isSendEmailToAttendee",
                      !values.isSendEmailToAttendee,
                    );
                  }}
                />
              </FormGroup>
            </>
          </form>
        </DialogContent>
      </PerfectScrollbar>
      <DialogActions
        sx={{
          padding: "1.2rem 0",
          justifyContent: "center",
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="center"
          spacing={2}
        >
          <Button
            startIcon={<AddCircleIcon />}
            style={{ padding: "0.5rem 1rem" }}
            variant="contained"
            onClick={() => handleSubmit()}
          >
            {isSubmitting ? (
              <CircularProgress color="warning" size={17} />
            ) : (
              "Save"
            )}
          </Button>
          <Button
            autoFocus
            color="error"
            startIcon={<CloseIcon />}
            style={{ padding: "0.5rem 1rem" }}
            variant="contained"
            onClick={onClose}
          >
            Cancel
          </Button>
        </Stack>
      </DialogActions>
    </Slider>
  );
}

export default React.memo(AddActivity);
