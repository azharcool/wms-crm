import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Slider from "components/layouts/popup-modals/Slider";
import useNotesForm, {
  INotesForm,
} from "pages/user/contacts/details/component/notes/useNotesForm";
import { Dispatch, SetStateAction, useState } from "react";

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

function QuickReplyPopup(props: Props) {
  const { notesList, setNotesList, open, setOpen, handleClose } = props;
  const [note, setNote] = useState("");
  const tempArr: Note[] = [];

  const initialValues: INotesForm = {
    notesdescription: "",
  };

  const onSubmit = async (values: INotesForm) => {
    tempArr.push({ id: Math.random(), note: values.notesdescription });
    // setNotesList(notesList.concat(tempArr));
    setOpen(false);
  };
  const formik = useNotesForm(onSubmit, initialValues);

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
        Quick Reply
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
          <Typography variant="h4">Select Quick Reply </Typography>
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
            Select
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

export default QuickReplyPopup;
