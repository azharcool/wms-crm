import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Box,
  Card,
  Checkbox,
  CircularProgress,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useAlert } from "components/alert";
import TableMessage from "components/table-message";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useContactActions } from "redux/contacts/contacts";
import palette from "theme/palette";
import { dateFormatter } from "utils";
import { useApiActions } from "../../../query/useApiActions";

interface IAddress {
  country: string;
  state: string;
  city: string;
  street: string;
}

export interface ICustomer {
  id: string;
  address: IAddress;
  avatarUrl: string;
  createdAt: number;
  email: string;
  name: string;
  phone: string;
}

interface IProps {
  data: any;
  total: number;
  type?: string;
  setCurrentPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
  openModal?: (data: any) => void;
  handleSwitch?: (userId: number) => void;
  handleDeleteUser?: (userId: number) => void;
}

function ConversationTable(props: any) {
  const {
    total,
    setCurrentPage,
    setPageLimit,
    openModal,
    type,
    activities,
    isLoading,
    activityLoading,
    isRefetching,
    setPage,
    setLimit,
    limit,
    page,
  } = props;

  const { setActivity } = useContactActions();
  const alert = useAlert();

  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [activityList, setActivityList] = useState<any[]>([]);
  const [tempList, setTempList] = useState<any[]>([]);
  const contactsStore = useSelector((state: any) => state.contacts);
  const { contact } = contactsStore;

  const { tryDeleteActivity, tryCompleteActivity } = useApiActions();

  useEffect(() => {
    if (activities?.data) {
      const newData = JSON.parse(JSON.stringify(activities.data));
      setActivityList(newData || []);
      setTempList(newData || []);
    }
  }, [activities]);

  useEffect(() => {
    if (type) {
      const filtered: any[] = [];
      tempList.filter((x: any) => {
        if (x.activityTypeName === type) {
          filtered.push(x);
          return x;
        }
        return x;
      });
      setActivityList(filtered);
    } else {
      setActivityList(activities?.data || []);
    }
  }, [type]);

  const deleteActivity = async (id: number) => {
    await tryDeleteActivity(id, contact?.id);
  };

  const completeActivity = async (id: number) => {
    await tryCompleteActivity(id, contact?.id);
  };

  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds: string[] = [];

    if (event.target.checked) {
      return true;
    }
    newSelectedCustomerIds = [];

    return setSelectedUserIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event: any, id: any) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you want to mark this as done?",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => completeActivity(id),
    });
  };

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
    setPageLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
    setCurrentPage(newPage);
  };

  const handleModalOpen = (data: any) => {
    openModal?.(data);
    setActivity({ activity: data });
  };

  const handleDelete = (id: number) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete?",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => deleteActivity(id),
    });
  };

  if (isLoading || activityLoading || isRefetching) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <CircularProgress size={17} />
      </Box>
    );
  }

  return (
    <Card>
      <PerfectScrollbar>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedUserIds.length === total}
                    color="primary"
                    indeterminate={
                      selectedUserIds.length > 0 &&
                      selectedUserIds.length < total
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  <Box sx={{ width: "150px" }}>Title</Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ width: "200px" }}>Due Date</Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ width: "80px" }}>Duration</Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ width: "100px" }}>Type</Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ width: "100px" }}>Action</Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {activityList?.length === 0 ? (
                <TableMessage colspan={5} message="No content Available" />
              ) : (
                activityList?.map((activity: any) => {
                  const { id, title, date, duration, activityTypeName } =
                    activity;
                  return (
                    <TableRow
                      key={id}
                      hover
                      selected={selectedUserIds.indexOf(id) !== -1}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={selectedUserIds.indexOf(id) !== -1}
                          value="true"
                          onChange={(event) => {
                            return handleSelectOne(event, id);
                          }}
                        />
                      </TableCell>
                      <TableCell>{title}</TableCell>
                      <TableCell>{dateFormatter(date)}</TableCell>
                      <TableCell>{duration}</TableCell>
                      <TableCell>{activityTypeName}</TableCell>
                      <TableCell>
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1,
                            "& svg": {
                              cursor: "pointer",
                            },
                          }}
                        >
                          <Box>
                            <IconButton
                              onClick={() => handleDelete(activity.id)}
                            >
                              <DeleteIcon
                                sx={{
                                  fontSize: "1.2rem",
                                  color: palette.secondary.lightGray,
                                  "&:hover": {
                                    color: palette.error.main,
                                  },
                                }}
                              />
                            </IconButton>
                          </Box>
                          <Box>
                            <IconButton
                              onClick={() => handleModalOpen(activity)}
                            >
                              <CreateIcon
                                sx={{
                                  fontSize: "1.2rem",
                                  color: palette.secondary.lightGray,
                                  "&:hover": {
                                    color: palette.info.main,
                                  },
                                }}
                              />
                            </IconButton>
                          </Box>
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
        count={activities?.totalDocs || 0}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
      />
    </Card>
  );
}

export default ConversationTable;
