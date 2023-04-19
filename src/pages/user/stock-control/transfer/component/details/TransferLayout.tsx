import { Container, Stack, Tab, Tabs } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function TransferLayout() {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    stockControl: {
      layout,
      transfer: { general, history, details, update },
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
    <Container maxWidth={false}>
      <TableToolbar
        breadcrumbs={[
          {
            link: "Transfer",
            to: `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.adjustment.listing}`,
          },
        ]}
        buttonText="Save"
        handleClick={() => {}}
        navTitle="Stock Transfer"
        // rightActions={rightActionsData}
        title="Stock Transfer"
      />
      <Stack direction="row">
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
      </Stack>

      <Outlet />
    </Container>
  );
}

export default TransferLayout;
