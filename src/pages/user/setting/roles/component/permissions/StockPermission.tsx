import { SelectChangeEvent } from "@mui/material";
import { Stack } from "@mui/system";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import { useState } from "react";
import { crudData } from "__mock__";
import { IStocks } from "types/setting/roles/permission";

function StockPermission() {
  const [stocks, setStocks] = useState<IStocks>();

  return (
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
                  putaway: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            screenName="Putaway"
            accessItems={["View", "Edit", "Process", "Progress", "Complete"]}
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
                  putaway: typeof value === "string" ? value.split(",") : value,
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
  );
}

export default StockPermission;
