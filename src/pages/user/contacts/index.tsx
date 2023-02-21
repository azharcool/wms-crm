import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Stack,
} from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import useDecodedData from "hooks/useDecodedData";
import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useContactActions } from "redux/contacts/contacts";
import { RootState } from "redux/store";
import AddContact from "./components/AddContact";

import ContactTable from "./components/ContactTable";
import CreateNewList from "./components/create-form";
import TableToolbar, { IFilterType } from "./components/TableToolBar";
import { useFetchContacts } from "./query/useFetchContacts";
import useFetchMyListContactByListId from "./query/useFetchMyListContactByListId";
import { useFetchUserRoleByRoleName } from "./query/useFetchUserRoleByRoleName";

type IValues = { type: IFilterType; value: string | number };

type IFilterUrl = {
  url: string;
  values: IValues[];
};

function Contact() {
  const { setPaginationList } = useContactActions();
  const decodedToken = useDecodedData();
  const [open, setOpen] = useState(false);
  const [createListOpen, setCreateListOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [filterUrl, setFilterUrl] = useState<IFilterUrl>({
    url: `&RoleName=${decodedToken?.RoleName}&userid=${decodedToken.id}`,
    values: [
      {
        type: "userid",
        value: decodedToken.id,
      },
      {
        type: "RoleName",
        value: decodedToken.RoleName,
      },
    ],
  });

  const {
    data: contacts,
    refetch,
    isLoading,
    isFetching: isFetchingContact,
  } = useFetchContacts(currentPage, pageLimit, filterUrl.url);

  const { data: salesTeam, refetch: refetchTeam } =
    useFetchUserRoleByRoleName("all");

  const getContactMyListIds = useSelector(
    (state: RootState) => state.contacts.myListIds,
  );

  const { data: fetchMyListContactByIdsResponse, isFetching } =
    useFetchMyListContactByListId(getContactMyListIds.join(","));

  useEffect(() => {
    if (contacts && contacts?.indexData) {
      setPaginationList({ paginationList: contacts.indexData });
    }
  }, [contacts]);

  const handlePageChange = (pageNo: number) => {
    setCurrentPage(pageNo);
    setTimeout(() => {
      refetch();
    }, 500);
  };
  const handlePageLimitChange = (limit: number) => {
    setPageLimit(limit);
    setTimeout(() => {
      refetch();
    }, 500);
  };

  const handlerConvertFilter = (
    value: string | number,
    type: IFilterType,
    filterUrl: IFilterUrl,
  ) => {
    let newValues: IValues[] = [];
    const isExist = filterUrl.values.find((i) => i.type === type);

    if (isExist) {
      newValues = filterUrl.values
        .map((i) => {
          if (i.type === type) {
            return {
              ...i,
              value,
            };
          }

          return i;
        })
        .filter((i) => i.value);
    } else {
      newValues = [
        ...filterUrl.values,
        {
          type,
          value,
        },
      ];
    }

    const urls = newValues
      .map((i) => {
        return `&${i.type}=${i.value}`;
      })
      .filter(Boolean)
      .join("");

    return {
      url: urls,
      values: newValues,
    };
  };

  const handlefilterUrl = (value: string | number, type: IFilterType) => {
    let newFilterUrl: IFilterUrl;
    if (type === "From" && typeof value === "string") {
      const ranges = value.split("&");
      newFilterUrl = handlerConvertFilter(ranges[0], "From", filterUrl);
      newFilterUrl = handlerConvertFilter(ranges[1], "To", newFilterUrl);
    } else if (type === "userid" && typeof value === "string") {
      const users = value.split(",");
      newFilterUrl = handlerConvertFilter(users[0], "userid", filterUrl);
      newFilterUrl = handlerConvertFilter(users[1], "RoleName", newFilterUrl);
    } else {
      newFilterUrl = handlerConvertFilter(value, type, filterUrl);
    }

    setFilterUrl(newFilterUrl);

    setTimeout(() => {
      refetch();
    }, 500);
  };

  const handleResetFilterUrl = () => {
    setFilterUrl({
      url: `&userid=${decodedToken.id}`,
      values: [],
    });
    setTimeout(() => {
      refetch();
    }, 500);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateListOpen = () => {
    setCreateListOpen((s) => !s);
  };

  const handleDelete = async (id: number) => {
    // await deleteScreen(id);
  };

  return (
    <DashboardLayout isLoading={isLoading}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Card>
            <CardContent>
              <TableToolbar
                buttonText="Add Contact"
                handleClick={handleOpen}
                handleCreateOpen={handleCreateListOpen}
                handlefilterUrl={handlefilterUrl}
                handleResetFilterUrl={handleResetFilterUrl}
                salesTeam={salesTeam}
                title="Contact"
              />

              {isFetching || isLoading ? (
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  minHeight={500}
                >
                  <CircularProgress />
                </Stack>
              ) : (
                <Box sx={{ mt: 3 }}>
                  <ContactTable
                    contacts={
                      getContactMyListIds?.length
                        ? fetchMyListContactByIdsResponse?.data || []
                        : contacts?.data || []
                    }
                    handleDelete={handleDelete}
                    openModal={handleOpen}
                    setCurrentPage={(pageNo: number) =>
                      handlePageChange(pageNo)
                    }
                    setPageLimit={(limit: number) =>
                      handlePageLimitChange(limit)
                    }
                    total={contacts?.totalDocs || 0}
                  />
                </Box>
              )}
            </CardContent>
          </Card>
        </Container>
      </Box>
      <AddContact handleClose={handleClose} open={open} />
      <CreateNewList handleClose={handleCreateListOpen} open={createListOpen} />
    </DashboardLayout>
  );
}

export default memo(Contact);
