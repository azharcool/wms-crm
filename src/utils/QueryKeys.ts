/**
 * @format
 */
const QueryKeys = {
  users: "teamUsers",
  screens: "screens",
  pipelines: "pipelines",
  screensAccess: "screens-access",
  roles: "roles",
  permissions: "permissions",
  leadSources: "leadSources",
  leadStatuses: "leadStatuses",
  rolePermissions: "rolePermissions",
  rolePermissionsInit: "rolePermissionsInit",
  contacts: "contacts",
  contactsBySearch: "contactsBySearch",
  userRoles: "user-roles",
  preferences: "preferences",
  customFields: "custom-fields",
  notes: "notes",
  activitiesType: "activitiesType",
  activities: "activities",
  myList: "my-list",
  myContactList: "my-contact-list-by-listId",
  getAllActivities: "get-all-activities",
  allCounts: "all-counts",
  getAllBrand: "getAllBrand",
  addBrand: "addBrand",
  getAllProduct: "getAllProduct",
  getAllCategories: "getAllCategories",
  getAllVariant: "getAllVariant",
  getAllBundle: "getAllBundle",
  getByIdBundle: "getByIdBundle",

};

export type QueryKeysType = keyof typeof QueryKeys;

export { QueryKeys };
