import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SendIcon from "@mui/icons-material/Send";
import {
  alpha,
  Box,
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  MenuProps,
  Paper,
  Stack,
  styled,
  Switch,
  TextField as MUITextField,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Autocomplete from "@mui/material/Autocomplete";
import { red } from "@mui/material/colors";
import Slider from "components/layouts/popup-modals/Slider";
import Select from "pages/user/contacts/details/component/button-actions/Select";
import { Dispatch, SetStateAction, useState } from "react";
import palette from "theme/palette";

const useStyles = makeStyles({
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

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
];
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

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    elevation={0}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    width: "100%",
    maxWidth: "300px",
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

function SendEmail(props: Props) {
  const { notesList, setNotesList, open, setOpen, handleClose } = props;
  const classes = useStyles();
  const [sendImmediate, setSendImmediate] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDrodown = () => {
    setAnchorEl(null);
  };
  const openDropdown = Boolean(anchorEl);

  const [note, setNote] = useState("");
  const tempArr: Note[] = [];
  const handleSubmit = () => {
    tempArr.push({ id: Math.random(), note });
    // setNotesList(notesList.concat(tempArr));
    setOpen(false);
  };

  return (
    <Slider open={open}>
      <DialogTitle>
        Send Email
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
        <Paper sx={{ p: 2 }}>
          <form>
            <Stack gap={2}>
              <Stack alignItems="center" direction="row">
                <Box sx={{ width: "160px" }}>
                  <Typography>To</Typography>
                </Box>
                <Stack alignItems="center" direction="row" gap={2}>
                  <Autocomplete
                    disableClearable
                    freeSolo
                    id="to-email"
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                      <MUITextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                    sx={{ width: "400px" }}
                  />
                  <Button
                    startIcon={<AddCircleIcon />}
                    sx={{
                      backgroundColor: palette.info.light,
                    }}
                    variant="contained"
                  >
                    Add CC
                  </Button>
                  <Button
                    startIcon={<AddCircleIcon />}
                    sx={{
                      backgroundColor: palette.info.light,
                    }}
                    variant="contained"
                  >
                    Add BCC
                  </Button>
                </Stack>
              </Stack>
              <Stack alignItems="center" direction="row">
                <Box sx={{ width: "160px" }}>
                  <Typography>From</Typography>
                </Box>
                <Stack alignItems="center" direction="row" gap={2}>
                  <Autocomplete
                    disableClearable
                    freeSolo
                    id="from-email"
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                      <MUITextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                    sx={{ width: "400px" }}
                  />
                </Stack>
              </Stack>
              <Stack alignItems="center" direction="row">
                <Box sx={{ width: "160px" }}>
                  <Typography>Subject</Typography>
                </Box>
                <Stack alignItems="center" direction="row" gap={2}>
                  <Autocomplete
                    disableClearable
                    freeSolo
                    id="from-email"
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                      <MUITextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                    sx={{ width: "400px" }}
                  />
                  <Box>
                    <Button
                      disableElevation
                      aria-controls={open ? "demo-customized-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      endIcon={<KeyboardArrowDownIcon />}
                      id="demo-customized-button"
                      variant="contained"
                      onClick={handleDropdown}
                    >
                      Options
                    </Button>
                    <StyledMenu
                      anchorEl={anchorEl}
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      open={openDropdown}
                      onClose={handleCloseDrodown}
                    >
                      <MenuItem>
                        <Accordion>
                          <AccordionSummary
                            aria-controls="panel1a-content"
                            expandIcon={<ExpandMoreIcon />}
                            id="panel1a-header"
                            sx={{
                              "& .MuiAccordionSummary-content": {
                                justifyContent: "space-between",
                                borderRadius: "4px",
                              },
                              backgroundColor: palette.info.lightBg,
                            }}
                          >
                            <Typography
                              sx={{
                                paddingLeft: "5px",
                                fontSize: {
                                  xs: "0.8rem",
                                  lg: "0.9rem",
                                  xl: "1.1rem",
                                },
                                p: 0,
                              }}
                            >
                              Contact
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails
                            sx={{
                              backgroundColor: palette.info.lightBg,
                            }}
                          >
                            <List
                              sx={{
                                "& li": { borderBottom: "1px solid #c4c4c4" },
                              }}
                            >
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>First Name</ListItemText>
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>Last Name</ListItemText>
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>Contact Email</ListItemText>
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>
                                    Contact Phone Number
                                  </ListItemText>
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </AccordionDetails>
                        </Accordion>
                      </MenuItem>
                      <MenuItem>
                        <Accordion>
                          <AccordionSummary
                            aria-controls="panel1a-content"
                            expandIcon={<ExpandMoreIcon />}
                            id="panel1a-header"
                            sx={{
                              "& .MuiAccordionSummary-content": {
                                justifyContent: "space-between",
                                borderRadius: "4px",
                              },
                              backgroundColor: palette.info.lightBg,
                            }}
                          >
                            <Typography
                              sx={{
                                paddingLeft: "5px",
                                fontSize: {
                                  xs: "0.8rem",
                                  lg: "0.9rem",
                                  xl: "1.1rem",
                                },
                                p: 0,
                              }}
                            >
                              User
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails
                            sx={{
                              backgroundColor: palette.info.lightBg,
                            }}
                          >
                            <List
                              sx={{
                                "& li": {
                                  borderBottom: "1px solid #c4c4c4",
                                  display: "block",
                                },
                              }}
                            >
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>My First Name</ListItemText>
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>My Last Name</ListItemText>
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>My Phone Number</ListItemText>
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </AccordionDetails>
                        </Accordion>
                      </MenuItem>
                      <MenuItem>
                        <Accordion>
                          <AccordionSummary
                            aria-controls="panel1a-content"
                            expandIcon={<ExpandMoreIcon />}
                            id="panel1a-header"
                            sx={{
                              boxShadow: "none",
                              "& .MuiAccordionSummary-content": {
                                justifyContent: "space-between",
                                borderRadius: "4px",
                              },
                              backgroundColor: palette.info.lightBg,
                            }}
                          >
                            <Typography
                              sx={{
                                paddingLeft: "5px",
                                fontSize: {
                                  xs: "0.8rem",
                                  lg: "0.9rem",
                                  xl: "1.1rem",
                                },
                                p: 0,
                              }}
                            >
                              Date
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails
                            sx={{
                              backgroundColor: palette.info.lightBg,
                            }}
                          >
                            <List
                              sx={{
                                "& li": { borderBottom: "1px solid #c4c4c4" },
                              }}
                            >
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>Today Date</ListItemText>
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>Tomorrow Date</ListItemText>
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </AccordionDetails>
                        </Accordion>
                      </MenuItem>
                      <MenuItem>
                        <Accordion>
                          <AccordionSummary
                            aria-controls="panel1a-content"
                            expandIcon={<ExpandMoreIcon />}
                            id="panel1a-header"
                            sx={{
                              boxShadow: "none",
                              "& .MuiAccordionSummary-content": {
                                justifyContent: "space-between",
                                borderRadius: "4px",
                              },
                              backgroundColor: palette.info.lightBg,
                            }}
                          >
                            <Typography
                              sx={{
                                paddingLeft: "5px",
                                fontSize: {
                                  xs: "0.8rem",
                                  lg: "0.9rem",
                                  xl: "1.1rem",
                                },
                                p: 0,
                              }}
                            >
                              Agency
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails
                            sx={{
                              backgroundColor: palette.info.lightBg,
                            }}
                          >
                            <List
                              sx={{
                                "& li": { borderBottom: "1px solid #c4c4c4" },
                              }}
                            >
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>Agency Full Name</ListItemText>
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </AccordionDetails>
                        </Accordion>
                      </MenuItem>
                      <MenuItem>
                        <Accordion>
                          <AccordionSummary
                            aria-controls="panel1a-content"
                            expandIcon={<ExpandMoreIcon />}
                            id="panel1a-header"
                            sx={{
                              boxShadow: "none",
                              "& .MuiAccordionSummary-content": {
                                justifyContent: "space-between",
                                borderRadius: "4px",
                              },
                              backgroundColor: palette.info.lightBg,
                            }}
                          >
                            <Typography
                              sx={{
                                paddingLeft: "5px",
                                fontSize: {
                                  xs: "0.8rem",
                                  lg: "0.9rem",
                                  xl: "1.1rem",
                                },
                                p: 0,
                              }}
                            >
                              User Personalized Fields
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails
                            sx={{
                              backgroundColor: palette.info.lightBg,
                            }}
                          >
                            <List
                              sx={{
                                "& li": { borderBottom: "1px solid #c4c4c4" },
                              }}
                            >
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>First name</ListItemText>
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>Last name</ListItemText>
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>Last name</ListItemText>
                                </ListItemButton>
                              </ListItem>
                              <ListItem disablePadding>
                                <ListItemButton>
                                  <ListItemText>Last name</ListItemText>
                                </ListItemButton>
                              </ListItem>
                            </List>
                          </AccordionDetails>
                        </Accordion>
                      </MenuItem>
                    </StyledMenu>
                  </Box>
                </Stack>
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
              <Stack
                alignItems="center"
                direction="row"
                justifyContent="space-between"
                width="600px"
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
              </Stack>
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
  );
}

export default SendEmail;
