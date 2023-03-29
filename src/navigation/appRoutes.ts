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
      details: "adjustment/details",
      generalDetails: "general/details",
      historylisting: "history/listing",
    },
  },

  settting: {
    layout: "setting",
    configuration: {
      listing: "configuration/listing",
      adjustmentReasons: "configuration/adjustment-reason/listing",
    },
    barcode: {
      generate: "barcode/generate",
    },
    roles: {
      roleListing: "role/listing",
    },
  },
};

export default AppRoutes;
