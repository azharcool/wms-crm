import React, { useState } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import ContainersTable from "./component/ContainersTable";
import containers from "./__mock__/Containers.json";

function Containers() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  // const { deletePermission } = useApiActions();
  // const {
  //   data: permissions,
  //   refetch,
  //   isLoading,
  // } = useFetchPermissions(currentPage, pageLimit);

  // const handlePageChange = (pageNo: number) => {
  //   setCurrentPage(pageNo);
  //   setTimeout(() => {
  //     refetch();
  //   }, 500);
  // };
  // const handlePageLimitChange = (limit: number) => {
  //   setPageLimit(limit);
  //   setTimeout(() => {
  //     refetch();
  //   }, 500);
  // };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteArea = async (id: number) => {
    // await deletePermission(id);
  };
  return (
    <Container maxWidth={false}>
      <Card>
        <ContainersTable
          containers={containers}
          // containers={[]}
          handleDeletePermission={handleDeleteArea}
          openModal={handleOpen}
          total={0}
        />
      </Card>
      {/* <WarehouseForm handleClose={handleClose} open={open} /> */}
    </Container>
  );
}

export default Containers;