import { SelectChangeEvent } from "@mui/material";
import { Stack } from "@mui/system";
import { crudData } from "__mock__";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import { useState } from "react";
import { IWarehouses } from "types/setting/roles/permission";

function WarehousePermission() {
  const [warehouse, setWarehouse] = useState<IWarehouses>();

  return (
    <CustomAccordian title="Warehouse">
      <Stack direction="column" gap={2}>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={crudData}
            handleChange={(event: SelectChangeEvent<typeof warehouse>) => {
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
            name="warehouse"
            screenName="Warehouses"
            values={warehouse?.warehouse}
          />
          <CustomChipSelect
            accessItems={crudData}
            handleChange={(event: SelectChangeEvent<typeof warehouse>) => {
              const {
                target: { value },
              } = event;
              setWarehouse((prev: any) => {
                return {
                  ...prev,
                  area: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="area"
            screenName="Areas"
            values={warehouse?.area}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={crudData}
            handleChange={(event: SelectChangeEvent<typeof warehouse>) => {
              const {
                target: { value },
              } = event;
              setWarehouse((prev: any) => {
                return {
                  ...prev,
                  zone: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="zone"
            screenName="Zones"
            values={warehouse?.zone}
          />
          <CustomChipSelect
            accessItems={crudData}
            handleChange={(event: SelectChangeEvent<typeof warehouse>) => {
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
            name="location"
            screenName="Locations"
            values={warehouse?.location}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={crudData}
            handleChange={(event: SelectChangeEvent<typeof warehouse>) => {
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
            name="container"
            screenName="Containers"
            values={warehouse?.container}
          />
        </Stack>
      </Stack>
    </CustomAccordian>
  );
}

export default WarehousePermission;
