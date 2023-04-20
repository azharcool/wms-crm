const AppRoutes = {
  LOGIN: "/",
  DASHBOARD: "/dashboard",
  CONTACTS_DETAILS: "/contacts",
  SETTINGS: "/settings",
  WAREHOUSE: "/warehouse",
  WAREHOUSE_DETAILS: "/warehouse-details",
  AREA_DETAILS: "/area-details",
  WAREHOUSE_CREATE: "/warehouse-create",
  ZONE_DETAILS: "/zone-details",
  LOCATION_DETAILS: "/location-details",
  CONTAINER_DETAILS: "/container-details",
  PURCHASE_ORDER: "/purchase-order",
  ADD_PURCHASE_ORDER: "/add-purchase",
  All_ORDER_DETAILS: "/allOrder-details",
  PERMISSIONS: "permissions",
  SCREEN_ACCESS: "screen-access",
  CUSTOM_FIELDS: "custom-fields",
  ROLES: "roles",
  SCREENS: "screens",
  TEAM: "team",
  BARCODE: "Barcode",

  CATALOG: {
    catalog: "catalog",
    products: "product",
    productDetail: "detail",
    variants: "variant",
    units: "unit",
    bundles: "bundles",
    bundleDetails: "bundle-details",
    bundleCreate: "bundle-create",
    categories: "categories",
    categoryCreate: "create",
    categoryDetail: "detail",
    brands: "brands",
    listing: "listing",
    unitHistory: "unit-history",
    productCreate: "create",
    variantsDetails: "detail",
    brandDetails: "brandDetails",
    bulkUpload: "bulk-upload",
  },

  // Purchase

  SETTING: {
    PERMISSIONS: "permissions",
    SCREEN_ACCESS: "screen-access",
    CUSTOM_FIELDS: "custom-fields",
    ROLES: "roles",
    SCREENS: "screens",
    TEAM: "team",
    BARCODE: "Barcode",
  },

  PURCHASE: {
    purchase: "purchase",
    PURCHASE_ORDER: "purchase-order",
    ADD_PURCHASE_ORDER: "add-purchase",
    All_ORDER_DETAILS: "allOrder-details",
    SUPPLIERS: "suppliers",
    SUPPLIERS_RETURN: "supplier-return",
  },

  warehouse: {
    warehouseLayout: "warehouse",
    listing: "listing",
    details: "details",
    create: "create",
    update: "update",

    // tabs
    generalDetails: "general/details",
    areas: "areas/listing",
    zones: "zones/listing",
    locations: "locations/listing",
    containers: "containers/listing",

    // details
    areasDetails: "areas/details",
    zonesDetails: "zones/details",
    locationsDetails: "locations/details",
    containersDetails: "containers/details",
    adjustmentDetails: "adjustment/details",

    // create
    locationCreate: "location/create",
  },

  purchases: {
    layout: "purchase",
    purchaseOrders: {
      listing: "purchase-order/listing",
      create: "purchase-order/create",
      update: "purchase-order/update",
      details: "purchase-order/details",
    },

    supplier: {
      listing: "supplier/listing",
      create: "supplier/create",
      update: "supplier/update",
      details: "supplier/details",

      // tabs
      generalDetails: "general/details",
      addressDetails: "address/details",
      bankAccountDetails: "bank/details",
      purchases: "purchases/listing",
      history: "history/listing",
    },

    supplierReturns: {
      listing: "supplier-returns/listing",
      create: "supplier-returns/create",
      update: "supplier-returns/update",
      details: "supplier-returns/details",
    },
  },

  stockControl: {
    layout: "stock-control",
    adjustment: {
      listing: "adjustment/listing",
      create: "adjustment/create",
      update: "adjustment/update",
      details: "adjustment/details",
      generalDetails: "general/details",
      historylisting: "history/listing",
    },
    movement: {
      listing: "movement/listing",
      create: "movement/create",
      details: "movement/details",
    },
    recieve: {
      listing: "recieve/listing",
      details: "recieve/details",
      general: "general/details",
      history: "history/details",
    },
    putaway_v1: {
      listing: "putaway-v1/listing",
    },
    inventory_log: {
      listing: "inventory-log/listing",
    },
    putaway_v2: {
      listing: "putaway-v2/listing",
      details: "putaway-v2/details",
      general: "general/details",
      history: "history/details",
      create: "putaway-v2/create",
    },
    stock_count: {
      listing: "stock-count/listing",
      create: "stock-count/create",
      details: "stock-count/details",
    },
    transfer: {
      listing: "transfer/listing",
      details: "transfer/details",
      general: "general/details",
      history: "history/details",
      create: "transfer/create",
      update: "transfer/update",
    },
    reorder: {
      listing: "reorder/listing",
      details: "reorder/details",
    },
  },

  setting: {
    layout: "setting",
    configuration: {
      listing: "configuration/listing",
      adjustmentReasons: "configuration/adjustment-reason/listing",
      adjustmentDetail: "configuration/adjustment-reason/detail",
      productCondition: "configuration/product-condition/listing",
      taxes: "configuration/taxes/listing",
      CurrencyRate: "configuration/currency-rate/listing",
    },
    barcode: {
      generate: "barcode/generate",
    },
    roles: {
      roleListing: "role/listing",
    },
    account: {
      account: "account",
    },
    billing: {
      listing: "billing/listing",
      details: "billing/details",
    },
    user: {
      listing: "user/listing",
      create: "user/create",
      update: "user/update",
      details: "user/details",
      general: "details/general",
      history: "details/history",
    },
    role: {
      listing: "role/listing",
      create: "role/create",
      update: "role/update",
      general: "update/general",
      permission: "update/permission",
    },
  },
};

export default AppRoutes;
