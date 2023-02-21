import CloseIcon from "@mui/icons-material/Close";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { useFetchLeadStatuses } from "pages/admin/settings/screens/lead-status/query/useFetchLeadStatuses";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { formatPhoneNumber } from "utils";
import useEditContactForm, {
  IEditContact,
} from "../../../hooks/useEditContactForm";
import { useApiActions } from "../../../query/useApiActions";
import { IContacts } from "../../../query/useFetchContactById";

export interface Note {
  id: number;
  note: string;
}

interface Props {
  notesList?: Note[];
  userInfo?: IContacts;
  setNotesList?: Dispatch<SetStateAction<Note[]>>;
  open: boolean;
  handleClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Form = styled("form")`
  width: 100%;
`;

function EditContactForm(props: Props) {
  const { userInfo, open, setOpen, handleClose } = props;

  const [leadStatus, setLeadStatus] = useState<any[]>([]);
  const { tryEditContact } = useApiActions();
  const { data: leadStatuses } = useFetchLeadStatuses(0, 0, false);

  useEffect(() => {
    const leadStatusOption: any = [];
    leadStatuses?.data?.map((item: any) => {
      return leadStatusOption.push({
        id: item?.id,
        value: item?.leadStatusName,
      });
    });
    setLeadStatus(leadStatusOption);
  }, [leadStatuses]);

  const initialValues: IEditContact = {
    id: userInfo?.id || 0,
    firstName: userInfo?.firstName || "",
    lastName: userInfo?.lastName || "",
    phone: userInfo?.phone || "",
    email: userInfo?.email || "",
    leadStatusId:
      (userInfo?.leadStatusId && Number(userInfo?.leadStatusId)) || 0,
    companyName: userInfo?.companyName || "",
    companyWebsite: userInfo?.companyWebsite || "",
  };

  const onSubmit = async (values: IEditContact) => {
    await tryEditContact(values);
    setOpen(false);
  };
  const formik = useEditContactForm(onSubmit, initialValues);
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
  } = formik;

  return (
    <Slider open={open}>
      <DialogTitle>
        Edit Contact
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Form>
          <Stack direction="row" gap={2} marginBottom="1rem">
            <TextField
              error={!!touched.firstName && !!errors.firstName}
              helperText={
                (touched.firstName && errors && errors.firstName) || ""
              }
              label="First Name"
              name="contactFirstName"
              style={{ width: "550px" }}
              type="text"
              value={values.firstName}
              onBlur={handleBlur("firstName")}
              onChange={handleChange("firstName")}
            />
            <TextField
              error={!!touched.lastName && !!errors.lastName}
              helperText={(touched.lastName && errors && errors.lastName) || ""}
              label="Last Name"
              name="contactLastName"
              style={{ width: "550px" }}
              type="text"
              value={values.lastName}
              onBlur={handleBlur("lastName")}
              onChange={handleChange("lastName")}
            />
          </Stack>
          <Stack direction="row" gap={2} marginBottom="1rem">
            <TextField
              error={!!touched.email && !!errors.email}
              helperText={(touched.email && errors && errors.email) || ""}
              label="Email"
              name="contactEmail"
              style={{ width: "550px" }}
              type="email"
              value={values.email}
              onBlur={handleBlur("email")}
              onChange={handleChange("email")}
            />
            <TextField
              error={!!touched.phone && !!errors.phone}
              helperText={(touched.phone && errors && errors.phone) || ""}
              label="Phone Number"
              name="phone"
              style={{ width: "550px" }}
              value={formatPhoneNumber(values.phone)}
              onBlur={handleBlur("phone")}
              onChange={handleChange("phone")}
            />
          </Stack>
          <Stack direction="row" gap={2} marginBottom="1rem">
            <TextField
              isSelect
              error={!!touched.leadStatusId && !!errors.leadStatusId}
              helperText={
                (touched.leadStatusId && errors && errors.leadStatusId) || ""
              }
              label="Lead Status"
              menuItems={leadStatus}
              name="leadStatusId"
              style={{ width: "550px" }}
              value={values.leadStatusId}
              onBlur={handleBlur("leadStatusId")}
              onChange={handleChange("leadStatusId")}
              onSelectHandler={(event) => {
                if (event.target.value) {
                  setFieldValue("leadStatusId", event.target.value);
                } else {
                  setFieldValue("leadStatusId", "");
                }
              }}
            />
            <TextField
              error={!!touched.companyName && !!errors.companyName}
              helperText={
                (touched.companyName && errors && errors.companyName) || ""
              }
              label="Company Name"
              name="companyName"
              style={{ width: "550px" }}
              value={values.companyName}
              onBlur={handleBlur("companyName")}
              onChange={handleChange("companyName")}
            />
          </Stack>
          <Stack direction="row" gap={2} marginBottom="1rem">
            <TextField
              error={!!touched.companyWebsite && !!errors.companyWebsite}
              helperText={
                (touched.companyWebsite && errors && errors.companyWebsite) ||
                ""
              }
              label="Website"
              name="companyWebsite"
              value={values.companyWebsite}
              onBlur={handleBlur("companyWebsite")}
              onChange={handleChange("companyWebsite")}
            />
          </Stack>
        </Form>
      </DialogContent>
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
            startIcon={<UpgradeIcon />}
            style={{ padding: "0.5rem 1rem" }}
            variant="contained"
            onClick={() => handleSubmit()}
          >
            {isSubmitting ? (
              <CircularProgress color="warning" size={17} />
            ) : (
              "Update"
            )}
          </Button>
          <Button
            autoFocus
            color="error"
            startIcon={<CloseIcon />}
            style={{ padding: "0.5rem 1rem" }}
            variant="contained"
            onClick={handleClose}
          >
            Close
          </Button>
        </Stack>
      </DialogActions>
    </Slider>
  );
}

export default EditContactForm;
