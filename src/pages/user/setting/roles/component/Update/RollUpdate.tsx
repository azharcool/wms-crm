import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { CardContent, Container, Tab, Tabs } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import useGetByIdWarehouse from "hooks/querys/warehouse/useGetByIdWarehouse";
import AppRoutes from "navigation/appRoutes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";

function RollUpdate() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    setting: {
      layout,
      role: { general, update, permission, listing },
    },
  } = AppRoutes;

  const navLinks = new Map([
    [0, `/${layout}/${update}/1/${general}`],
    [1, `/${layout}/${update}/1/${permission}`],
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
          breadcrumbs={[{ link: "Setting", to: "/setting/role/listing" }]}
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "Cancel",
              onClick: () => {
                navigate(`/${layout}/${listing}`);
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
            {
              id: crypto.randomUUID(),
              title: "Save",
              onClick: () => {
              },
              icon: (
                <SaveIcon
                  sx={{
                    fontSize: 18,
                    mr: 1,
                  }}
                />
              ),
            },
          ]}
          title="Role"
        />
        <Tabs
          aria-label="basic tabs example"
          sx={{
            "& .MuiTab-root.Mui-selected": {
              color: "#c44e13",
            },
          }}
          TabIndicatorProps={{
            style: {
              background: "#c44e13",
            },
          }}
          value={value}
          onChange={handleChange}
        >
          <Tab label="GENERAL" />
          <Tab label="PERMISSION" />
        </Tabs>
        <Outlet />
      </CardContent>
    </Container>
  );
}
export default RollUpdate;
