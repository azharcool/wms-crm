import { SelectChangeEvent } from "@mui/material";
import { Stack } from "@mui/system";
import CustomAccordian from "components/accordian/CustomAccordian";
import CustomChipSelect from "components/chip-selector/CustomChipSelect";
import { useState } from "react";
import { crudData } from "__mock__";
import { ICatalog } from "types/setting/roles/permission";

function CatalogPermission() {
  const [catalog, setCatalog] = useState<ICatalog>();

  return (
    <CustomAccordian title="Catalog">
      <Stack direction="column" gap={2}>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="products"
            values={catalog?.product}
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
            screenName="Product"
            accessItems={crudData}
          />
          <CustomChipSelect
            name="variants"
            values={catalog?.variants}
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
            screenName="Variants"
            accessItems={["View", "Edit", "Delete"]}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="categories"
            values={catalog?.categories}
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
            name="brand"
            values={catalog?.brand}
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
            screenName="Brands"
            accessItems={["View", "Edit", "Process", "Complete"]}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="listing"
            values={catalog?.listing}
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
            screenName="Listing"
            accessItems={[
              "View",
              "Add",
              "Reject",
              "Publish",
              "Unpublish",
              "Pause",
            ]}
          />
          <CustomChipSelect
            name="unit"
            values={catalog?.unit}
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
            screenName="Unit"
            accessItems={["View"]}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <CustomChipSelect
            name="channel"
            values={catalog?.channels}
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
            screenName="Channels"
            accessItems={["View"]}
          />
        </Stack>
      </Stack>
    </CustomAccordian>
  );
}

export default CatalogPermission;
