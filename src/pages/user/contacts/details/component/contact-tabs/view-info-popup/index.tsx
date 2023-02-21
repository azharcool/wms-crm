import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ApprovalIcon from "@mui/icons-material/Approval";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CallIcon from "@mui/icons-material/Call";
import CampaignIcon from "@mui/icons-material/Campaign";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MessageIcon from "@mui/icons-material/Message";
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import AccordionItems from "components/accordion-items";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import palette from "theme/palette";

import { useApiActions } from "../../../query/useApiActions";
import { InfoAccToggle } from "../../../type";
import BasicInfo from "./BasicInfo";
import useEContactInfoForm, { IEditContactInfo } from "./useContactInfoForm";
import ViewInfoForm from "./ViewInfoForm";

const useStyles = makeStyles({
  container: {
    padding: "1rem",
  },
  actionHeader: {
    margin: "8px 0",
    marginBottom: "1.5rem",
  },
});

export interface Note {
  id: number;
  note: string;
}

interface Props {
  notesList?: Note[];
  setNotesList?: Dispatch<SetStateAction<Note[]>>;
  open: boolean;
  handleClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function ViewInfoPopup(props: Props) {
  const { notesList, setNotesList, open, setOpen, handleClose } = props;
  const [note, setNote] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [isEdit, setIsEdit] = useState<string>("");
  const [isEditing, setIsEditing] = useState(false);
  const [isEmailEdit, setIsEmailEdit] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const { tryEditContact } = useApiActions();
  const contactsStore = useSelector((state: any) => state.contacts);
  const { contact } = contactsStore;

  const tempArr: Note[] = [];
  const onHandleSubmit = () => {
    tempArr.push({ id: Math.random(), note });
    setOpen(false);
  };

  const initialValues: IEditContactInfo = {
    id: contact?.id || 0,
    phone: contact?.phone || "",
    email: contact?.email || "",
  };

  const onSubmit = async (values: any) => {
    await tryEditContact(values);
  };
  const formik = useEContactInfoForm(onSubmit, initialValues);
  const {
    handleBlur,
    setFieldValue,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
    dirty,
    isSubmitting,
  } = formik;

  const [expandAccordion, setExpandAccordion] = useState("");
  const [toggles, setToggles] = useState<InfoAccToggle>({
    customFields: false,
    campaigns: false,
    deals: false,
    task: false,
    tags: false,
    appointment: false,
    source: false,
  });
  const classes = useStyles();

  const iconStyle = {
    color: palette.secondary.lightGray,
  };

  function handleToggle<T>(name: T) {
    const toggleValue = toggles[name as keyof InfoAccToggle];
    setToggles((s) => ({
      ...s,
      [name as keyof InfoAccToggle]: !toggleValue,
    }));
  }

  const onHandleChange = (value: string) => {
    setExpandAccordion(value);
  };

  const onEditPhone = () => {
    handleSubmit();
    setIsEditing(false);
  };

  const onEditEmail = () => {
    handleSubmit();
    setIsEmailEdit(false);
  };

  const handleEdit = (obj: any) => {
    // const isExist = isEdit.includes(obj?.id);
    // if (isExist) {
    //   const isALreadyExist = isEdit.filter((item) => item !== obj?.id);
    //   setIsEdit(isALreadyExist);
    // } else {
    //   setIsEdit([...isEdit, obj?.id]);
    // }
    // setEditable((state) => !state);
  };

  const handleInfoOpen = () => {
    setInfoOpen(true);
  };
  const handleInfoClose = () => {
    setInfoOpen(false);
  };

  return (
    <Slider open={open}>
      <DialogTitle>
        Information
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
        <Paper className={`${classes.container}`}>
          <Stack>
            <Stack
              alignItems="center"
              className={`${classes.actionHeader}`}
              direction="row"
              gap={1}
              justifyContent="center"
            >
              <Tooltip title="Send Message">
                <IconButton color="primary" sx={{ border: "1px solid" }}>
                  <MessageIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Call">
                <IconButton color="success" sx={{ border: "1px solid" }}>
                  <LocalPhoneIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Send Voicemail">
                <IconButton color="default" sx={{ border: "1px solid" }}>
                  <KeyboardVoiceIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Add Note">
                <IconButton color="error" sx={{ border: "1px solid" }}>
                  <BorderColorIcon />
                </IconButton>
              </Tooltip>
            </Stack>
            <Divider />
            <Stack
              alignItems="right"
              direction="row"
              justifyContent="right"
              padding={2}
              spacing={2}
            >
              <Button
                startIcon={<AddCircleIcon />}
                style={{ padding: "0.5rem 1rem" }}
                variant="contained"
                onClick={handleInfoOpen}
              >
                {contact?.id ? "Edit " : "Add"}
              </Button>
            </Stack>

            <Grid container spacing={2}>
              <Grid item lg={6} xs={12}>
                <Typography component="p" variant="h5">
                  Basic Info
                </Typography>
                {isEditing ? (
                  <Stack
                    alignItems="center"
                    direction="row"
                    gap={1}
                    justifyContent="center"
                  >
                    <TextField
                      error={!!touched.phone && !!errors.phone}
                      helperText={
                        (touched.phone && errors && errors.phone) || ""
                      }
                      name="Phone"
                      placeholder="Enter Phone"
                      value={values.phone}
                      onBlur={handleBlur("phone")}
                      onChange={handleChange("phone")}
                    />
                    <IconButton edge="end" onClick={() => setIsEditing(false)}>
                      <CloseIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={onEditPhone}>
                      <CheckIcon />
                    </IconButton>
                  </Stack>
                ) : (
                  <BasicInfo
                    field={contact?.phone || "phone"}
                    icon={<CallIcon />}
                    rightIcon={<EditIcon />}
                    onHandleEdit={() => setIsEditing(!isEditing)}
                  />
                )}

                {isEmailEdit ? (
                  <Stack
                    alignItems="center"
                    direction="row"
                    gap={1}
                    justifyContent="center"
                  >
                    <TextField
                      error={!!touched.email && !!errors.email}
                      helperText={
                        (touched.email && errors && errors.email) || ""
                      }
                      name="Email"
                      placeholder="Enter Email"
                      value={values.email}
                      onBlur={handleBlur("email")}
                      onChange={handleChange("email")}
                    />
                    <IconButton
                      edge="end"
                      onClick={() => setIsEmailEdit(false)}
                    >
                      <CloseIcon />
                    </IconButton>
                    <IconButton edge="end" onClick={onEditEmail}>
                      <CheckIcon />
                    </IconButton>
                  </Stack>
                ) : (
                  <BasicInfo
                    field={contact?.email || "Add Email"}
                    icon={<EmailIcon />}
                    rightIcon={<EditIcon />}
                    onHandleEdit={() => setIsEmailEdit(!isEmailEdit)}
                  />
                )}

                <BasicInfo
                  field={contact?.address?.googleAddress || "Add Address"}
                  icon={<LocationOnIcon />}
                  onHandleEdit={handleInfoOpen}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <Typography component="p" variant="h5">
                  Additional Info
                </Typography>

                <BasicInfo
                  field={contact?.address?.city || "Add City"}
                  icon={<LocationOnIcon />}
                  onHandleEdit={handleInfoOpen}
                />

                <BasicInfo
                  field={contact?.address?.state || "Add State"}
                  icon={<LocationOnIcon />}
                  onHandleEdit={handleInfoOpen}
                />

                <BasicInfo
                  field={contact?.address?.country || "Add Country"}
                  icon={<LocationOnIcon />}
                  onHandleEdit={handleInfoOpen}
                />

                <BasicInfo
                  field={contact?.address?.zipCode || "Add Zip"}
                  icon={<LocationOnIcon />}
                  onHandleEdit={handleInfoOpen}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item lg={6} xs={12}>
                <AccordionItems
                  details="No assigned data"
                  expanded="customFields"
                  handleChange={onHandleChange}
                  handleToggle={(name) => handleToggle(name)}
                  label="Custom Fields"
                  leftIcon={<FormatListBulletedIcon sx={iconStyle} />}
                  selectedExpandedPanel={expandAccordion}
                  total={0}
                />
                <AccordionItems
                  details="No assigned data"
                  expanded="campaign"
                  handleChange={onHandleChange}
                  handleToggle={(name) => handleToggle(name)}
                  label="Campaigns"
                  leftIcon={<CampaignIcon sx={iconStyle} />}
                  selectedExpandedPanel={expandAccordion}
                  total={0}
                />
                <AccordionItems
                  hasPopup
                  details="No assigned data"
                  expanded="appointment"
                  handleChange={onHandleChange}
                  handleToggle={(name) => handleToggle(name)}
                  label="Appointment"
                  leftIcon={<AssignmentIcon sx={iconStyle} />}
                  selectedExpandedPanel={expandAccordion}
                  total={0}
                />
                <AccordionItems
                  details="No assigned data"
                  expanded="deals"
                  handleChange={onHandleChange}
                  handleToggle={(name) => handleToggle(name)}
                  label="Deals"
                  leftIcon={<AttachMoneyIcon sx={iconStyle} />}
                  selectedExpandedPanel={expandAccordion}
                  total={0}
                />
              </Grid>
              <Grid item lg={6} xs={12}>
                <AccordionItems
                  details="No assigned data"
                  expanded="tags"
                  handleChange={onHandleChange}
                  handleToggle={(name) => handleToggle(name)}
                  label="Tags"
                  leftIcon={<LocalOfferIcon sx={iconStyle} />}
                  selectedExpandedPanel={expandAccordion}
                  total={0}
                />
                <AccordionItems
                  expanded="source"
                  handleChange={onHandleChange}
                  handleToggle={(name) => handleToggle(name)}
                  label="Source"
                  leftIcon={<ApprovalIcon sx={iconStyle} />}
                  selectedExpandedPanel={expandAccordion}
                  total={0}
                />
                <AccordionItems
                  hasPopup
                  expanded="task"
                  handleChange={onHandleChange}
                  handleToggle={(name) => handleToggle(name)}
                  label="Task"
                  leftIcon={<ListAltIcon sx={iconStyle} />}
                  selectedExpandedPanel={expandAccordion}
                  total={0}
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
              <Button
                color="error"
                startIcon={<DeleteIcon sx={{ fontSize: "1.2rem" }} />}
                sx={{ fontSize: "1.2rem" }}
                variant="contained"
              >
                Delete Contact
              </Button>
            </Box>
          </Stack>
        </Paper>
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
            startIcon={<AddCircleIcon />}
            style={{ padding: "0.5rem 1rem" }}
            variant="contained"
            onClick={onHandleSubmit}
          >
            Update
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
      <ViewInfoForm
        handleClose={handleInfoClose}
        open={infoOpen}
        setOpen={setInfoOpen}
      />
    </Slider>
  );
}

export default ViewInfoPopup;
