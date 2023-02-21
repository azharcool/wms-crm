import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useAlert } from "components/alert";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTeamActions } from "redux/team/team";

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
  setCurrentPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
  openModal?: (data: any) => void;
  handleSwitch?: (userId: number) => void;
  handleDeleteUser?: (userId: number) => void;
}

function ConversationTable(props: any) {
  const {
    data,
    total,
    setCurrentPage,
    setPageLimit,
    openModal,
    handleSwitch,
    handleDeleteUser,
  } = props;

  const { setUser } = useTeamActions();
  const alert = useAlert();

  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [selectedStatusIds, setSelectedStatusIds] = useState<number[]>([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds: string[] = [];

    if (event.target.checked) {
      return true;
    }
    newSelectedCustomerIds = [];

    return setSelectedUserIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event: any, id: any) => {
    const selectedIndex = selectedUserIds.indexOf(id);
    let newSelectedCustomerIds: string[] = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedUserIds,
        id,
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedUserIds.slice(1),
      );
    } else if (selectedIndex === selectedUserIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedUserIds.slice(0, -1),
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedUserIds.slice(0, selectedIndex),
        selectedUserIds.slice(selectedIndex + 1),
      );
    }

    setSelectedUserIds(newSelectedCustomerIds);
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
    setUser({ user: data });
  };

  const onSwitchChange = (id: number) => {
    const tempIds = JSON.parse(JSON.stringify(selectedStatusIds));
    if (tempIds.includes(id)) {
      const filtered = tempIds.filter((x: number) => x !== id);
      setSelectedStatusIds(filtered);
    } else {
      setSelectedStatusIds([...tempIds, id]);
    }
    handleSwitch?.(id);
  };

  const handleDelete = (id: number) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => handleDeleteUser?.(id),
    });
  };

  //   const data: any = [
  //     { id: 1, title: "title", time: "time", duration: "duration", type: "type" },
  //   ];

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
                <TableCell>Title</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!data ? (
                <TableRow>
                  <TableCell colSpan={4}>No data available</TableCell>
                </TableRow>
              ) : (
                data?.map((activity: any) => {
                  const { id, title, dueDate, duration, type } = activity;
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
                      <TableCell>{dueDate}</TableCell>
                      <TableCell>{duration}</TableCell>
                      <TableCell>{type}</TableCell>
                    </TableRow>
                  );
                })
              )}
              <TableRow hover>
                <TableCell padding="checkbox">
                  <Checkbox value="true" onChange={(event) => {}} />
                </TableCell>
                <TableCell>Call</TableCell>
                <TableCell>04 Feb,2023</TableCell>
                <TableCell>1 hour(s)</TableCell>
                <TableCell sx={{ display: "flex", alignItems: "center" }}>
                  <LocalPhoneIcon sx={{ mr: 1 }} /> <span>Call</span>
                </TableCell>
              </TableRow>
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
    </Card>
  );
}

export default ConversationTable;
