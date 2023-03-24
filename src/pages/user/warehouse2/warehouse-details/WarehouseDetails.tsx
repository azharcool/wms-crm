import EditIcon from "@mui/icons-material/Edit";
import { CardContent, Container, Tab, Tabs } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";

function WarehouseDetails() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const getSelectedWarehouse = useSelector(getWarehouseSelected);
  const warehouseId = getSelectedWarehouse.id;

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

  const navLinks = new Map([
    [0, `/${warehouseLayout}/${details}/${warehouseId}/${generalDetails}`],
    [1, `/${warehouseLayout}/${details}/${warehouseId}/${areas}`],
    [2, `/${warehouseLayout}/${details}/${warehouseId}/${zones}`],
    [3, `/${warehouseLayout}/${details}/${warehouseId}/${locations}`],
    [4, `/${warehouseLayout}/${details}/${warehouseId}/${containers}`],
  ]);

  useEffect(() => {
    navLinks.forEach((value, key) => {
      if (value.includes(location.pathname)) {
        setValue(key);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

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
          breadcrumbs={[{ link: "Warehouse", to: "/warehouse/listing" }]}
          buttonText="Edit"
          handleClick={handleOpen}
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "Edit",
              onClick: () => {
                navigate(`/${AppRoutes.warehouse.create}`);
              },
              icon: (
                <EditIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                  }}
                />
              ),
            },
          ]}
          title={getSelectedWarehouse.name}
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
