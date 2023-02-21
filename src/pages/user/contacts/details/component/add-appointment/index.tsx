import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Checkbox,
  DialogContent,
  FormControlLabel,
  FormGroup,
  TextField as MUITextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Slider from "components/layouts/popup-modals/Slider";
import TextField from "components/textfield";
import { SyntheticEvent, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import palette from "theme/palette";
import { IToggleModel } from "../../type";

interface IContactInfo {
  name: string;
  email: string;
  phone: string;
}

interface IAddAppointment {
  open: boolean;
  handleClose: (_: keyof IToggleModel) => void;
  name: string;
}

type IContactData = IContactInfo & { id: number };

const contactData: IContactData[] = [
  {
    id: 1,
    name: "riyaz",
    email: "riyaz@gmail.com",
    phone: "908888",
  },
  {
    id: 2,
    name: "mohsin",
    email: "mohsin@gmail.com",
    phone: "908888",
  },
  {
    id: 3,
    name: "riyaz",
    email: "",
    phone: "",
  },
  {
    id: 4,
    name: "",
    email: "demo@gmail.com",
    phone: "",
  },
  {
    id: 5,
    name: "",
    email: "",
    phone: "98000",
  },
];

function AddAppointment(props: IAddAppointment) {
  const { open, handleClose, name } = props;
  const [toggleSearch, setToggleSearch] = useState(true);
  const [search, setSearch] = useState("");
  const [contactInfo, setContactInfo] = useState<IContactInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [data, setData] = useState<IContactData[]>([]);

  const handleContacInfo = (data: IContactInfo) => {
    setContactInfo(data);
  };

  const handleSearch = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setSearch(target.value);
    const value = target.value.toLowerCase();
    const filterContact = contactData.filter(
      (i) =>
        i.email.toLowerCase().includes(value) ||
        i.name.toLowerCase().includes(value) ||
        i.phone.toLowerCase().includes(value),
    );
    setData(filterContact);
  };

  return (
    <Slider open={open}>
      <DialogTitle>
        Add Appointment
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={() => handleClose(name as keyof IToggleModel)}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <PerfectScrollbar>
        <DialogContent dividers>
          <form>
            <>
              <Stack direction="row" gap={2} marginBottom="1rem">
                <TextField
                  label="Title"
                  name="activityTitle"
                  placeholder="Enter Title"
                  style={{ width: "550px" }}
                />

                <TextField
                  label="Description"
                  name="addActivityDescription"
                  placeholder="Enter Description"
                  style={{ width: "550px" }}
                />
              </Stack>

              <Stack direction="row" gap={2} marginBottom="1rem">
                <TextField
                  isSelect
                  label="Assign to"
                  menuItems={[{ id: 1, value: "Riyaz" }]}
                  name="activityAssignto"
                  placeholder="Assign to"
                  style={{ width: "1115px" }}
                />
              </Stack>

              <Stack direction="row" gap={2} marginBottom="1rem">
                <TextField
                  isSelect
                  label="Calendar Widgets"
                  menuItems={[{ id: 1, value: "Riyaz" }]}
                  name="calendarWidgets"
                  style={{ width: "550px" }}
                />
                <TextField
                  isSelect
                  label="Duration"
                  menuItems={[{ id: 1, value: "00:30" }]}
                  name="activityDuration"
                  placeholder="Enter Duration "
                  style={{ width: "550px" }}
                />
              </Stack>

              <Stack direction="row" gap={2} marginBottom="2.5rem">
                <TextField
                  label="Date"
                  name="activityDate"
                  placeholder="Enter Date"
                  style={{ width: "550px" }}
                  type="date"
                />
                <TextField
                  label="Time"
                  name="activityTime"
                  placeholder="Enter time"
                  style={{ width: "550px" }}
                  type="time"
                />
              </Stack>

              {(contactInfo.name || contactInfo.email) && (
                <Stack direction="row" gap={2}>
                  {contactInfo.name && (
                    <TextField
                      disabled
                      label="Name"
                      name="name"
                      placeholder="Enter Name"
                      style={{ width: "550px" }}
                      value={contactInfo.name}
                    />
                  )}
                  {contactInfo.email && (
                    <TextField
                      disabled
                      label="Email"
                      name="email"
                      placeholder="Enter email"
                      style={{ width: "550px" }}
                      value={contactInfo.email}
                    />
                  )}
                </Stack>
              )}

              {(contactInfo.name || contactInfo.email || contactInfo.phone) && (
                <Stack
                  alignItems="center"
                  direction="row"
                  gap={2}
                  marginTop="1rem"
                >
                  {contactInfo.phone && (
                    <TextField
                      disabled
                      label="Phone"
                      name="phone"
                      placeholder="Enter phone"
                      style={{ width: "550px" }}
                      value={contactInfo.phone}
                    />
                  )}

                  <Box>
                    <Box />
                    <Button
                      sx={{
                        backgroundColor: palette.success.dark,
                        "&:hover": {
                          backgroundColor: palette.success.lightGreen,
                        },
                      }}
                      variant="contained"
                      onClick={() => {
                        setToggleSearch(true);
                        setContactInfo({
                          name: "",
                          phone: "",
                          email: "",
                        });
                      }}
                    >
                      Search Again
                    </Button>
                  </Box>
                </Stack>
              )}
              {toggleSearch && (
                <Stack
                  sx={{
                    position: "relative",
                  }}
                >
                  <MUITextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Search"
                    sx={{
                      backgroundColor: palette.common.white,
                      width: 550,
                    }}
                    type="text"
                    value={search}
                    onChange={handleSearch}
                  />
                  {data.length > 0 && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 60,
                      }}
                    >
                      <List
                        sx={{
                          // width: "100%",
                          width: 550,
                          bgcolor: "background.paper",
                          height: 200,
                          overflowY: "auto",
                          zIndex: 999,
                          paddingLeft: "1rem",
                        }}
                      >
                        {data.map((contact) => (
                          <ListItem
                            key={contact.id}
                            disableGutters
                            onClick={() => {
                              handleContacInfo({
                                email: contact.email,
                                name: contact.name,
                                phone: contact.phone,
                              });
                              setData([]);
                              setToggleSearch(false);
                              setSearch("");
                            }}
                          >
                            {contact.name ? (
                              <ListItemText primary={contact.name} />
                            ) : contact.email ? (
                              <ListItemText primary={contact.email} />
                            ) : (
                              <ListItemText primary={contact.phone} />
                            )}
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}
                </Stack>
              )}
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Send invitation to the attendee"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Send an email notification to the attendee"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="remind me before the event"
                />
              </FormGroup>
            </>
          </form>
        </DialogContent>
      </PerfectScrollbar>
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
            // onClick={() handleClose}
          >
            Save
          </Button>
          <Button
            autoFocus
            color="error"
            startIcon={<CloseIcon />}
            style={{ padding: "0.5rem 1rem" }}
            variant="contained"
            onClick={() => handleClose(name as keyof IToggleModel)}
          >
            Cancel
          </Button>
        </Stack>
      </DialogActions>
    </Slider>
  );
}

export default AddAppointment;
