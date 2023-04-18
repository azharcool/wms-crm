import { SelectChangeEvent } from "@mui/material";
import { Stack } from "@mui/system";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import { useState } from "react";
import { IDashboard } from "types/setting/roles/permission";

function DashboardPermission() {
  const [dashboard, setDashboard] = useState<IDashboard>();

  return (
    <CustomAccordian title="Dashboard">
      <Stack direction="column" gap={2}>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={["View"]}
            handleChange={(event: SelectChangeEvent<typeof dashboard>) => {
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
            name="overview"
            screenName="Overview"
            values={dashboard?.overview}
          />
        </Stack>
      </Stack>
    </CustomAccordian>
  );
}

export default DashboardPermission;
