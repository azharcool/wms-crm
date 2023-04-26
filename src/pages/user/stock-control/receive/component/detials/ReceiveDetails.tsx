import { CardContent, Container, Tab, Tabs } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "routes/appRoutes";

function ReceiveDetailLayout() {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    stockControl: {
      layout,
      recieve: { general, history, details },
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
  return (
    <Container>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          breadcrumbs={[{ link: "StockControl", to: "/warehouse/listing" }]}
          title="Recieve"
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
        {/* changeable */}
        <Outlet />
      </CardContent>
    </Container>
  );
}

export default ReceiveDetailLayout;
