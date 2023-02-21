import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import MicIcon from "@mui/icons-material/Mic";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import {
  Box,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import { useAlert } from "components/alert";
import { PhoneDialog } from "components/Phone/DialButton";
import TableMessage from "components/table-message";
import AppRoutes from "navigation/appRoutes";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setContactIds, useContactActions } from "redux/contacts/contacts";
import palette from "theme/palette";
import { dateFormatter, formatPhoneNumber } from "utils";
import ViewInfoPopup from "../details/component/contact-tabs/view-info-popup";
import { useApiActions } from "../query/useApiAction";
import { IContacts } from "../query/useFetchContacts";
import COLUMNS from "../__mock__/columns.json";
import Cell from "./Cell";
import ContactItem from "./ContactItem";
import SendEmail from "./quick-activities/send-email";
import SendMessage from "./quick-activities/send-message";
import SendVideo from "./quick-activities/send-video";
import SendVoice from "./quick-activities/send-voice";
import { IContactDetails } from "./types/ContactAddRequest";

interface IProps {
  contacts: IContacts[];
  total: number;
  setCurrentPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
  openModal?: (data: any) => void;
  handleDelete?: (screenId: number) => void;
}

export interface IColumn {
  id?: number;
  name: string;
  isVisible: boolean;
}
const emails = ["username@gmail.com", "user02@gmail.com"];

function ContactTable(props: IProps) {
  const { contacts, total, setCurrentPage, setPageLimit } = props;
  const columnsStore = useSelector((state: any) => state.contacts);
  const { columnIds, deleteIds } = columnsStore;
  const { setColumnIds, setDeleteIds } = useContactActions();
  const { trySavePreferences, removeContactAction } = useApiActions();
  const [selectedContactIds, setSelectedContactIds] = useState<string[]>([]);
  const [columns, setColumns] = useState<IColumn[]>([]);
  const [contactList, setContactList] = useState<IContactDetails[]>([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [openInfo, setOpenInfo] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openVoice, setOpenVoice] = useState(false);
  const [openCall, setOpenCall] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    const tempColumns: any = [];
    COLUMNS.map((item, index) => {
      tempColumns.push({ ...item, id: index });
      return item;
    });

    setColumns(tempColumns);
  }, []);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newSelectedContactIds: string[] = [];
    const ids: any[] = [];
    if (event.target.checked) {
      newSelectedContactIds = contacts.map((user: any) => {
        ids.push({ id: user.id });
        return user.id;
      });
    } else {
      newSelectedContactIds = [];
    }

    setSelectedContactIds(newSelectedContactIds);
    setDeleteIds({ deleteIds: ids });
  };

  const handleSelectOne = (event: any, id: any) => {
    const selectedIndex = selectedContactIds.indexOf(id);
    let newSelectedContactIds: string[] = [];

    if (selectedIndex === -1) {
      newSelectedContactIds = newSelectedContactIds.concat(
        selectedContactIds,
        id,
      );
    } else if (selectedIndex === 0) {
      newSelectedContactIds = newSelectedContactIds.concat(
        selectedContactIds.slice(1),
      );
    } else if (selectedIndex === selectedContactIds.length - 1) {
      newSelectedContactIds = newSelectedContactIds.concat(
        selectedContactIds.slice(0, -1),
      );
    } else if (selectedIndex > 0) {
      newSelectedContactIds = newSelectedContactIds.concat(
        selectedContactIds.slice(0, selectedIndex),
        selectedContactIds.slice(selectedIndex + 1),
      );
    }
    dispatch(
      setContactIds({
        contactId: id,
      }),
    );
    const isExist = deleteIds?.find((x: any) => x.id === id);
    if (!isExist) setDeleteIds({ deleteIds: [...deleteIds, { id }] });

    setSelectedContactIds(newSelectedContactIds);
  };

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
    setPageLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
    setCurrentPage(newPage);
  };

  const handleHide = async (item: IColumn) => {
    let temp = JSON.parse(JSON.stringify(columnIds));
    const isExist = columnIds.find((x: IColumn) => x.id === item.id);

    if (isExist) {
      temp = temp.filter((x: IColumn) => x.id !== item.id);
      setColumnIds({ columnIds: temp });
      await trySavePreferences({
        preferenceName: "columns",
        preferences: JSON.stringify(temp),
      });
    } else {
      setColumnIds({ columnIds: [...temp, item] });
      await trySavePreferences({
        preferenceName: "columns",
        preferences: JSON.stringify([...temp, item]),
      });
    }

    return true;
  };

  // const gotoDetails = (id: number) => {
  //   navigate(`${AppRoutes.CONTACTS_DETAILS}/${id}`);
  // };

  const handleContactDelete = (id: number) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => {
        const newList = contactList.filter((i) => i.id !== id);
        setContactList(newList);
        removeContactAction(id);
      },
    });
  };

  const handleInfoOpen = () => {
    setOpenInfo(true);
  };

  const handleInfoClose = () => {
    setOpenInfo(false);
  };
  const handleMessageOpen = () => {
    setOpenMessage(true);
  };

  const handleMessageClose = () => {
    setOpenMessage(false);
  };
  const handleCallOpen = () => {
    setOpenCall(true);
  };

  const handleCallClose = () => {
    setOpenCall(false);
  };
  const handleEmailOpen = () => {
    setOpenEmail(true);
  };

  const handleEmailClose = () => {
    setOpenEmail(false);
  };
  const handleVoiceOpen = () => {
    setOpenVoice(true);
  };

  const handleVoiceClose = () => {
    setOpenVoice(false);
  };
  const handleVideoOpen = () => {
    setOpenVideo(true);
  };

  const handleVideoClose = () => {
    setOpenVideo(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const temp: any = [];
  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox" style={{ minWidth: 60 }}>
                  <Checkbox
                    checked={
                      contacts.length === 0
                        ? false
                        : selectedContactIds.length === contacts.length
                    }
                    color="primary"
                    onChange={handleSelectAll}
                  />
                </TableCell>
                {columns?.map((column) => {
                  const isExists = columnIds.find(
                    (x: IColumn) => x.id === column.id,
                  );
                  return (
                    <TableCell
                      key={column.name}
                      padding="checkbox"
                      style={{
                        minWidth: 200,
                        display: isExists ? "none" : "table-cell",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          // justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          component="p"
                          sx={{
                            fontSize: "inherit",
                            fontWeight: "600",
                          }}
                        >
                          {column.name}
                        </Typography>
                        <Tooltip title="Hide Column">
                          <IconButton onClick={() => handleHide(column)}>
                            <RemoveRedEyeIcon sx={{ fontSize: "1rem" }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  );
                })}
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.length === 0 ? (
                <TableMessage colspan={6} message="No content Available" />
              ) : (
                contacts?.map((contact: any) => {
                  const {
                    id,
                    firstName,
                    lastName,
                    phone,
                    email,
                    recordOwnerName,
                    pipelineName,
                    address,
                    alternatePhone,
                    secondEmail,
                    leadSourceName,
                    leadStatusName,
                    followUpEmail,
                    contractDetails,
                    createdOn,
                    updatedOn,
                  } = contact;
                  return (
                    <TableRow
                      key={id}
                      hover
                      selected={selectedContactIds.indexOf(id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedContactIds.indexOf(id) !== -1}
                          value="true"
                          onChange={(event) => {
                            return handleSelectOne(event, id);
                          }}
                        />
                      </TableCell>
                      <Cell columnIds={columnIds} id="contact info" index={0}>
                        <Box
                          sx={{ cursor: "pointer" }}
                          // onClick={() => gotoDetails(id)}
                        >
                          <ContactItem
                            icon={<PersonIcon />}
                            name={`${firstName} ${lastName}`}
                          />
                          <ContactItem
                            icon={<PhoneIcon />}
                            name={formatPhoneNumber(phone)}
                          />
                          <ContactItem icon={<EmailIcon />} name={email} />
                        </Box>
                      </Cell>
                      <Cell columnIds={columnIds} id="name" index={1}>
                        <ContactItem
                          icon={<PersonIcon />}
                          name={`${firstName} ${lastName}`}
                        />
                      </Cell>
                      <Cell columnIds={columnIds} id="options" index={2}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Tooltip title="User Info">
                            <IconButton onClick={handleInfoOpen}>
                              <PersonIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Chats">
                            <IconButton onClick={handleMessageOpen}>
                              <ChatBubbleIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Phone">
                            <IconButton onClick={handleClickOpen}>
                              <PhoneIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Email">
                            <IconButton onClick={handleEmailOpen}>
                              <EmailIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Call" onClick={handleCallOpen}>
                            <IconButton>
                              <MicIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Video" onClick={handleVideoOpen}>
                            <IconButton>
                              <VideoCallIcon />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Events">
                            <IconButton>
                              <CalendarMonthIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Cell>

                      <Cell columnIds={columnIds} id="owner" index={3}>
                        {recordOwnerName || "-"}
                      </Cell>

                      <Cell columnIds={columnIds} id="pipeline" index={4}>
                        {pipelineName}
                      </Cell>
                      <Cell columnIds={columnIds} id="leadSource" index={5}>
                        {leadSourceName}
                      </Cell>
                      <Cell columnIds={columnIds} id="leadStatus" index={6}>
                        {leadStatusName}
                      </Cell>
                      <Cell columnIds={columnIds} id="campaign" index={7}>
                        Campaign
                      </Cell>
                      <Cell columnIds={columnIds} id="activeCampaign" index={8}>
                        Active Campaign
                      </Cell>
                      <Cell columnIds={columnIds} id="address" index={9}>
                        {address?.googleAddress || "-"}
                      </Cell>
                      <Cell columnIds={columnIds} id="city" index={10}>
                        {address?.city || "-"}
                      </Cell>
                      <Cell columnIds={columnIds} id="state" index={11}>
                        {address?.state || "-"}
                      </Cell>
                      <Cell columnIds={columnIds} id="country" index={12}>
                        {address?.country || "-"}
                      </Cell>
                      <Cell columnIds={columnIds} id="zipCode" index={13}>
                        {address?.zipCode || "-"}
                      </Cell>
                      <Cell columnIds={columnIds} id="tags" index={14}>
                        Tags
                      </Cell>

                      <Cell columnIds={columnIds} id="price" index={15}>
                        {contractDetails?.perAppointmentFee || 0}
                      </Cell>
                      <Cell
                        columnIds={columnIds}
                        id="alternativePhone"
                        index={16}
                      >
                        {alternatePhone}
                      </Cell>
                      <Cell columnIds={columnIds} id="secondEmail" index={17}>
                        {secondEmail}
                      </Cell>
                      <Cell columnIds={columnIds} id="followUpEmail" index={18}>
                        {followUpEmail}
                      </Cell>
                      <Cell columnIds={columnIds} id="lastActivity" index={19}>
                        Last Activity
                      </Cell>
                      <Cell columnIds={columnIds} id="upcomingTask" index={20}>
                        Upcoming Task
                      </Cell>
                      <Cell columnIds={columnIds} id="lastContact" index={21}>
                        Last Contact
                      </Cell>
                      <Cell columnIds={columnIds} id="createdOn" index={22}>
                        {dateFormatter(createdOn) || "-"}
                      </Cell>
                      <Cell columnIds={columnIds} id="updatedOn" index={23}>
                        {(updatedOn && dateFormatter(updatedOn)) || "-"}
                      </Cell>

                      <Cell columnIds={columnIds} id="sendEmail" index={24}>
                        Last send email
                      </Cell>
                      <Cell columnIds={columnIds} id="receivedEmail" index={25}>
                        Last received email
                      </Cell>
                      <Cell columnIds={columnIds} id="sendEmail" index={26}>
                        sent Mail
                      </Cell>
                      <Cell columnIds={columnIds} id="receivedEmail" index={27}>
                        received email
                      </Cell>
                      <Cell columnIds={columnIds} id="lastCall" index={28}>
                        Last Call Made
                      </Cell>
                      <Cell columnIds={columnIds} id="callReceived" index={29}>
                        Last Call received
                      </Cell>
                      <Cell columnIds={columnIds} id="callsMade" index={30}>
                        Calls made
                      </Cell>

                      <Cell columnIds={columnIds} id="callsReceived" index={31}>
                        Calls received
                      </Cell>
                      <Cell columnIds={columnIds} id="lastTextSent" index={32}>
                        last text send
                      </Cell>
                      <Cell
                        columnIds={columnIds}
                        id="lastTextReceived"
                        index={33}
                      >
                        last text received
                      </Cell>
                      <Cell columnIds={columnIds} id="textsSent" index={34}>
                        texts sent
                      </Cell>
                      <Cell columnIds={columnIds} id="textsReceived" index={35}>
                        texts received
                      </Cell>

                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                          }}
                        >
                          <Box>
                            <DeleteIcon
                              sx={{
                                fontSize: "1.2rem",
                                color: palette.secondary.lightGray,
                                cursor: "pointer",
                                "&:hover": {
                                  color: palette.error.main,
                                },
                              }}
                              onClick={() => handleContactDelete(id)}
                            />
                          </Box>
                          {/* <Box>
                          <CreateIcon
                            sx={{
                              fontSize: "1.2rem",
                              color: palette.secondary.lightGray,
                              cursor: "pointer",
                              "&:hover": {
                                color: palette.info.main,
                              },
                            }}
                          />
                        </Box> */}
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })
              )}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={total}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
      />
      <ViewInfoPopup
        handleClose={handleInfoClose}
        open={openInfo}
        setOpen={setOpenInfo}
      />
      <SendMessage
        handleClose={handleMessageClose}
        open={openMessage}
        setOpen={setOpenMessage}
      />
      <SendEmail
        handleClose={handleEmailClose}
        open={openEmail}
        setOpen={setOpenEmail}
      />
      <SendVideo
        handleClose={handleVideoClose}
        open={openVideo}
        setOpen={setOpenVideo}
      />
      <SendVoice
        handleClose={handleVoiceClose}
        open={openVoice}
        setOpen={setOpenVoice}
      />
      <PhoneDialog
        open={open}
        selectedValue={selectedValue}
        onClose={handleClose}
      />
    </Card>
  );
}

export default ContactTable;
