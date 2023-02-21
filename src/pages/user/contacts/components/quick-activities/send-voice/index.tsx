import { makeStyles } from "@material-ui/core/styles";
import BackupIcon from "@mui/icons-material/Backup";
import CloseIcon from "@mui/icons-material/Close";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import PermCameraMicIcon from "@mui/icons-material/PermCameraMic";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
import StopIcon from "@mui/icons-material/Stop";
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
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { Dispatch, SetStateAction, useState } from "react";
import palette from "theme/palette";
import Select from "pages/user/contacts/details/component/button-actions/Select";
import QuickReplyPopup from "./QuickReplyPopup";

export interface Note {
  id: number;
  note: string;
}

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
  btnIcon: {
    fontSize: "1rem",
    width: "100px",
    color: "#000",
  },
  btnPlain: {
    fontSize: "1rem",
    borderRadius: "4px",
    boxShadow:
      "0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)",
  },
});

interface Props {
  notesList?: Note[];
  setNotesList?: Dispatch<SetStateAction<Note[]>>;
  open: boolean;
  handleClose: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function SendVoice(props: Props) {
  const { notesList, setNotesList, open, setOpen, handleClose } = props;
  const [note, setNote] = useState("");
  const [sendImmediate, setSendImmediate] = useState(true);
  const [openQuickReply, setOpenQuickReply] = useState(false);

  const classes = useStyles();

  const tempArr: Note[] = [];
  const handleSubmit = () => {
    tempArr.push({ id: Math.random(), note });
    // setNotesList(notesList.concat(tempArr));
    setOpen(false);
  };
  const handleChange = (e: any) => {
    setNote(e.target.value);
  };
  const handleOpenQuickReply = () => {
    setOpenQuickReply(true);
  };

  const handleCloseQuickReply = () => {
    setOpenQuickReply(false);
  };
  return (
    <>
      <Slider open={open}>
        <DialogTitle>
          Add Note
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
            <Paper sx={{ padding: "1rem" }}>
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                marginBottom={2}
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
              <Stack
                alignItems="center"
                direction="row"
                gap={2}
                gridRow="inherit"
                sx={{
                  backgroundColor: palette.info.lightBg,
                  borderRadius: "4px",
                }}
              >
                <Stack
                  alignItems="center"
                  direction="row"
                  gap={2}
                  gridColumn={6}
                  justifyContent="center"
                  sx={{ width: "50%", textAlign: "center" }}
                >
                  <Box>
                    <IconButton
                      sx={{
                        color: palette.primary.light,
                        backgroundColor: "#d9e6fd",
                      }}
                    >
                      <KeyboardVoiceIcon />
                    </IconButton>
                    <Typography component="p" sx={{ mt: 1 }}>
                      Record
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton
                      sx={{
                        color: palette.error.light,
                        backgroundColor: "#d9e6fd",
                      }}
                    >
                      <StopIcon />
                    </IconButton>
                    <Typography component="p" sx={{ mt: 1 }}>
                      Stop
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton
                      aria-label="upload picture"
                      color="primary"
                      component="label"
                      sx={{
                        color: palette.primary.light,
                        backgroundColor: "#d9e6fd",
                      }}
                    >
                      <input hidden accept="image/*" type="file" />
                      <BackupIcon />
                    </IconButton>

                    <Typography component="p" sx={{ mt: 1 }}>
                      Upload
                    </Typography>
                  </Box>
                  <Box>
                    <IconButton
                      sx={{
                        color: palette.primary.light,
                        backgroundColor: "#d9e6fd",
                      }}
                      onClick={handleOpenQuickReply}
                    >
                      <SaveIcon />
                    </IconButton>
                    <Typography component="p" sx={{ mt: 1 }}>
                      Quick Reply
                    </Typography>
                  </Box>
                </Stack>
                <Stack
                  gridColumn={6}
                  justifyContent="center"
                  sx={{
                    width: "50%",
                    minHeight: "150px",
                    backgroundColor: "#fff",
                    margin: "1rem 1rem 1rem 0",
                    padding: "1rem",
                    borderRadius: "8px",
                    position: "relative",
                    boxShadow:
                      "0px 1px 1px rgb(100 116 139 / 6%), 0px 1px 2px rgb(100 116 139 / 10%)",
                    zIndex: 0,
                  }}
                >
                  <PermCameraMicIcon
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      color: "#d9e6fd",
                      fontSize: "6rem",
                      zIndex: -1,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "1rem",
                        lg: "1.2rem",
                        xl: "1.4rem",
                        color: palette.text.secondary,
                      },
                    }}
                  >
                    How would you like to record your audio file?
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <Typography
                  color="error"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem 0",
                    fontWeight: "500",
                  }}
                >
                  <InfoIcon sx={{ mr: 1 }} /> Audio duration must be more then 5
                  seconds to 3 minutes.
                </Typography>
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
            </Paper>
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

export default SendVoice;
