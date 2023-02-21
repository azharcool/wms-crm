/* eslint-disable import/no-extraneous-dependencies */

import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import useAddActivityForm from "pages/user/contacts/hooks/useAddActivityForm";
import { Dispatch, SetStateAction } from "react";
import { useApiActions } from "../../query/useApiActions";

export interface Note {
  id: number;
  note: string;
}

interface Props {
  open: boolean;
  data: any;
  handleClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function SnoozePopup(props: Props) {
  const { open, setOpen, handleClose, data } = props;
  const { trySaveActivity } = useApiActions();

  const onSubmit = async (values: any) => {
    await trySaveActivity({
      ...values,
      isReminder: values.isReminder !== null ? values.isReminder : false,
      setReminderBefore:
        values.setReminderBefore !== null ? values.setReminderBefore : 15,
    });
    formik.resetForm();
    setOpen(false);
  };

  const formik = useAddActivityForm(onSubmit, data);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    values,
    errors,
    touched,
    isSubmitting,
  } = formik;

  return (
    <Slider open={open} size="sm">
      <DialogTitle>
        Add Snooze Time
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
        <form>
          <TextField
            error={!!touched.date && !!errors.date}
            helperText={(touched.date && errors && errors.date) || ""}
            label="Date"
            minDate={new Date().toISOString().slice(0, 16)}
            name="activityDate"
            placeholder="Enter Date"
            style={{ width: "550px" }}
            type="datetime-local"
            value={values.date}
            onBlur={handleBlur("date")}
            onChange={(event) => {
              setFieldValue("date", event.target.value);
              setFieldValue("time", event.target.value);
            }}
          />
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Date&Time picker"
              renderInput={(params) => (
                <MUITextField sx={{ backgroundColor: "#fff" }} {...params} />
              )}
              value={value}
              onChange={handleDateChange}
            />
          </LocalizationProvider> */}
        </form>
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
            onClick={() => handleSubmit()}
          >
            {isSubmitting ? (
              <CircularProgress color="info" size={12} />
            ) : (
              "Snooze"
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

export default SnoozePopup;
