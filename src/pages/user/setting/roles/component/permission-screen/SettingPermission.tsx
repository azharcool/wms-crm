import { Grid, Card, SelectChangeEvent } from "@mui/material";
import { Container, Stack } from "@mui/system";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import React, { useState } from "react";
import { crudData } from "__mock__";
import { ISettings } from "types/setting/roles/permission";

function SettingPermission() {
  const [settings, setSettings] = useState<ISettings>();

  return (
    <CustomAccordian title="Settings">
      <Stack direction="column" gap={2}>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="adjustmentReasons"
            values={settings?.adjustmentReasons}
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
            screenName="Adjustment-Reasons"
            accessItems={crudData}
          />
          <CustomChipSelect
            name="containerTypes"
            values={settings?.containerTypes}
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
            screenName="Container-Types"
            accessItems={crudData}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="integration"
            values={settings?.integrations}
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
            screenName="Integration"
            accessItems={crudData}
          />
          <CustomChipSelect
            name="users"
            values={settings?.users}
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
            screenName="Users"
            accessItems={crudData}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="roles"
            values={settings?.roles}
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
            screenName="Roles"
            accessItems={crudData}
          />
          <CustomChipSelect
            name="filter"
            values={settings?.filters}
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
            screenName="Roles"
            accessItems={crudData}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="condition"
            values={settings?.condition}
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
            screenName="Condition"
            accessItems={crudData}
          />
          <CustomChipSelect
            name="paymentType"
            values={settings?.paymentType}
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
            screenName="Payments-Type"
            accessItems={crudData}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="account"
            values={settings?.account}
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
            screenName="Account"
            accessItems={["View", "Edit"]}
          />
          <CustomChipSelect
            name="files"
            values={settings?.files}
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
            screenName="Files"
            accessItems={["Upload"]}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="biiling"
            values={settings?.billing}
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
            screenName="Billing"
            accessItems={crudData}
          />
          <CustomChipSelect
            name="automation"
            values={settings?.automation}
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
            screenName="Automation"
            accessItems={crudData}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="contract"
            values={settings?.contracts}
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
            screenName="Contracts"
            accessItems={crudData}
          />
        </Stack>
      </Stack>
    </CustomAccordian>
  );
}

export default SettingPermission;
