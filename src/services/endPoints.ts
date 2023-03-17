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
  GET_ALL_PAGINATION_CATEGORIES: `category/${endPoints.getAllPagination}`,
  ADD_CATEGORY: `category/${endPoints.add}`,
};

export default API_URLS;
