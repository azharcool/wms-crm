import { Grid, Card, SelectChangeEvent } from "@mui/material";
import { Container, Stack } from "@mui/system";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import React, { useState } from "react";
import { crudData } from "__mock__";
import {
  IFullfillment,
  ICatalog,
  IPurchases,
  IStocks,
  ISettings,
  IDashboard,
  IFinance,
  IWarehouses,
} from "types/setting/roles/permission";

function Permission() {
  const [orderValues, setOrderValues] = React.useState<string[]>([]);
  const [fullfillment, setFullfillment] = useState<IFullfillment>();
  const [catalog, setCatalog] = useState<ICatalog>();
  const [purchases, setPurchases] = useState<IPurchases>();
  const [stocks, setStocks] = useState<IStocks>();
  const [settings, setSettings] = useState<ISettings>();
  const [warehouse, setWarehouse] = useState<IWarehouses>();
  const [dashboard, setDashboard] = useState<IDashboard>();
  const [finance, setFinance] = useState<IFinance>();

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2} my={2}>
        <CustomGrid>
          <CustomAccordian title="Fullfillment">
            <Stack direction="column" gap={2}>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="order"
                  values={fullfillment?.orders}
                  handleChange={(
                    event: SelectChangeEvent<typeof orderValues>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setFullfillment((prev: any) => {
                      return {
                        ...prev,
                        orders:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Order"
                  accessItems={[
                    ...crudData,
                    "Allocate",
                    "Process",
                    "Resolve",
                    "Cancel",
                  ]}
                />
                <CustomChipSelect
                  name="customers"
                  values={fullfillment?.customers}
                  handleChange={(
                    event: SelectChangeEvent<typeof fullfillment>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setFullfillment((prev: any) => {
                      return {
                        ...prev,
                        customers:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Customers"
                  accessItems={crudData}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="picklist"
                  values={fullfillment?.picklists}
                  handleChange={(
                    event: SelectChangeEvent<typeof fullfillment>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setFullfillment((prev: any) => {
                      return {
                        ...prev,
                        picklists:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Picklist"
                  accessItems={[
                    "View",
                    "Process",
                    "Progress",
                    "Complete",
                    "Generate",
                    "Pick",
                    "Edit",
                  ]}
                />
                <CustomChipSelect
                  name="packing"
                  values={fullfillment?.packing}
                  handleChange={(
                    event: SelectChangeEvent<typeof fullfillment>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setFullfillment((prev: any) => {
                      return {
                        ...prev,
                        packing:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Packing"
                  accessItems={["View", "Edit", "Process", "Complete"]}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="shipments"
                  values={fullfillment?.shipments}
                  handleChange={(
                    event: SelectChangeEvent<typeof fullfillment>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setFullfillment((prev: any) => {
                      return {
                        ...prev,
                        shipments:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Shipments"
                  accessItems={["View", "Edit", "Process"]}
                />
                <CustomChipSelect
                  name="returns"
                  values={fullfillment?.returns}
                  handleChange={(
                    event: SelectChangeEvent<typeof fullfillment>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setFullfillment((prev: any) => {
                      return {
                        ...prev,
                        returns:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Returns"
                  accessItems={[...crudData, "Process"]}
                />
              </Stack>
            </Stack>
          </CustomAccordian>
        </CustomGrid>
        <CustomGrid>
          <CustomAccordian title="Catalog">
            <Stack direction="column" gap={2}>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="products"
                  values={catalog?.product}
                  handleChange={(
                    event: SelectChangeEvent<typeof orderValues>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setCatalog((prev: any) => {
                      return {
                        ...prev,
                        product:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Product"
                  accessItems={crudData}
                />
                <CustomChipSelect
                  name="variants"
                  values={catalog?.variants}
                  handleChange={(event: SelectChangeEvent<typeof catalog>) => {
                    const {
                      target: { value },
                    } = event;
                    setCatalog((prev: any) => {
                      return {
                        ...prev,
                        variants:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Variants"
                  accessItems={["View", "Edit", "Delete"]}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="categories"
                  values={catalog?.categories}
                  handleChange={(event: SelectChangeEvent<typeof catalog>) => {
                    const {
                      target: { value },
                    } = event;
                    setCatalog((prev: any) => {
                      return {
                        ...prev,
                        categories:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Picklist"
                  accessItems={[
                    "View",
                    "Process",
                    "Progress",
                    "Complete",
                    "Generate",
                    "Pick",
                    "Edit",
                  ]}
                />
                <CustomChipSelect
                  name="brand"
                  values={catalog?.brand}
                  handleChange={(event: SelectChangeEvent<typeof catalog>) => {
                    const {
                      target: { value },
                    } = event;
                    setCatalog((prev: any) => {
                      return {
                        ...prev,
                        brand:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Brands"
                  accessItems={["View", "Edit", "Process", "Complete"]}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="listing"
                  values={catalog?.listing}
                  handleChange={(event: SelectChangeEvent<typeof catalog>) => {
                    const {
                      target: { value },
                    } = event;
                    setCatalog((prev: any) => {
                      return {
                        ...prev,
                        listing:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Listing"
                  accessItems={[
                    "View",
                    "Add",
                    "Reject",
                    "Publish",
                    "Unpublish",
                    "Pause",
                  ]}
                />
                <CustomChipSelect
                  name="unit"
                  values={catalog?.unit}
                  handleChange={(event: SelectChangeEvent<typeof catalog>) => {
                    const {
                      target: { value },
                    } = event;
                    setCatalog((prev: any) => {
                      return {
                        ...prev,
                        unit:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Unit"
                  accessItems={["View"]}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="channel"
                  values={catalog?.channels}
                  handleChange={(event: SelectChangeEvent<typeof catalog>) => {
                    const {
                      target: { value },
                    } = event;
                    setCatalog((prev: any) => {
                      return {
                        ...prev,
                        channels:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Channels"
                  accessItems={["View"]}
                />
              </Stack>
            </Stack>
          </CustomAccordian>
        </CustomGrid>
        <CustomGrid>
          <CustomAccordian title="Purchases">
            <Stack direction="column" gap={2}>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="purchaseOrder"
                  values={purchases?.purchase}
                  handleChange={(
                    event: SelectChangeEvent<typeof orderValues>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setPurchases((prev: any) => {
                      return {
                        ...prev,
                        purchase:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Purchase-Orders"
                  accessItems={[...crudData, "Close", "Cancel", "Progress"]}
                />
                <CustomChipSelect
                  name="supplier"
                  values={catalog?.product}
                  handleChange={(
                    event: SelectChangeEvent<typeof orderValues>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setCatalog((prev: any) => {
                      return {
                        ...prev,
                        product:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Supplier"
                  accessItems={crudData}
                />
              </Stack>
            </Stack>
          </CustomAccordian>
        </CustomGrid>
        <CustomGrid>
          <CustomAccordian title="Stock">
            <Stack direction="column" gap={2}>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="adjustments"
                  values={stocks?.adjustment}
                  handleChange={(event: SelectChangeEvent<typeof stocks>) => {
                    const {
                      target: { value },
                    } = event;
                    setStocks((prev: any) => {
                      return {
                        ...prev,
                        adjustment:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Adjustments"
                  accessItems={[...crudData, "Complete", "Cancel"]}
                />
                <CustomChipSelect
                  name="putaway"
                  values={stocks?.putaway}
                  handleChange={(event: SelectChangeEvent<typeof stocks>) => {
                    const {
                      target: { value },
                    } = event;
                    setStocks((prev: any) => {
                      return {
                        ...prev,
                        putaway:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Putaway"
                  accessItems={[
                    "View",
                    "Edit",
                    "Process",
                    "Progress",
                    "Complete",
                  ]}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="receive"
                  values={stocks?.putaway}
                  handleChange={(event: SelectChangeEvent<typeof stocks>) => {
                    const {
                      target: { value },
                    } = event;
                    setStocks((prev: any) => {
                      return {
                        ...prev,
                        putaway:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Receive"
                  accessItems={["View", "Receive", "Complete"]}
                />
                <CustomChipSelect
                  name="stockTransfer"
                  values={stocks?.stockTransfer}
                  handleChange={(event: SelectChangeEvent<typeof stocks>) => {
                    const {
                      target: { value },
                    } = event;
                    setStocks((prev: any) => {
                      return {
                        ...prev,
                        stockTransfer:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Stock-Transfer"
                  accessItems={["View", "Edit", "Add", "Process", "Cancel"]}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="unitNumber"
                  values={stocks?.unitNumbers}
                  handleChange={(event: SelectChangeEvent<typeof stocks>) => {
                    const {
                      target: { value },
                    } = event;
                    setStocks((prev: any) => {
                      return {
                        ...prev,
                        unitNumbers:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Unit-Numbers"
                  accessItems={["Add"]}
                />
                <CustomChipSelect
                  name="movement"
                  values={stocks?.movements}
                  handleChange={(event: SelectChangeEvent<typeof stocks>) => {
                    const {
                      target: { value },
                    } = event;
                    setStocks((prev: any) => {
                      return {
                        ...prev,
                        movements:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Movements"
                  accessItems={[...crudData, "Complete", "Cancel"]}
                />
              </Stack>
            </Stack>
          </CustomAccordian>
        </CustomGrid>
        <CustomGrid>
          <CustomAccordian title="Settings">
            <Stack direction="column" gap={2}>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="adjustmentReasons"
                  values={settings?.adjustmentReasons}
                  handleChange={(event: SelectChangeEvent<typeof stocks>) => {
                    const {
                      target: { value },
                    } = event;
                    setSettings((prev: any) => {
                      return {
                        ...prev,
                        adjustmentReasons:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Adjustment-Reasons"
                  accessItems={crudData}
                />
                <CustomChipSelect
                  name="containerTypes"
                  values={settings?.containerTypes}
                  handleChange={(event: SelectChangeEvent<typeof settings>) => {
                    const {
                      target: { value },
                    } = event;
                    setSettings((prev: any) => {
                      return {
                        ...prev,
                        containerTypes:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Container-Types"
                  accessItems={crudData}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="integration"
                  values={settings?.integrations}
                  handleChange={(event: SelectChangeEvent<typeof settings>) => {
                    const {
                      target: { value },
                    } = event;
                    setSettings((prev: any) => {
                      return {
                        ...prev,
                        integrations:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Integration"
                  accessItems={crudData}
                />
                <CustomChipSelect
                  name="users"
                  values={settings?.users}
                  handleChange={(event: SelectChangeEvent<typeof settings>) => {
                    const {
                      target: { value },
                    } = event;
                    setSettings((prev: any) => {
                      return {
                        ...prev,
                        users:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Users"
                  accessItems={crudData}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="roles"
                  values={settings?.roles}
                  handleChange={(event: SelectChangeEvent<typeof settings>) => {
                    const {
                      target: { value },
                    } = event;
                    setSettings((prev: any) => {
                      return {
                        ...prev,
                        roles:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Roles"
                  accessItems={crudData}
                />
                <CustomChipSelect
                  name="filter"
                  values={settings?.filters}
                  handleChange={(event: SelectChangeEvent<typeof settings>) => {
                    const {
                      target: { value },
                    } = event;
                    setSettings((prev: any) => {
                      return {
                        ...prev,
                        filters:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Roles"
                  accessItems={crudData}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="condition"
                  values={settings?.condition}
                  handleChange={(event: SelectChangeEvent<typeof settings>) => {
                    const {
                      target: { value },
                    } = event;
                    setSettings((prev: any) => {
                      return {
                        ...prev,
                        condition:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Condition"
                  accessItems={crudData}
                />
                <CustomChipSelect
                  name="paymentType"
                  values={settings?.paymentType}
                  handleChange={(event: SelectChangeEvent<typeof settings>) => {
                    const {
                      target: { value },
                    } = event;
                    setSettings((prev: any) => {
                      return {
                        ...prev,
                        paymentType:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Payments-Type"
                  accessItems={crudData}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="account"
                  values={settings?.account}
                  handleChange={(event: SelectChangeEvent<typeof settings>) => {
                    const {
                      target: { value },
                    } = event;
                    setSettings((prev: any) => {
                      return {
                        ...prev,
                        account:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Account"
                  accessItems={["View", "Edit"]}
                />
                <CustomChipSelect
                  name="files"
                  values={settings?.files}
                  handleChange={(event: SelectChangeEvent<typeof settings>) => {
                    const {
                      target: { value },
                    } = event;
                    setSettings((prev: any) => {
                      return {
                        ...prev,
                        files:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Files"
                  accessItems={["Upload"]}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="biiling"
                  values={settings?.billing}
                  handleChange={(event: SelectChangeEvent<typeof settings>) => {
                    const {
                      target: { value },
                    } = event;
                    setSettings((prev: any) => {
                      return {
                        ...prev,
                        billing:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Billing"
                  accessItems={crudData}
                />
                <CustomChipSelect
                  name="automation"
                  values={settings?.automation}
                  handleChange={(event: SelectChangeEvent<typeof settings>) => {
                    const {
                      target: { value },
                    } = event;
                    setSettings((prev: any) => {
                      return {
                        ...prev,
                        automation:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Automation"
                  accessItems={crudData}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="contract"
                  values={settings?.contracts}
                  handleChange={(event: SelectChangeEvent<typeof settings>) => {
                    const {
                      target: { value },
                    } = event;
                    setSettings((prev: any) => {
                      return {
                        ...prev,
                        contracts:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Contracts"
                  accessItems={crudData}
                />
              </Stack>
            </Stack>
          </CustomAccordian>
        </CustomGrid>
        <CustomGrid>
          <CustomAccordian title="Warehouse">
            <Stack direction="column" gap={2}>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="warehouse"
                  values={warehouse?.warehouse}
                  handleChange={(
                    event: SelectChangeEvent<typeof warehouse>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setWarehouse((prev: any) => {
                      return {
                        ...prev,
                        warehouse:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Warehouses"
                  accessItems={crudData}
                />
                <CustomChipSelect
                  name="area"
                  values={warehouse?.area}
                  handleChange={(
                    event: SelectChangeEvent<typeof warehouse>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setWarehouse((prev: any) => {
                      return {
                        ...prev,
                        area:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Areas"
                  accessItems={crudData}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="zone"
                  values={warehouse?.zone}
                  handleChange={(
                    event: SelectChangeEvent<typeof warehouse>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setWarehouse((prev: any) => {
                      return {
                        ...prev,
                        zone:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Zones"
                  accessItems={crudData}
                />
                <CustomChipSelect
                  name="location"
                  values={warehouse?.location}
                  handleChange={(
                    event: SelectChangeEvent<typeof warehouse>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setWarehouse((prev: any) => {
                      return {
                        ...prev,
                        location:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Locations"
                  accessItems={crudData}
                />
              </Stack>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="container"
                  values={warehouse?.container}
                  handleChange={(
                    event: SelectChangeEvent<typeof warehouse>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setWarehouse((prev: any) => {
                      return {
                        ...prev,
                        container:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Containers"
                  accessItems={crudData}
                />
              </Stack>
            </Stack>
          </CustomAccordian>
        </CustomGrid>
        <CustomGrid>
          <CustomAccordian title="Dashboard">
            <Stack direction="column" gap={2}>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="overview"
                  values={dashboard?.overview}
                  handleChange={(
                    event: SelectChangeEvent<typeof dashboard>,
                  ) => {
                    const {
                      target: { value },
                    } = event;
                    setDashboard((prev: any) => {
                      return {
                        ...prev,
                        overview:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Overview"
                  accessItems={["View"]}
                />
              </Stack>
            </Stack>
          </CustomAccordian>
        </CustomGrid>
        <CustomGrid>
          <CustomAccordian title="Finance">
            <Stack direction="column" gap={2}>
              <Stack direction="row" gap={2}>
                <CustomChipSelect
                  name="invoice"
                  values={finance?.invoice}
                  handleChange={(event: SelectChangeEvent<typeof finance>) => {
                    const {
                      target: { value },
                    } = event;
                    setFinance((prev: any) => {
                      return {
                        ...prev,
                        invoice:
                          typeof value === "string" ? value.split(",") : value,
                      };
                    });
                  }}
                  screenName="Invoices"
                  accessItems={["View", "Delete", "Edit"]}
                />
              </Stack>
            </Stack>
          </CustomAccordian>
        </CustomGrid>
      </Grid>
    </Container>
  );
}

export default Permission;

interface ICustomGrid {
  children: React.ReactNode;
}
function CustomGrid(props: ICustomGrid) {
  const { children } = props;
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          flex: 1,
        }}
      >
        {children}
      </Card>
    </Grid>
  );
}
