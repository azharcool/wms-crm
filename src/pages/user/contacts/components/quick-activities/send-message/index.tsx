import { makeStyles } from "@material-ui/core/styles";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import CloseIcon from "@mui/icons-material/Close";
import CollectionsIcon from "@mui/icons-material/Collections";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import {
  Box,
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Paper,
  Stack,
  Switch,
  TextareaAutosize,
  Typography,
  styled,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import { red } from "@mui/material/colors";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { Dispatch, SetStateAction, useState } from "react";
import palette from "theme/palette";
import Select from "pages/user/contacts/details/component/button-actions/Select";
import QuickReplyPopup from "./QuickReplyPopup";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  ml: 1,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const useStyles = makeStyles({
  width_200: {
    width: "200px",
  },
  textAreaBox: {
    border: "1px solid #c4c4c4",
    borderRadius: "4px",
    marginTop: "1rem",
    padding: "1rem",
  },
  textArea: {
    padding: "1rem",
    margin: "0.5rem 0",
    border: "0",
    outline: "none !important",
    "&::placeholder": {
      fontSize: "1rem",
      opacity: "0.8",
    },
  },
  btnPlain: {
    fontSize: "1rem",
    borderRadius: "4px",
    boxShadow:
      "0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)",
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

function SendMessage(props: Props) {
  const classes = useStyles();
  const { notesList, setNotesList, open, setOpen, handleClose } = props;
  const [note, setNote] = useState("");
  const [openQuickReply, setOpenQuickReply] = useState(false);

  const handleOpenQuickReply = () => {
    setOpenQuickReply(true);
  };

  const handleCloseQuickReply = () => {
    setOpenQuickReply(false);
  };
  const [sendImmediate, setSendImmediate] = useState(true);
  const tempArr: Note[] = [];
  const handleSubmit = () => {
    tempArr.push({ id: Math.random(), note });
    // setNotesList(notesList.concat(tempArr));
    setOpen(false);
  };
  const handleChange = (e: any) => {
    setNote(e.target.value);
  };
  return (
    <>
      <Slider open={open}>
        <DialogTitle>
          Send message
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
          <Paper sx={{ padding: "1rem" }}>
            <form>
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
              >
                <Typography variant="h6">From number:</Typography>
                <TextField
                  isSelect
                  menuItems={[{ id: 1, value: "1234567890" }]}
                  name="addNotes"
                  style={{ width: "350px" }}
                  value={note}
                  onChange={handleChange}
                />
              </Stack>
              <Stack className={`${classes.textAreaBox}`}>
                <Stack
                  alignItems="center"
                  direction="row"
                  gap={2}
                  sx={{ color: "black" }}
                >
                  <TextField
                    isSelect
                    icon={<SettingsApplicationsIcon />}
                    menuItems={[{ id: 1, value: "1234567890" }]}
                    name="addNotes"
                    style={{
                      width: "300px",
                      "& .css-nji4tb-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                        {
                          p: "10px",
                        },
                      "& fieldset": { border: "1px solid #333" },
                    }}
                    value={note}
                    onChange={handleChange}
                  />
                  <Button
                    className={`${classes.width_200}`}
                    color="inherit"
                    startIcon={<BookmarksIcon />}
                    variant="outlined"
                    onClick={handleOpenQuickReply}
                  >
                    Quick response
                  </Button>
                  <Button
                    component="label"
                    className={`${classes.width_200}`}
                    color="inherit"
                    startIcon={<CollectionsIcon />}
                    variant="outlined"
                  >
                    Attachment
                    <input hidden multiple accept="image/*" type="file" />
                  </Button>
                </Stack>
                <TextareaAutosize
                  className={`${classes.textArea}`}
                  placeholder="Type message here..."
                />
              </Stack>
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: red[800],
                        "&.Mui-checked": {
                          color: red[600],
                        },
                      }}
                    />
                  }
                  label="Save as  quick reply"
                  sx={{ color: palette.text.muted }}
                />
                <FormControlLabel
                  control={<CustomSwitch defaultChecked />}
                  label="Reply unsubscrbe to stop"
                  labelPlacement="start"
                />
                <Typography>Total SMS 0/0</Typography>
              </Stack>
              <Stack alignItems="center">
                <Typography variant="h6">
                  Select when to send this followup
                </Typography>
                <Stack direction="row" gap={2} sx={{ margin: "1rem 0" }}>
                  <Button
                    className={`${classes.btnPlain}`}
                    sx={{
                      backgroundColor: sendImmediate
                        ? palette.info.light
                        : "inherit",
                      color: sendImmediate ? "#fff" : "inherit",
                    }}
                    onClick={() => setSendImmediate(true)}
                  >
                    Send Immediately
                  </Button>
                  <Button
                    className={`${classes.btnPlain}`}
                    sx={{
                      backgroundColor: !sendImmediate
                        ? palette.info.light
                        : "inherit",
                      color: !sendImmediate ? "#fff" : "inherit",
                    }}
                    onClick={() => setSendImmediate(false)}
                  >
                    On Selected Date
                  </Button>
                </Stack>
                <Box>
                  {sendImmediate ? (
                    <Typography>Message will be sent immediately</Typography>
                  ) : (
                    <Select isDateRange />
                  )}
                </Box>
              </Stack>
            </form>
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
              startIcon={<SendIcon />}
              style={{ padding: "0.5rem 1rem" }}
              variant="contained"
              onClick={handleSubmit}
            >
              Send
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
      <QuickReplyPopup
        handleClose={handleCloseQuickReply}
        open={openQuickReply}
        setOpen={setOpenQuickReply}
      />
    </>
  );
}

export default SendMessage;
