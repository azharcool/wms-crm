/* eslint-disable import/no-extraneous-dependencies */
import { Box, Button, CircularProgress } from "@mui/material";
import TextField from "components/textfield";
import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useApiActions } from "../../query/useApiActions";
import { INotesForm } from "./useNotesForm";

function EditForm(props: any) {
  const { editText, id, closeEdit } = props;
  const [editValue, setEditValue] = useState(editText);
  const [isSubmitting, setSubmitting] = useState(false);
  const { trySaveNote } = useApiActions();
  const contactsStore = useSelector((state: any) => state.contacts);
  const { contact } = contactsStore;

  const handleChange = (e: any) => {
    setEditValue(e.target.value);
  };

  const editNote = async () => {
    setSubmitting(true);
    const values: INotesForm = {
      id,
      notesdescription: editValue,
      contactId: contact?.id,
    };
    await trySaveNote(values);
    closeEdit(id);
    setSubmitting(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      <TextField name="editNote" value={editValue} onChange={handleChange} />
      <Button sx={{ width: "100px" }} variant="contained" onClick={editNote}>
        {isSubmitting ? <CircularProgress color="warning" size={12} /> : "Edit"}
      </Button>
    </Box>
  );
}

export default EditForm;
