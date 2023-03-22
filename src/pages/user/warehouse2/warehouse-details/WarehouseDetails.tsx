import { CardContent, Container, Tab, Tabs } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function WarehouseDetails() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const {
    warehouse: {
      warehouseLayout,
      details,
      generalDetails,
      areas,
      zones,
      locations,
      containers,
    },
  } = AppRoutes;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    const navLinks = new Map([
      [0, `/${warehouseLayout}/${details}/1/${generalDetails}`],
      [1, `/${warehouseLayout}/${details}/1/${areas}`],
      [2, `/${warehouseLayout}/${details}/1/${zones}`],
      [3, `/${warehouseLayout}/${details}/1/${locations}`],
      [4, `/${warehouseLayout}/${details}/1/${containers}`],
    ]);

    const link = navLinks.get(newValue || 0);

    if (link) {
      navigate(link);
    }
  };

  const handleOpen = () => {};

  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          breadcrumbs={[{ link: "Warehouse", to: "/warehouse" }]}
          buttonText="Edit"
          handleClick={handleOpen}
          title="Warehouse Details"
        />
        <Tabs
          aria-label="basic tabs example"
          value={value}
          onChange={handleChange}
        >
          <Tab label="GENERAL" />
          <Tab label="AREAS" />
          <Tab label="ZONES" />
          <Tab label="LOCATIONS" />
          <Tab label="CONTAINERS" />
        </Tabs>
        <Outlet />
      </CardContent>
    </Container>
  );
}

export default WarehouseDetails;
