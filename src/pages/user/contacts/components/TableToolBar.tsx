import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TuneIcon from "@mui/icons-material/Tune";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { Search as SearchIcon } from "assets/icons/search";
import { useAlert } from "components/alert";
import Filter from "components/filter";
import PopperContainer from "components/layouts/popper/PopperContainer";
import SecureBlock from "components/secure-block";
import { ACCESS_CODES, SCREEN_CODES } from "config";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import {
  removeContactMyListsIds,
  setContactMyListIds,
  setContactMyListIdsAll,
  useContactActions,
} from "redux/contacts/contacts";
import { RootState } from "redux/store";
import palette from "theme/palette";
import { isControlAccessible } from "utils";
import COLUMNS from "../__mock__/columns.json";
import { useApiActions } from "../query/useApiAction";
import useFetchMyList from "../query/useFetchMyList";
import { useFetchPreferences } from "../query/useFetchPreferences";
import ColumnListItem from "./ColumnListItem";
import { IColumn } from "./ContactTable";
import { actionsData } from "./data";

export type IFilterType =
  | "userid"
  | "leadstatusid"
  | "leadsourceid"
  | "From"
  | "To"
  | "type"
  | "uptodays"
  | "RoleName";

export type IHandleFilterUrl = (
  value: string | number,
  type: IFilterType,
) => void;
interface IMyLists {
  id: number;
  name: string;
  isChecked: boolean;
}

interface IFilterOwnerData {
  id: number;
  value: string;
}

interface IFilterByLeads {
  search: string;
  selectedValue: string;
  selectedId: string;
  data: IFilterOwnerData[];
}

interface ITableToolbar {
  title: string;
  buttonText: string;
  salesTeam: any;
  handleClick?: () => void;
  handleCreateOpen?: () => void;
  handlefilterUrl?: IHandleFilterUrl;
  handleResetFilterUrl?: () => void;
}

function TableToolbar(props: ITableToolbar) {
  const {
    salesTeam,
    title,
    buttonText,
    handleClick,
    handleCreateOpen,
    handlefilterUrl,
    handleResetFilterUrl,
  } = props;

  const user = useSelector((state: RootState) => state.user);
  const decodedToken: any = jwtDecode(user.token);
  const { setColumnIds, setDeleteIds } = useContactActions();
  const { trySavePreferences, bulkRemoveContacts } = useApiActions();

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [columns, setColumns] = useState<IColumn[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<string[]>([]);
  const [listOpen, setListOpen] = useState(false);
  const [listAnchorEl, setListAnchorEl] = useState<null | HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);
  const [myLists, setMyLists] = useState<IMyLists[]>([]);
  const [filterByLeads, setFilterByLeads] = useState<IFilterByLeads>({
    search: "",
    selectedValue: "",
    selectedId: "",
    data: [],
  });
  const alert = useAlert();
  const dispatch = useDispatch();
  const getContactMyListIds = useSelector(
    (state: RootState) => state.contacts.myListIds,
  );

  const { data: preferences, refetch } = useFetchPreferences();
  const { data: myListResponse } = useFetchMyList();
  const { removeMyListAction } = useApiActions();

  const columnsStore = useSelector((state: any) => state.contacts);
  const { columnIds, deleteIds } = columnsStore;

  useEffect(() => {
    if (preferences?.statusCode === 200) {
      const preference = preferences?.data?.find(
        (x: any) => x.preferenceName === "columns",
      );

      if (preference)
        setColumnIds({ columnIds: JSON.parse(preference?.preferences) });
    }
  }, [preferences]);

  useEffect(() => {
    if (columnIds) {
      refetch();
    }
  }, [columnIds]);

  useEffect(() => {
    if (salesTeam) {
      const data = salesTeam.data
        ?.filter((x: any) => x.roleName === "Sales")
        ?.map((item: any) => {
          return {
            id: item.id,
            value: item.fullName,
          };
        });
      setFilterByLeads((s) => ({
        ...s,
        data,
      }));
    }
  }, [salesTeam]);

  useEffect(() => {
    const tempColumns: any = [];
    COLUMNS.map((item, index) => {
      tempColumns.push({ ...item, id: index });
      return item;
    });
    setColumns(tempColumns);
  }, []);

  useEffect(() => {
    if (myListResponse) {
      const data = myListResponse.data.map((item) => {
        return {
          id: item.id,
          name: item.listName,
          isChecked: false,
        };
      });
      setMyLists(data);
    }
  }, [myListResponse]);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const handleListOpen = (event: React.MouseEvent<HTMLElement>) => {
    setListAnchorEl(event.currentTarget);
    setListOpen((previousOpen) => !previousOpen);
  };

  const handleListChange = (id: number) => {
    dispatch(setContactMyListIds({ id }));
  };

  const handleShowAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowAll(e.target.checked);
    const listIds = myLists.map((i) => i.id);
    dispatch(setContactMyListIdsAll({ checked: e.target.checked, listIds }));
  };

  const handleListItemDelete = (id: number) => {
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete?",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => {
        removeMyListAction(id);
        dispatch(removeContactMyListsIds({ id }));
      },
    });
  };

  const deleteMultiContacts = async (data: any) => {
    await bulkRemoveContacts(data);
  };

  const bulkDeleteContact = () => {
    if (deleteIds?.length === 0) return false;
    alert?.show({
      title: "Confirmation",
      message: "Do you really want to delete?",
      cancelText: "No",
      confirmText: "Yes",
      onConfirm: () => {
        deleteMultiContacts(deleteIds);
        setDeleteIds({ deleteIds: [] });
      },
    });
    return true;
  };

  const handleActions = (id: any) => {
    switch (id) {
      case 10:
        bulkDeleteContact();
        return true;
      default:
        return false;
    }
  };

  const handleSelect = async (item: IColumn) => {
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

  const handleFilterSelect = (event: SelectChangeEvent) => {
    const values = event.target.value.split(",");
    setFilterByLeads((s) => ({
      ...s,
      selectedValue: event.target.value,
    }));

    if (handlefilterUrl) {
      const user = salesTeam?.data?.find(
        (x: any) => x.id === Number(values[0]),
      );
      const userData = `${user?.id},${user.roleName}`;
      handlefilterUrl(userData, "userid");
    }
  };

  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: -1,
        }}
      >
        <Box>
          <Typography sx={{ m: 1 }} variant="h4">
            {title}
          </Typography>
        </Box>
        {/* filter_by_user */}
        <Stack alignItems="center" direction="row" spacing={2}>
          <SecureBlock
            accessible={isControlAccessible(
              ACCESS_CODES.FILTER_BY_USER,
              SCREEN_CODES.CONTACTS,
            )}
          >
            <FormControl style={{ minWidth: 200 }}>
              <Select
                displayEmpty
                id="demo-simple-select"
                labelId="demo-simple-select-label"
                SelectDisplayProps={{
                  style: { padding: "8px 12px" },
                }}
                value={filterByLeads.selectedValue}
                onChange={handleFilterSelect}
              >
                <ListSubheader>
                  <TextField
                    fullWidth
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                    placeholder="Type to search..."
                    onChange={(e) =>
                      setFilterByLeads((s) => ({
                        ...s,
                        search: e.target.value,
                      }))
                    }
                    onKeyDown={(e) => {
                      if (e.key !== "Escape") {
                        // Prevents autoselecting item while typing (default Select behaviour)
                        e.stopPropagation();
                      }
                    }}
                    size="small"
                    // Autofocus on textfield
                    autoFocus
                  />
                </ListSubheader>

                <MenuItem disabled value="">
                  <em>Filter By Lead Owner</em>
                </MenuItem>
                <MenuItem value={`${decodedToken.id}, All User`}>
                  <em>All User</em>
                </MenuItem>
                {filterByLeads.data
                  .filter((i) =>
                    i.value
                      .toLowerCase()
                      .includes(filterByLeads.search.toLowerCase()),
                  )
                  .map((item) => {
                    const values = Object.values(item).join(",");
                    return (
                      <MenuItem key={item.id} value={values}>
                        {item.value}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </SecureBlock>
          <SecureBlock
            accessible={isControlAccessible(
              ACCESS_CODES.CREATE_LIST,
              SCREEN_CODES.CONTACTS,
            )}
          >
            <Button
              color="primary"
              startIcon={<AddCircleRoundedIcon />}
              variant="contained"
              onClick={() => handleCreateOpen?.()}
            >
              Create List
            </Button>
          </SecureBlock>

          <SecureBlock
            accessible={isControlAccessible(
              ACCESS_CODES.ADD_CONTACTS,
              SCREEN_CODES.CONTACTS,
            )}
          >
            <Button
              color="primary"
              startIcon={<AddCircleRoundedIcon />}
              variant="contained"
              onClick={() => {
                handleClick?.();
              }}
            >
              {buttonText}
            </Button>
          </SecureBlock>

          <SecureBlock
            accessible={isControlAccessible(
              ACCESS_CODES.MY_LIST,
              SCREEN_CODES.CONTACTS,
            )}
          >
            <Button
              color="primary"
              startIcon={<FormatListBulletedIcon />}
              variant="contained"
              onClick={handleListOpen}
            >
              My Lists
            </Button>
          </SecureBlock>

          <SecureBlock
            accessible={isControlAccessible(
              ACCESS_CODES.COLUMNS,
              SCREEN_CODES.CONTACTS,
            )}
          >
            <Button
              color="primary"
              startIcon={<TuneIcon />}
              variant="contained"
              onClick={handleOpen}
            >
              Columns
            </Button>
          </SecureBlock>

          <SecureBlock
            accessible={isControlAccessible(
              ACCESS_CODES.FILTER,
              SCREEN_CODES.CONTACTS,
            )}
          >
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                const isToggle = !filterOpen;
                setFilterOpen(isToggle);
                if (isToggle === false && handleResetFilterUrl) {
                  handleResetFilterUrl();
                }
              }}
            >
              <FilterAltIcon />
            </Button>
          </SecureBlock>
        </Stack>
      </Box>
      <Stack
        alignItems="center"
        direction="row"
        gap={2}
        justifyContent="space-between"
        sx={{ mt: 3 }}
      >
        <Stack alignItems="center" direction="row" gap={2}>
          <SecureBlock
            accessible={isControlAccessible(
              ACCESS_CODES.FILTER_ACTION,
              SCREEN_CODES.CONTACTS,
            )}
          >
            <FormControl style={{ width: 200 }}>
              <Select
                displayEmpty
                id="action-select"
                labelId="action-select-label"
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <Typography
                        sx={{ fontSize: { xs: "0.8rem", lg: "1rem" } }}
                      >
                        Actions
                      </Typography>
                    );
                  }
                  return selected.join(", ");
                }}
                SelectDisplayProps={{
                  style: { padding: "8px 12px" },
                }}
                sx={{ fontSize: "12px" }}
                value={selectedAction}
              >
                {actionsData.map((action, index) => (
                  <>
                    <MenuItem
                      key={action.id}
                      value={action.value}
                      onClick={() => handleActions(action.id)}
                    >
                      <ListItemText primary={action.value} />
                      {action.checked && <CheckRoundedIcon />}
                    </MenuItem>
                    {index !== actionsData.length - 1 ? <Divider /> : null}
                  </>
                ))}
              </Select>
            </FormControl>
          </SecureBlock>
          <SecureBlock
            accessible={isControlAccessible(
              ACCESS_CODES.UPLOAD_FILE,
              SCREEN_CODES.CONTACTS,
            )}
          >
            <Button component="label" variant="contained">
              Upload File
              <input hidden type="file" />
            </Button>
          </SecureBlock>
        </Stack>
        {/* <Box sx={{ maxWidth: 400, marginLeft: "auto" }}>
          <TextField
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon color="action" fontSize="small">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              ),
            }}
            placeholder="Search page"
            variant="outlined"
          />
        </Box> */}
      </Stack>

      {filterOpen && (
        <Card sx={{ marginTop: 2 }}>
          <CardContent>
            <Filter handlefilterUrl={handlefilterUrl} />
          </CardContent>
        </Card>
      )}

      <PopperContainer anchorEl={anchorEl} open={open}>
        <Box
          sx={{
            mt: 1,
            borderRadius: "4px",

            p: 0.5,
            bgcolor: "background.paper",
            maxHeight: "260px",
            overflow: "auto",
            boxShadow: "0 0 17px 1px #bbb",
          }}
          onMouseLeave={() => {
            setOpen(false);
          }}
        >
          <PerfectScrollbar>
            {columns?.map((item: IColumn) => {
              const isExist = columnIds.find((x: IColumn) => x.id === item.id);
              return (
                <ColumnListItem
                  key={item.id}
                  column={item}
                  handleClick={handleSelect}
                  isExist={isExist}
                  name={item.name}
                />
              );
            })}
          </PerfectScrollbar>
        </Box>
      </PopperContainer>

      <PopperContainer anchorEl={listAnchorEl} open={listOpen}>
        <Box
          sx={{
            mt: 1,
            borderRadius: "4px",
            p: 0.5,
            bgcolor: "background.paper",
            maxHeight: "260px",
            overflow: "auto",
            boxShadow: "0 0 17px 1px #bbb",
          }}
          onMouseLeave={() => {
            setListOpen(false);
          }}
        >
          <PerfectScrollbar>
            <Stack
              alignItems="center"
              direction="row"
              justifyContent="start"
              minWidth={150}
            >
              <Checkbox
                checked={showAll}
                sx={{ padding: 0.6, color: palette.info.main }}
                onChange={handleShowAll}
              />
              <Typography component="p">Show All</Typography>
            </Stack>
            {myLists?.map((item) => {
              const ischeck = getContactMyListIds?.find((i) => i === item.id);
              return (
                <Stack
                  alignItems="center"
                  direction="row"
                  justifyContent="space-between"
                  minWidth={150}
                  spacing={3}
                >
                  <Stack alignItems="center" direction="row" spacing={1}>
                    <Checkbox
                      checked={Boolean(ischeck)}
                      sx={{ padding: 0.6, color: palette.info.main }}
                      onChange={() => handleListChange(item.id)}
                    />
                    <Typography component="p">{item.name}</Typography>
                  </Stack>

                  <IconButton onClick={() => handleListItemDelete(item.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </Stack>
              );
            })}
          </PerfectScrollbar>
        </Box>
      </PopperContainer>
    </Box>
  );
}

export default TableToolbar;
