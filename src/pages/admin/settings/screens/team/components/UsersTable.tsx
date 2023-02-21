import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
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
} from "@mui/material";
import { useAlert } from "components/alert";
import ToggleSwitch from "components/switch";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useTeamActions } from "redux/team/team";
import palette from "theme/palette";
import { getStatus } from "utils";
import { IUser } from "../query/useFetchUsers";
import TeamCell from "./TeamCell";
import TeamHead from "./TeamHead";

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
  users: any;
  total: number;
  setCurrentPage: (page: number) => void;
  setPageLimit: (limit: number) => void;
  openModal?: (data: IUser) => void;
  handleSwitch?: (userId: number) => void;
  handleDeleteUser?: (userId: number) => void;
}

function UsersTable(props: IProps) {
  const {
    users,
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
      newSelectedCustomerIds = users.map((user: any) => {
        return user.id;
      });
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedUserIds(newSelectedCustomerIds);
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

  const handleModalOpen = (data: IUser) => {
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

  return (
    <Card>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050, overflow: "auto" }}>
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
                <TeamHead label="Full Name" />
                <TeamHead label="Email" />
                <TeamHead label="Status" />
                <TeamHead label="Role" />
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user: any) => {
                const { id, fullName, email, status, roleName } = user;
                return (
                  <TableRow
                    key={user.id}
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
                    <TeamCell> {fullName}</TeamCell>

                    <TeamCell>{email}</TeamCell>

                    <TeamCell>
                      <ToggleSwitch
                        checked={
                          getStatus(status) === "Active" &&
                          !selectedStatusIds.includes(id)
                        }
                        onChange={() => onSwitchChange(id)}
                      />
                    </TeamCell>

                    <TeamCell>{roleName}</TeamCell>

                    <TeamCell>
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
                          <IconButton onClick={() => handleDelete(id)}>
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
                          <IconButton onClick={() => handleModalOpen(user)}>
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
                    </TeamCell>
                  </TableRow>
                );
              })}
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

export default UsersTable;
