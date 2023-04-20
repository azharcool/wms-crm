import EditIcon from "@mui/icons-material/Edit";
import { CardContent, Container, Tab, Tabs } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function UserDetails() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    setting: {
      layout,
      user: { general, details, history, update },
    },
  } = AppRoutes;

  const navLinks = new Map([
    [0, `/${layout}/${details}/1/${general}`],
    [1, `/${layout}/${details}/1/${history}`],
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
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          breadcrumbs={[{ link: "Setting", to: "/setting/user/listing" }]}
          rightActions={[
            {
              id: crypto.randomUUID(),
              title: "Edit",
              onClick: () => {
                navigate(`/${layout}/${update}/1`);
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
          title="user"
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
          <Tab label="HISTORY" />
        </Tabs>
        <Outlet />
      </CardContent>
    </Container>
  );
}
export default UserDetails;
