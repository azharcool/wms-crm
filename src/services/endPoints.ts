import config from "config";

const { REACT_APP_BASE_API_URL_DEV } = process.env;
const { BASE_URL } = config; // REACT_APP_BASE_API_URL_DEV;
const endPoints = {
  login: "userlogin",
  signup: "signup",
  logout: "logout",

  // common
  add: "add",
  edit: "edit",
  delete: "delete",
  put: "put",
  getAll: "getall",
  getAllPagination: "getall-pagination",
  bulkDelete: "Bulkdelete",

  // team endpoints
  addUser: "add-user",
  editUser: "edit-user",
  activeDeactive: "active-deactive",
  fetchUsers: "getall-pagination",
  allActivityCount: "allactivitycount",

  // roles
  getAllRolesWithPagination: "get-all-with-pagination",
  getAllUser: "get-all",
  getUserByUserRoleId: "getuserby-userroleid",
  getUserByRoleName: "getall-ByRoleName",

  // permissions
  getAllPermissions: "get-all",

  // other
  getAllScreens: "get-all-screens",
  getAllScreensWithPagination: "get-all",
  getAllWithPagination: "get-all",
  getAllScreensWithPermission: "get-all-screens-withpermission",
  getRoleAccess: "getby-roleid",
  getPermissionsByRoleId: "getby-roleid",
  savePreference: "save-preference",
  getPreference: "getdetail-by-userid",
  getbyid: "getbyid",
  activityComplete: "status-update",
  leadOwner: "changeSalesRepId",
  leadSource: "changeLeadSource",
  getAllCustomFields: "get-all-customs",
};

const API_URLS = {
  LOGIN: `user-login/${endPoints.login}`,
  SIGNUP: `${endPoints.signup}`,
  LOGOUT: `user-login/${endPoints.logout}`,

  // team endpoints
  ADD_USER: `user/${endPoints.addUser}`,
  EDIT_USER: `user/${endPoints.editUser}`,
  ACTIVE_DEACTIVE: `user/${endPoints.activeDeactive}`,
  FETCH_USERS: `user/${endPoints.fetchUsers}`,
  DELETE_USER: `user/${endPoints.delete}`,
  GET_USEROLESBY_USERID: `user/${endPoints.getUserByUserRoleId}`,
  GET_USERS_BY_ROLE_NAME: `user/${endPoints.getUserByRoleName}`,
  GET_ALL_USERS: `user/${endPoints.getAll}`,

  // contacts endpoints
  ADD_CONTACT: `contact/${endPoints.add}`,
  EDIT_CONTACT: `contact/${endPoints.edit}`,
  FETCH_CONTACT: "contact/GetAll-v1",
  DELETE_CONTACT: `contact/${endPoints.delete}`,
  GET_CONTACT_BY_ID: `contact/${endPoints.getbyid}`,
  GET_CONTACT_BY_SEARCH: `contact/${endPoints.getAll}`,
  BULK_DELETE: `contact/${endPoints.bulkDelete}`,
  UPDATE_LEAD_OWNER: `contact/${endPoints.leadOwner}`,
  UPDATE_LEAD_SOURCE: `contact/${endPoints.leadSource}`,

  // address endpoints
  ADD_ADDRESS: `address/${endPoints.add}`,
  EDIT_ADDRESS: `address/${endPoints.edit}`,

  // notes endpoints
  ADD_NOTE: `notes/${endPoints.add}`,
  EDIT_NOTE: `notes/${endPoints.edit}`,
  DELETE_NOTE: `notes/${endPoints.delete}`,
  FETCH_NOTES: `notes/${endPoints.getAll}`,
  FETCH_NOTES_PAGINATION: `notes/${endPoints.getAllPagination}`,

  // screens endpoints
  FETCH_SCREENS: `screen/${endPoints.getAllScreensWithPagination}`,
  ADD_SCREEN: `screen/${endPoints.add}`,
  EDIT_SCREEN: `screen/${endPoints.edit}`,
  DELETE_SCREEN: `screen/${endPoints.delete}`,

  // pipelines endpoints
  FETCH_PIPELINES: `pipeline/${endPoints.getAll}`,
  FETCH_PIPELINES_WITHOUT_PAGINATION: `pipeline/${endPoints.getAll}`,
  ADD_PIPELINE: `pipeline/${endPoints.add}`,
  EDIT_PIPELINE: `pipeline/${endPoints.edit}`,
  DELETE_PIPELINE: `pipeline/${endPoints.delete}`,

  // permissions
  GET_PERMISSIONS: `permission/${endPoints.getAllPagination}`,
  ADD_PERMISSION: `permission/${endPoints.add}`,
  EDIT_PERMISSION: `permission/${endPoints.edit}`,
  DELETE_PERMISSION: `permission/${endPoints.delete}`,

  // user access endpoints
  FETCH_USER_ACCESS: `userscreenaccess/${endPoints.getRoleAccess}`,
  ADD_USER_ACCESS: `userscreenaccess/${endPoints.add}`,

  // roles
  GET_ROLES_PAGINATION: `user-role/${endPoints.getAllPagination}`,
  ADD_ROLE: `user-role/${endPoints.add}`,
  EDIT_ROLE: `user-role/${endPoints.edit}`,
  DELETE_ROLE: `user-role/${endPoints.delete}`,

  // Lead source
  GET_LEAD_SOURCE_PAGINATION: `leadsource/${endPoints.getAllPagination}`,
  GET_LEAD_SOURCE_WITHOUT_PAGINATION: `leadsource/${endPoints.getAll}`,
  ADD_LEAD_SOURCE: `leadsource/${endPoints.add}`,
  EDIT_LEAD_SOURCE: `leadsource/${endPoints.edit}`,
  DELETE_LEAD_SOURCE: `leadsource/${endPoints.delete}`,

  // Lead status
  GET_LEAD_STATUS_PAGINATION: `leadstatus/${endPoints.getAllPagination}`,
  GET_LEAD_STATUS_WITHOUT_PAGINATION: `leadstatus/${endPoints.getAll}`,
  ADD_LEAD_STATUS: `leadstatus/${endPoints.add}`,
  EDIT_LEAD_STATUS: `leadstatus/${endPoints.edit}`,
  DELETE_LEAD_STATUS: `leadstatus/${endPoints.delete}`,

  // activities
  GET_ACTIVITIES_TYPE: `activityType/${endPoints.getAll}`,
  ADD_ACTIVITY: `activity/${endPoints.add}`,
  EDIT_ACTIVITY: `activity/${endPoints.edit}`,
  DELETE_ACTIVITY: `activity/${endPoints.delete}`,
  ACTIVATE_ACTIVITY: `activity/${endPoints.activityComplete}`,
  FETCH_ACTIVITIES_PAGINATION: `activity/${endPoints.getAllPagination}`,
  GET_ALL_ACTIVITIES: `activity/${endPoints.getAll}`,
  GET_ALL_COUNTS: `activity/${endPoints.allActivityCount}`,

  // Custom fields
  ADD_CUSTOM_FIELDS: `custom/${endPoints.add}`,
  GET_CUSTOM_FIELDS: `custom/${endPoints.getAll}`,

  // Mylist
  ADD_MYLIST: `mylist/${endPoints.add}`,
  GET_MYLIST: `mylist/${endPoints.getAll}`,
  DELETE_MYLIST: `mylist/${endPoints.delete}`,
  GET_MYLISTCONTACT_BY_MYLISTID: "mylist/getll-mylistcontact-by-mylistId",
  GET_MYLISTCONTACT_BY_MULTI_MYLISTID:
    "mylist/getall-mylistcontact-by-multi-MylistId",

  // other
  GET_PERMISSIONS_BY_ROLE_ID: `userscreenaccess/${endPoints.getPermissionsByRoleId}`,
  GET_ROLES: `user-role/${endPoints.getAll}`,
  FETCH_SCREENS_WITHOUT_PAGINATION: `user-screen-access/${endPoints.getAllScreens}`,
  FETCH_SCREENS_WITH_PERMISSION: `screen/${endPoints.getAllScreensWithPermission}`,
  ADD_PREFERENCE: `preference/${endPoints.savePreference}`,
  GET_PREFERENCE: `preference/${endPoints.getPreference}`,
  GET_ALL_CUSTOM_FIELDS: `custom/${endPoints.getAllCustomFields}`,

  // Product
  GET_ALL_PAGINATION_PRODUCT: `product/${endPoints.getAllPagination}`,
  ADD_PRODUCT: `product/${endPoints.add}`,
  EDIT_PRODUCT: `product/${endPoints.edit}`,
  GET_BY_ID_PRODUCT: `product/${endPoints.getbyid}`,
  BULK_DELETE_PRODUCT: `product/${endPoints.bulkDelete}`,
  DELETE_PRODUCT: `product/${endPoints.delete}`,

  // Categories
  GET_ALL_CATEGORIES: `category/${endPoints.getAll}`,
  GET_ALL_PAGINATION_CATEGORIES: `category/${endPoints.getAllPagination}`,
  ADD_CATEGORY: `category/${endPoints.add}`,
  EDIT_CATEGORY: `category/${endPoints.edit}`,
  BULK_DELETE_CATAGORY: `category/${endPoints.bulkDelete}`,
  DELETE_CATEGORY: `category/${endPoints.delete}`,
  GET_BY_ID_CATEGORY: `category/${endPoints.getbyid}`,

  // Variant
  GET_ALL_PAGINATION_VARIANT: `variant/${endPoints.getAllPagination}`,
  GET_ALL_VARIANT: `variant/${endPoints.getAll}`,
  ADD_VARIANT: `variant/${endPoints.add}`,
  EDIT_VARIANT: `variant/${endPoints.edit}`,
  GET_BY_ID_VARIANT: `variant/${endPoints.getbyid}`,
  BULK_DELETE_VARIANT: `variant/${endPoints.bulkDelete}`,
  DELETE_VARIANT: `variant/${endPoints.delete}`,
  GET_ALL_PAGINATION_VARIANT_BY_PRODUCTID:
    "variant/getall-pagination-by-productId",
  GET_ALL_BY_OPTIONNAME_VALUE: "variant/getall-by-optionNameValue",

  // Brand
  GET_ALL_BRAND: `brand/${endPoints.getAll}`,
  ADD_BRAND: `brand/${endPoints.add}`,
  GET_BY_ID_BRAND: `brand/${endPoints.getbyid}`,
  EDIT_BRAND: `brand/${endPoints.edit}`,
  PUT_BRAND: `brand/${endPoints.edit}`,
  DELETE_BRAND: `brand/${endPoints.delete}`,
  BULK_DELETE_BRAND: `brand/${endPoints.bulkDelete}`,
  GET_ALL_PAGINATION_BRAND: `brand/${endPoints.getAllPagination}`,

  //  Supplier
  GET_ALL_SUPPLIER_WITHOUT_PAGINATION: `supplier/${endPoints.getAll}`,
  GET_ALL_SUPPLIER_WITH_PAGINATION: `supplier/${endPoints.getAllPagination}`,
  ADD_SUPPLIER: `supplier/${endPoints.add}`,
  EDIT_SUPPLIER: `supplier/${endPoints.edit}`,
  GET_BY_ID_SUPPLIER: `supplier/${endPoints.getbyid}`,
  PUT_SUPPLIER: `supplier/${endPoints.edit}`,
  DELETE_SUPPLIER: `supplier/${endPoints.delete}`,
  BULK_DELETE_SUPPLIER: `supplier/${endPoints.bulkDelete}`,
  ADD_SHIPPING_ADDRESS: "supplier/add-ShippingAddress",
  EDIT_SHIPPING_ADDRESS: "supplier/edit-ShippingAddress",
  DELETE_SHIPPING_ADDRESS: "supplier/delete-ShippingAddress",
  GET_ALL_SHIPPING_ADDRESS: "supplier/getall-ShippingAddress-By-SupplierId",
  ADD_BILLING_ADDRESS: "supplier/add-BillingAddress",
  EDIT_BILLING_ADDRESS: "supplier/edit-BillingAddress",
  DELETE_BILLING_ADDRESS: "supplier/delete-BilliingAddress",
  GET_ALL_BILLING_ADDRESS: "supplier/getall-BillingAddress-By-SupplierId",
  GET_ALL_BANK_ACCOUNT: "supplier/getall-BankAccount-By-SupplierId",
  ADD_BANK_ACCOUNT: "supplier/add-BankAcount",
  EDIT_BANK_ACCOUNT: "supplier/edit-bankAccount",
  DELETE_BANK_ACCOUNT: "supplier/deleteBankAccount",

  // bundle
  GET_ALL_PAGINATION_BUNDLE: `bundle/${endPoints.getAllPagination}`,
  ADD_BUNDLE: `bundle/${endPoints.add}`,
  EDIT_BUDLE: `bundle/${endPoints.edit}`,
  GET_BY_ID_BUNDLE: `bundle/${endPoints.getbyid}`,
  BULK_DELETE_BUNDLE: `bundle/${endPoints.bulkDelete}`,
  DELETE_BUNDLE: `bundle/${endPoints.delete}`,

  // bundle Composition
  GET_ALL_BY_BUNDLE_ID_BUNDLE_COMPOSITION:
    "bundleComposition/getall-by-bundleId",
  GET_ALL_PAGINATION_BUNDLE_COMPOSITION: `bundleComposition/${endPoints.getAllPagination}`,
  ADD_BUNDLE_COMPOSITION: `bundleComposition/${endPoints.add}`,
  EDIT_BUDLE_COMPOSITION: `bundleComposition/${endPoints.edit}`,
  GET_BY_ID_BUNDLE_COMPOSITION: `bundleComposition/${endPoints.getbyid}`,
  BULK_DELETE_BUNDLE_COMPOSITION: `bundleComposition/${endPoints.bulkDelete}`,
  DELETE_BUNDLE_COMPOSITION: `bundleComposition/${endPoints.delete}`,

  // Warehouse
  ADD_WAREHOUSE: `warehouse/${endPoints.add}`,
  EDIT_WAREHOUSE: `warehouse/${endPoints.edit}`,
  GET_ALL_WAREHOUSE: `warehouse/${endPoints.getAll}`,
  GET_ALL_PAGINATION_WAREHOUSE: `warehouse/${endPoints.getAllPagination}`,
  GET_BY_ID_WAREHOUSE: `warehouse/${endPoints.getbyid}`,
  DELETE_WAREHOUSE: `warehouse/${endPoints.delete}`,
  BULK_DELETE_WAREHOUSE: `warehouse/${endPoints.bulkDelete}`,

  // WarehouseArea
  ADD_WAREHOUSEAREA: `warehouseArea/${endPoints.add}`,
  EDIT_WAREHOUSEAREA: `warehouseArea/${endPoints.edit}`,
  GET_ALL_WAREHOUSEAREA: `warehouseArea/${endPoints.getAll}`,
  GET_ALL_PAGINATION_WAREHOUSEAREA: `warehouseArea/${endPoints.getAllPagination}`,
  GET_BY_ID_WAREHOUSEAREA: `warehouseArea/${endPoints.getbyid}`,
  DELETE_WAREHOUSEAREA: `warehouseArea/${endPoints.delete}`,
  BULK_DELETE_WAREHOUSEAREA: `warehouseArea/${endPoints.bulkDelete}`,

  // Zone
  ADD_ZONE: `zone/${endPoints.add}`,
  EDIT_ZONE: `zone/${endPoints.edit}`,
  GET_ALL_ZONE: `zone/${endPoints.getAll}`,
  GET_ALL_PAGINATION_ZONE: `zone/${endPoints.getAllPagination}`,
  GET_BY_ID_ZONE: `zone/${endPoints.getbyid}`,
  DELETE_ZONE: `zone/${endPoints.delete}`,
  BULK_DELETE_ZONE: `zone/${endPoints.bulkDelete}`,

  // location
  ADD_LOCATION: `location/${endPoints.add}`,
  EDIT_LOCATION: `location/${endPoints.edit}`,
  GET_ALL_LOCATION: `location/${endPoints.getAll}`,
  GET_ALL_PAGINATION_LOCATION: `location/${endPoints.getAllPagination}`,
  GET_BY_ID_LOCATION: `location/${endPoints.getbyid}`,
  DELETE_LOCATION: `location/${endPoints.delete}`,
  BULK_DELETE_LOCATION: `location/${endPoints.bulkDelete}`,

  // adjustment Reason
  ADD_ADJUSTMENT_REASON: `adjustmentReason/${endPoints.add}`,
  GET_ALL_ADJUSTMENT_REASON: `adjustmentReason/${endPoints.getAll}`,
  GET_ALL_PAGINATION_ADJUSTMENT_REASON: `adjustmentReason/${endPoints.getAllPagination}`,
  DELETE_ADJUSTMENT_REASON: `adjustmentReason/${endPoints.delete}`,
  EDIT_ADJUSTMENT_REASON: `adjustmentReason/${endPoints.edit}`,
  GET_BY_ID_ADJUSTMENT_REASON: `adjustmentReason/${endPoints.getbyid}`,
  BULK_DELETE_ADJUSTMENT_REASON: `adjustmentReason/${endPoints.bulkDelete}`,

  // Adjustment
  ADD_ADJUSTMENT: `adjustment/${endPoints.add}`,
  EDIT_ADJUSTMENT: `adjustment/${endPoints.edit}`,
  GET_ALL_ADJUSTMENT: `adjustment/${endPoints.getAll}`,
  GET_ALL_PAGINATION_ADJUSTMENT: `adjustment/${endPoints.getAllPagination}`,
  GET_BY_ID_ADJUSTMENT: `adjustment/${endPoints.getbyid}`,
  DELETE_ADJUSTMENT: `adjustment/${endPoints.delete}`,
  BULK_DELETE_ADJUSTMENT: `adjustment/${endPoints.bulkDelete}`,

  // Product condition
  ADD_PRODUCT_CONDITION: `productCondition/${endPoints.add}`,
  EDIT_PRODUCT_CONDITION: `productCondition/${endPoints.edit}`,
  GET_ALL_PRODUCT_CONDITION: `productCondition/${endPoints.getAll}`,
  GET_ALL_PAGINATION_PRODUCT_CONDITION: `productCondition/${endPoints.getAllPagination}`,
  GET_BY_ID_PRODUCT_CONDITION: `productCondition/${endPoints.getbyid}`,
  DELETE_PRODUCT_CONDITION: `productCondition/${endPoints.delete}`,
  BULK_DELETE_PRODUCT_CONDITION: `productCondition/${endPoints.bulkDelete}`,

  // Unit
  GET_ALL_UNIT: `unit/${endPoints.getAll}`,
  GET_ALL_PAGINATION_UNIT: `unit/${endPoints.getAllPagination}`,
  GET_BY_UNITNUMBER_UNIT: "unit/getby-unitNumber",
  DELETE_UNIT: `unit/${endPoints.delete}`,
  BULK_DELETE_UNIT: `unit/${endPoints.bulkDelete}`,
};

export default API_URLS;
