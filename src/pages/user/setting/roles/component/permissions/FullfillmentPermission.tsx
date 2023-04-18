import { SelectChangeEvent } from "@mui/material";
import { Stack } from "@mui/system";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import React, { useState } from "react";
import { crudData } from "__mock__";
import { IFullfillment } from "types/setting/roles/permission";

function FullfillmentPermission() {
  const [fullfillment, setFullfillment] = useState<IFullfillment>();

  return (
    <CustomAccordian title="Fullfillment">
      <Stack direction="column" gap={2}>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="order"
            values={fullfillment?.orders}
            handleChange={(event: SelectChangeEvent<typeof fullfillment>) => {
              const {
                target: { value },
              } = event;
              setFullfillment((prev: any) => {
                return {
                  ...prev,
                  orders: typeof value === "string" ? value.split(",") : value,
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
            handleChange={(event: SelectChangeEvent<typeof fullfillment>) => {
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
            handleChange={(event: SelectChangeEvent<typeof fullfillment>) => {
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
            handleChange={(event: SelectChangeEvent<typeof fullfillment>) => {
              const {
                target: { value },
              } = event;
              setFullfillment((prev: any) => {
                return {
                  ...prev,
                  packing: typeof value === "string" ? value.split(",") : value,
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
            handleChange={(event: SelectChangeEvent<typeof fullfillment>) => {
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
            handleChange={(event: SelectChangeEvent<typeof fullfillment>) => {
              const {
                target: { value },
              } = event;
              setFullfillment((prev: any) => {
                return {
                  ...prev,
                  returns: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            screenName="Returns"
            accessItems={[...crudData, "Process"]}
          />
        </Stack>
      </Stack>
    </CustomAccordian>
  );
}

export default FullfillmentPermission;
