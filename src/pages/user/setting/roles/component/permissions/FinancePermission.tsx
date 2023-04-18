import { Stack } from "@mui/system";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import { useState } from "react";
import { IFinance } from "types/setting/roles/permission";
import { SelectChangeEvent } from "@mui/material";

function FinancePermission() {
  const [finance, setFinance] = useState<IFinance>();

  return (
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
                  invoice: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            screenName="Invoices"
            accessItems={["View", "Delete", "Edit"]}
          />
        </Stack>
      </Stack>
    </CustomAccordian>
  );
}

export default FinancePermission;
