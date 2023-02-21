// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { Edit } from "assets/icons/edit";
import { useAlert } from "components/alert";
// eslint-disable-next-line import/no-extraneous-dependencies
import { INotesForm } from "pages/user/contacts/details/component/notes/useNotesForm";
import { useState } from "react";
import { useSelector } from "react-redux";
import palette from "theme/palette";
import { dateFormatter } from "utils";
import { getInitials } from "utils/get-initials";
import { useApiActions } from "../../query/useApiActions";
import { useFetchNotes } from "../../query/useFetchNotes";
import NoteForm, { Note } from "./NoteForm";

const useStyles = makeStyles({
  notesCard: {
    backgroundColor: palette.info.lightBg,
    marginTop: "0.5rem",
    padding: "1rem",
    borderRadius: "0px 10px 10px 10px ",
    width: "94%",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-7px",
      //   backgroundColor: palette.info.lightBg,
      borderLeft: "10px solid transparent",
      borderRight: "10px solid transparent",
      borderTop: `10px solid ${palette.info.lightBg}`,
    },
  },
  notesCardHeader: {
    color: palette.text.secondary,
    borderBottom: "1px solid rgba(19, 49, 89, 0.05)",
    marginBottom: "0.5rem",
    paddingBottom: "0.5rem",
    position: "relative",
  },
  bottomText: { paddingTop: "0.3rem", color: palette.text.muted },
  editIcon: {
    position: "absolute",
    right: "40px",
    top: "35%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
  deleteIcon: {
    position: "absolute",
    right: "5px",
    top: "35%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
});

function Notes() {
  const classes = useStyles();
  const [notesList, setNotesList] = useState<Note[]>([]);
  const [open, setOpen] = useState(false);
  const [editable, setEditable] = useState<any[]>([]);
  const [noteEdit, setNoteEdit] = useState<INotesForm | undefined | null>(
    undefined,
  );
  const [currentPage, setCurrentPage] = useState(1);
  const { tryDeleteNote } = useApiActions();
  const contactsStore = useSelector((state: any) => state.contacts);
  const { contact } = contactsStore;
  const alert = useAlert();
  const {
    data: notes,
    isLoading,
    refetch,
  } = useFetchNotes(currentPage, 5, contact?.id);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setNoteEdit(null);
    setOpen(false);
  };
  const handleEdit = async (note: INotesForm) => {
    const isExist = editable.includes(note?.id);
    setNoteEdit(note);
    if (isExist) {
      const isALreadyExist = editable.filter((item) => item !== note?.id);
      setEditable(isALreadyExist);
    } else {
      setEditable([...editable, note?.id]);
      handleOpen();
    }
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
    setTimeout(() => {
      refetch();
    }, 1000);
  };

  const handleDelete = async (id: number) => {
    await tryDeleteNote(id, contact?.id);
  };

  const deleteNote = (id: number) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => handleDelete?.(id),
    });
  };

  if (isLoading) {
    return (
      <Box>
        <CircularProgress size={15} />
      </Box>
    );
  }
  const total = notes?.totalDocs || 0;
  const totalPage = notes?.totalDocs ? Math.ceil(total / 5) : 0;

  return (
    <Stack>
      <Stack direction="row" justifyContent="flex-end">
        <Button
          sx={{ backgroundColor: palette.info.light, maxWidth: "160px" }}
          variant="contained"
          onClick={handleOpen}
        >
          <AddCircleIcon />
          <Typography>Add Note</Typography>
        </Button>
      </Stack>
      <Stack sx={{ mt: 2 }}>
        {notes &&
          notes?.data?.map((note: any) => {
            return (
              <Box className={`${classes.notesCard}`}>
                <Stack
                  key={note?.id}
                  className={`${classes.notesCardHeader}`}
                  direction="row"
                  gap="12px"
                >
                  <Box>
                    <Avatar>{getInitials(note?.name || "-")}</Avatar>
                  </Box>
                  <Box>
                    <Typography component="h6" variant="h6">
                      {note?.name || "-"}
                    </Typography>
                    <Typography
                      sx={{ color: palette.text.muted }}
                      variant="body2"
                    >
                      <b>{dateFormatter(note.createdOn)}</b>
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      className={`${classes.editIcon}`}
                      onClick={() => handleEdit(note)}
                    >
                      <Edit sx={{ color: palette.gray.light }} />
                    </Box>
                    <Box
                      className={`${classes.deleteIcon}`}
                      onClick={() => deleteNote(note?.id)}
                    >
                      <DeleteIcon sx={{ color: palette.error.light }} />
                    </Box>
                  </Box>
                </Stack>
                <Box>
                  <Typography>{note?.notesdescription}</Typography>
                </Box>
              </Box>
            );
          })}
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {total > 0 ? (
            <Pagination
              count={totalPage}
              page={currentPage}
              onChange={(event, page) => handlePagination(page)}
            />
          ) : null}
        </Box>
      </Stack>
      <NoteForm
        handleClose={handleClose}
        noteEdit={noteEdit}
        notesList={notesList}
        open={open}
        setNoteEdit={setNoteEdit}
        setNotesList={setNotesList}
        setOpen={setOpen}
      />
    </Stack>
  );
}

export default Notes;
