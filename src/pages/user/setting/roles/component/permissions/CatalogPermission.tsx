import { SelectChangeEvent } from "@mui/material";
import { Stack } from "@mui/system";
import { crudData } from "__mock__";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import { useState } from "react";
import { ICatalog } from "types/setting/roles/permission";

function CatalogPermission() {
  const [catalog, setCatalog] = useState<ICatalog>();

  return (
    <CustomAccordian title="Catalog">
      <Stack direction="column" gap={2}>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={crudData}
            handleChange={(event: SelectChangeEvent<typeof catalog>) => {
              const {
                target: { value },
              } = event;
              setCatalog((prev: any) => {
                return {
                  ...prev,
                  product: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="products"
            screenName="Product"
            values={catalog?.product}
          />
          <CustomChipSelect
            accessItems={["View", "Edit", "Delete"]}
            handleChange={(event: SelectChangeEvent<typeof catalog>) => {
              const {
                target: { value },
              } = event;
              setCatalog((prev: any) => {
                return {
                  ...prev,
                  variants:
                    typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="variants"
            screenName="Variants"
            values={catalog?.variants}
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
            handleChange={(event: SelectChangeEvent<typeof catalog>) => {
              const {
                target: { value },
              } = event;
              setCatalog((prev: any) => {
                return {
                  ...prev,
                  categories:
                    typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="categories"
            screenName="Picklist"
            values={catalog?.categories}
          />
          <CustomChipSelect
            accessItems={["View", "Edit", "Process", "Complete"]}
            handleChange={(event: SelectChangeEvent<typeof catalog>) => {
              const {
                target: { value },
              } = event;
              setCatalog((prev: any) => {
                return {
                  ...prev,
                  brand: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="brand"
            screenName="Brands"
            values={catalog?.brand}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={[
              "View",
              "Add",
              "Reject",
              "Publish",
              "Unpublish",
              "Pause",
            ]}
            handleChange={(event: SelectChangeEvent<typeof catalog>) => {
              const {
                target: { value },
              } = event;
              setCatalog((prev: any) => {
                return {
                  ...prev,
                  listing: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="listing"
            screenName="Listing"
            values={catalog?.listing}
          />
          <CustomChipSelect
            accessItems={["View"]}
            handleChange={(event: SelectChangeEvent<typeof catalog>) => {
              const {
                target: { value },
              } = event;
              setCatalog((prev: any) => {
                return {
                  ...prev,
                  unit: typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="unit"
            screenName="Unit"
            values={catalog?.unit}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            accessItems={["View"]}
            handleChange={(event: SelectChangeEvent<typeof catalog>) => {
              const {
                target: { value },
              } = event;
              setCatalog((prev: any) => {
                return {
                  ...prev,
                  channels:
                    typeof value === "string" ? value.split(",") : value,
                };
              });
            }}
            name="channel"
            screenName="Channels"
            values={catalog?.channels}
          />
        </Stack>
      </Stack>
    </CustomAccordian>
  );
}

export default CatalogPermission;
