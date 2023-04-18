import { SelectChangeEvent } from "@mui/material";
import { Stack } from "@mui/system";
import { crudData } from "__mock__";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import { useState } from "react";
import { ISettings } from "types/setting/roles/permission";

function SettingPermission() {
  const [settings, setSettings] = useState<ISettings>();

  return (
    <CustomAccordian title="Settings">
      <Stack direction="column" gap={2}>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={crudData}
            handleChange={(event: SelectChangeEvent<typeof settings>) => {
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
            name="adjustmentReasons"
            screenName="Adjustment-Reasons"
            values={settings?.adjustmentReasons}
          />
          <CustomChipSelect
            accessItems={crudData}
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
            name="containerTypes"
            screenName="Container-Types"
            values={settings?.containerTypes}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={crudData}
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
            name="integration"
            screenName="Integration"
            values={settings?.integrations}
          />
          <CustomChipSelect
            accessItems={crudData}
            handleChange={(event: SelectChangeEvent<typeof settings>) => {
              const {
                target: { value },
              } = event;
              setSettings((prev: any) => {
                return {
                  ...prev,
                  users: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="users"
            screenName="Users"
            values={settings?.users}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={crudData}
            handleChange={(event: SelectChangeEvent<typeof settings>) => {
              const {
                target: { value },
              } = event;
              setSettings((prev: any) => {
                return {
                  ...prev,
                  roles: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="roles"
            screenName="Roles"
            values={settings?.roles}
          />
          <CustomChipSelect
            accessItems={crudData}
            handleChange={(event: SelectChangeEvent<typeof settings>) => {
              const {
                target: { value },
              } = event;
              setSettings((prev: any) => {
                return {
                  ...prev,
                  filters: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="filter"
            screenName="Roles"
            values={settings?.filters}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={crudData}
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
            name="condition"
            screenName="Condition"
            values={settings?.condition}
          />
          <CustomChipSelect
            accessItems={crudData}
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
            name="paymentType"
            screenName="Payments-Type"
            values={settings?.paymentType}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={["View", "Edit"]}
            handleChange={(event: SelectChangeEvent<typeof settings>) => {
              const {
                target: { value },
              } = event;
              setSettings((prev: any) => {
                return {
                  ...prev,
                  account: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="account"
            screenName="Account"
            values={settings?.account}
          />
          <CustomChipSelect
            accessItems={["Upload"]}
            handleChange={(event: SelectChangeEvent<typeof settings>) => {
              const {
                target: { value },
              } = event;
              setSettings((prev: any) => {
                return {
                  ...prev,
                  files: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="files"
            screenName="Files"
            values={settings?.files}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={crudData}
            handleChange={(event: SelectChangeEvent<typeof settings>) => {
              const {
                target: { value },
              } = event;
              setSettings((prev: any) => {
                return {
                  ...prev,
                  billing: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="biiling"
            screenName="Billing"
            values={settings?.billing}
          />
          <CustomChipSelect
            accessItems={crudData}
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
            name="automation"
            screenName="Automation"
            values={settings?.automation}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={crudData}
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
            name="contract"
            screenName="Contracts"
            values={settings?.contracts}
          />
        </Stack>
      </Stack>
    </CustomAccordian>
  );
}

export default SettingPermission;
