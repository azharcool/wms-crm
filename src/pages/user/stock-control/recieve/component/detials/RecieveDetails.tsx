import { CardContent, Container, Tab, Tabs } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import { Outlet } from "react-router-dom";

function RecieveDetailLayout() {
  return (
    <Container maxWidth={false}>
      <CardContent sx={{ paddingTop: 0 }}>
        <TableToolbar
          breadcrumbs={[{ link: "Warehouse", to: "/warehouse/listing" }]}
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
          // value={value}
          // onChange={handleChange}
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

export default RecieveDetailLayout;
