import { SelectChangeEvent } from "@mui/material";
import { Stack } from "@mui/system";
import { crudData } from "__mock__";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import { useState } from "react";
import { IStocks } from "types/setting/roles/permission";

function StockPermission() {
  const [stocks, setStocks] = useState<IStocks>();

  return (
    <CustomAccordian title="Stock">
      <Stack direction="column" gap={2}>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={[...crudData, "Complete", "Cancel"]}
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
            name="adjustments"
            screenName="Adjustments"
            values={stocks?.adjustment}
          />
          <CustomChipSelect
            accessItems={["View", "Edit", "Process", "Progress", "Complete"]}
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
            name="putaway"
            screenName="Putaway"
            values={stocks?.putaway}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={["View", "Receive", "Complete"]}
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
            name="receive"
            screenName="Receive"
            values={stocks?.putaway}
          />
          <CustomChipSelect
            accessItems={["View", "Edit", "Add", "Process", "Cancel"]}
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
            name="stockTransfer"
            screenName="Stock-Transfer"
            values={stocks?.stockTransfer}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={["Add"]}
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
            name="unitNumber"
            screenName="Unit-Numbers"
            values={stocks?.unitNumbers}
          />
          <CustomChipSelect
            accessItems={[...crudData, "Complete", "Cancel"]}
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
            name="movement"
            screenName="Movements"
            values={stocks?.movements}
          />
        </Stack>
      </Stack>
    </CustomAccordian>
  );
}

export default StockPermission;
