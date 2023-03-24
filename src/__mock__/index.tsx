export const detailMenu = [
  {
    id: "Digital product",
    value: "Digital product",
  },
  {
    id: "Physical product",
    value: "Physical product",
  },
  {
    id: "Service",
    value: "Service",
  },
];

export const uniqueBarcodingStrategy = [
  {
    id: "Per each Unit",
    value: "Per each Unit",
  },
  {
    id: "Per SKU or Set",
    value: "Per SKU or Set",
  },
];

export const UoM = [
  {
    id: "1",
    value: "Box",
  },
  {
    id: "2",
    value: "Bottle",
  },
  {
    id: "3",
    value: "Can",
  },
  {
    id: "4",
    value: "Litre",
  },
  {
    id: "5",
    value: "Piece",
  },
  {
    id: "6",
    value: "Pack",
  },
  {
    id: "7",
    value: "Unit",
  },
  {
    id: "8",
    value: "IBCs",
  },
  {
    id: "9",
    value: "Drum",
  },
  {
    id: "10",
    value: "Bags",
  },
];

export const fullfillmentSwitchs = [
  {
    id: crypto.randomUUID(),
    value: "Track Serial numbers",
    name: "trackSerialNumbers",
  },
  {
    id: crypto.randomUUID(),
    value: "Track Expiry dates",
    name: "trackExpiryDates",
  },
  {
    id: crypto.randomUUID(),
    value: "Sync Supply Price",
    name: "syncSupplyPrice",
  },
];
export const Loctype = [
  {
    id: "Picking",
    value: "Picking",
  },
  {
    id: "Packing",
    value: "Packing",
  },
  {
    id: "Shipping",
    value: "Shipping",
  },
  {
    id: "Overflow",
    value: "Overflow",
  },
  {
    id: "Staging",
    value: "Staging",
  },
  {
    id: "Sorting",
    value: "Sorting",
  },
  {
    id: "Receiving",
    value: "Receiving",
  },
  {
    id: "Returns",
    value: "Returns",
  },
  {
    id: "Quarantine",
    value: "Quarantine",
  },
  {
    id: "Reserve",
    value: "Reserve",
  },
];

export const strategys = [
  {
    id: "First In First Out",
    value: "First In First Out",
  },
  {
    id: "First Expired First Out",
    value: "First Expired First Out",
  },
  {
    id: "Last In First  Out",
    value: "Last In First  Out",
  },
];

export const warehouseStatus = [
  {
    id: "1",
    value: "Active",
  },
  {
    id: "2",
    value: "Inactive",
  },
];
export const area = [
  {
    id: "New_area",
    value: "New_area",
  },
];
export const operation = [
  {
    id: "Picking",
    value: "Picking",
  },
  {
    id: "Putaway",
    value: "Putaway",
  },
];

export const pickingStrategy = [
  {
    id: "Create one picklist per oder",
    value: "Create one picklist per oder.",
  },
  {
    id: "Create picklist by closest location(required x, y, z)",
    value: "Create picklist by closest location(required x, y, z)",
  },
];

export const receivingStrategy = [
  {
    id: "Receive to temp location(receiving)",
    value: "Receive to temp location(receiving)",
  },
  {
    id: "Receive to permanent location(picking)",
    value: "Receive to permanent location(picking)",
  },
];

export const timezone = [
  {
    id: "India",
    value: "India",
  },
];

export const receivingType = [
  {
    id: "Over receive",
    value: "Over receive",
  },
  {
    id: "Under receive",
    value: "Under receive",
  },
  {
    id: "Over and under receive",
    value: "Over and under receive",
  },
  {
    id: "Invoice receive",
    value: "Invoice receive",
  },
  {
    id: "Blind receive",
    value: "Blind receive",
  },
];

export const newWarehouseSwitchs = [
  {
    id: crypto.randomUUID(),
    value: "Default Warehouse",
    name: "defaultWarehouse",
  },
  {
    id: crypto.randomUUID(),
    value: "Allow Partial Picking",
    name: "allowpartialpicking",
  },
];

export const areaStatus = [
  {
    id: "1",
    value: "Active",
  },
  {
    id: "2",
    value: "InActive",
  },
];
