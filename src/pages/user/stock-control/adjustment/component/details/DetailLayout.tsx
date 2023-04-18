import { Container, Stack, Tab, Tabs } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { getAdjustmentSelected } from "redux/stock-control/adjustmentSelector";

function DetailLayout() {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const selectedAdjustment = useSelector(getAdjustmentSelected);

  const {
    stockControl: {
      layout,
      adjustment: { generalDetails, historylisting, details },
    },
  } = AppRoutes;
  const navLinks = new Map([
    [0, `/${layout}/${details}/${selectedAdjustment.id}/${generalDetails}`],
    [1, `/${layout}/${details}/${selectedAdjustment.id}/${historylisting}`],
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
            link: "ADJUSTMENT",
            to: `/${AppRoutes.stockControl.layout}/${AppRoutes.stockControl.adjustment.listing}`,
          },
        ]}
        buttonText="Save"
        handleClick={() => {}}
        navTitle={`Stock Adjustment ${selectedAdjustment.name}`}
        // rightActions={rightActionsData}
        title={`Stock Adjustment ${selectedAdjustment.name}`}
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

export default DetailLayout;
