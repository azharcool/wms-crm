import { SelectChangeEvent } from "@mui/material";
import { Stack } from "@mui/system";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import { useState } from "react";
import { crudData } from "__mock__";
import { IWarehouses } from "types/setting/roles/permission";

function WarehousePermission() {
  const [warehouse, setWarehouse] = useState<IWarehouses>();

  return (
    <CustomAccordian title="Warehouse">
      <Stack direction="column" gap={2}>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="warehouse"
            values={warehouse?.warehouse}
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
            screenName="Warehouses"
            accessItems={crudData}
          />
          <CustomChipSelect
            name="area"
            values={warehouse?.area}
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
            screenName="Areas"
            accessItems={crudData}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="zone"
            values={warehouse?.zone}
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
            screenName="Zones"
            accessItems={crudData}
          />
          <CustomChipSelect
            name="location"
            values={warehouse?.location}
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
            screenName="Locations"
            accessItems={crudData}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="container"
            values={warehouse?.container}
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
            screenName="Containers"
            accessItems={crudData}
          />
        </Stack>
      </Stack>
    </CustomAccordian>
  );
}

export default WarehousePermission;
