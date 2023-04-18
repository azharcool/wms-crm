import { SelectChangeEvent } from "@mui/material";
import { Stack } from "@mui/system";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import { useState } from "react";
import { crudData } from "__mock__";
import { IPurchases } from "types/setting/roles/permission";

function PurchasesPermission() {
  const [purchases, setPurchases] = useState<IPurchases>();

  return (
    <CustomAccordian title="Purchases">
      <Stack direction="column" gap={2}>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="purchaseOrder"
            values={purchases?.purchase}
            handleChange={(event: SelectChangeEvent<typeof purchases>) => {
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
            values={purchases?.supplier}
            handleChange={(event: SelectChangeEvent<typeof purchases>) => {
              const {
                target: { value },
              } = event;
              setPurchases((prev: any) => {
                return {
                  ...prev,
                  supplier:
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
  );
}

export default PurchasesPermission;
