import { SelectChangeEvent } from "@mui/material";
import { Stack } from "@mui/system";
import { crudData } from "__mock__";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import { useState } from "react";
import { IFullfillment } from "types/setting/roles/permission";

function FullfillmentPermission() {
  const [fullfillment, setFullfillment] = useState<IFullfillment>();

  return (
    <CustomAccordian title="Fullfillment">
      <Stack direction="column" gap={2}>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={[
              ...crudData,
              "Allocate",
              "Process",
              "Resolve",
              "Cancel",
            ]}
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
            name="order"
            screenName="Order"
            values={fullfillment?.orders}
          />
          <CustomChipSelect
            accessItems={crudData}
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
            name="customers"
            screenName="Customers"
            values={fullfillment?.customers}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={[
              "View",
              "Process",
              "Progress",
              "Complete",
              "Generate",
              "Pick",
              "Edit",
            ]}
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
            name="picklist"
            screenName="Picklist"
            values={fullfillment?.picklists}
          />
          <CustomChipSelect
            accessItems={["View", "Edit", "Process", "Complete"]}
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
            name="packing"
            screenName="Packing"
            values={fullfillment?.packing}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={["View", "Edit", "Process"]}
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
            name="shipments"
            screenName="Shipments"
            values={fullfillment?.shipments}
          />
          <CustomChipSelect
            accessItems={[...crudData, "Process"]}
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
            name="returns"
            screenName="Returns"
            values={fullfillment?.returns}
          />
        </Stack>
      </Stack>
    </CustomAccordian>
  );
}

export default FullfillmentPermission;
