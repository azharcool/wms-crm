import { CardContent, Container, Tab, Tabs } from "@mui/material";
import TableToolbar from "components/table-toolbar";
import AppRoutes from "navigation/appRoutes";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { getWarehouseSelected } from "redux/warehouse/warehouseSelector";

function SupplierDetails() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const getSelectedWarehouse = useSelector(getWarehouseSelected);
  const warehouseId = getSelectedWarehouse.id;
  const { supplierId } = useParams();

  const {
    purchases: {
      layout,
      supplier: {
        details,
        generalDetails,
        addressDetails,
        bankAccountDetails,
        purchases,
        history,
      },
    },
  } = AppRoutes;

  const navLinks = new Map([
    [0, `/${layout}/${details}/${supplierId}/${generalDetails}`],
    [1, `/${layout}/${details}/${supplierId}/${addressDetails}`],
    [2, `/${layout}/${details}/${supplierId}/${bankAccountDetails}`],
    [3, `/${layout}/${details}/${supplierId}/${purchases}`],
    [4, `/${layout}/${details}/${supplierId}/${history}`],
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
          breadcrumbs={[{ link: "Supplier", to: "/purchase/supplier/listing" }]}
          // rightActions={[
          //   {
          //     id: crypto.randomUUID(),
          //     title: "Edit",
          //     onClick: () => {},
          //     icon: (
          //       <EditIcon
          //         sx={{
          //           fontSize: 18,
          //           mr: 1,
          //         }}
          //       />
          //     ),
          //   },
          // ]}
          title="Supplier Name"
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
          <Tab label="ADDRESS" />
          <Tab label="BANK ACCOUNT" />
          <Tab label="PURCHASES" />
          <Tab label="HISTORY" />
        </Tabs>
        <Outlet />
      </CardContent>
    </Container>
  );
}
export default SupplierDetails;
