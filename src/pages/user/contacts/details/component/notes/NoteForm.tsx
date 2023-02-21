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
import useNotesForm, {
  INotesForm,
} from "pages/user/contacts/details/component/notes/useNotesForm";

import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useApiActions } from "../../query/useApiActions";

export interface Note {
  id: number;
  note: string;
}

interface Props {
  notesList: Note[];
  setNotesList: Dispatch<SetStateAction<Note[]>>;
  open: boolean;
  noteEdit?: INotesForm | null | undefined;
  handleClose: () => void;
  setNoteEdit?: (data: any) => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function NoteForm(props: Props) {
  const { open, noteEdit, setOpen, handleClose, setNoteEdit } = props;
  const { trySaveNote } = useApiActions();
  const contactsStore = useSelector((state: any) => state.contacts);
  const { contact } = contactsStore;
  const initialValues: INotesForm = {
    id: noteEdit?.id || 0,
    contactId: contact?.id,
    notesdescription: noteEdit?.notesdescription || "",
  };

  const onSubmit = async (values: INotesForm) => {
    await trySaveNote(values);
    formik.resetForm();
    setNoteEdit?.(null);
    setOpen(false);
  };
  const formik = useNotesForm(onSubmit, initialValues);

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
    isSubmitting,
  } = formik;

  return (
    <Slider open={open}>
      <DialogTitle>
        {noteEdit?.id ? "Edit Note" : "Add Note"}
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
            error={!!touched.notesdescription && !!errors.notesdescription}
            helperText={
              (touched.notesdescription && errors && errors.notesdescription) ||
              ""
            }
            name="Note"
            value={values.notesdescription}
            onBlur={handleBlur("notesdescription")}
            onChange={handleChange("notesdescription")}
          />
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
            ) : noteEdit?.id ? (
              "Edit"
            ) : (
              "Add"
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

export default NoteForm;
