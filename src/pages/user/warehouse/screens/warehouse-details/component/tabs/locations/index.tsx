import React, { useState } from "react";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
// import AreasTable from "./component/AreasTable";
import LocationsTable from "./component/LocationsTable";
import locations from "./__mock__/Locations.json";
// import WarehouseForm from "./component/WarehouseForm";
function Locations() {
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
        <LocationsTable
          handleDeletePermission={handleDeleteArea}
          locations={locations}
          openModal={handleOpen}
          total={0}
        />
      </Card>
      {/* <WarehouseForm handleClose={handleClose} open={open} /> */}
    </Container>
  );
}

export default Locations;
