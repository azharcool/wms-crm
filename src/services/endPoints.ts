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
  LOGIN: `${BASE_URL}/user-login/${endPoints.login}`,
  SIGNUP: `${BASE_URL}/${endPoints.signup}`,
  LOGOUT: `${BASE_URL}/user-login/${endPoints.logout}`,

  // team endpoints
  ADD_USER: `${BASE_URL}/user/${endPoints.addUser}`,
  EDIT_USER: `${BASE_URL}/user/${endPoints.editUser}`,
  ACTIVE_DEACTIVE: `${BASE_URL}/user/${endPoints.activeDeactive}`,
  FETCH_USERS: `${BASE_URL}/user/${endPoints.fetchUsers}`,
  DELETE_USER: `${BASE_URL}/user/${endPoints.delete}`,
  GET_USEROLESBY_USERID: `${BASE_URL}/user/${endPoints.getUserByUserRoleId}`,
  GET_USERS_BY_ROLE_NAME: `${BASE_URL}/user/${endPoints.getUserByRoleName}`,
  GET_ALL_USERS: `${BASE_URL}/user/${endPoints.getAll}`,

  // contacts endpoints
  ADD_CONTACT: `${BASE_URL}/contact/${endPoints.add}`,
  EDIT_CONTACT: `${BASE_URL}/contact/${endPoints.edit}`,
  FETCH_CONTACT: `${BASE_URL}/contact/GetAll-v1`,
  DELETE_CONTACT: `${BASE_URL}/contact/${endPoints.delete}`,
  GET_CONTACT_BY_ID: `${BASE_URL}/contact/${endPoints.getbyid}`,
  GET_CONTACT_BY_SEARCH: `${BASE_URL}/contact/${endPoints.getAll}`,
  BULK_DELETE: `${BASE_URL}/contact/${endPoints.bulkDelete}`,
  UPDATE_LEAD_OWNER: `${BASE_URL}/contact/${endPoints.leadOwner}`,
  UPDATE_LEAD_SOURCE: `${BASE_URL}/contact/${endPoints.leadSource}`,

  // address endpoints
  ADD_ADDRESS: `${BASE_URL}/address/${endPoints.add}`,
  EDIT_ADDRESS: `${BASE_URL}/address/${endPoints.edit}`,

  // notes endpoints
  ADD_NOTE: `${BASE_URL}/notes/${endPoints.add}`,
  EDIT_NOTE: `${BASE_URL}/notes/${endPoints.edit}`,
  DELETE_NOTE: `${BASE_URL}/notes/${endPoints.delete}`,
  FETCH_NOTES: `${BASE_URL}/notes/${endPoints.getAll}`,
  FETCH_NOTES_PAGINATION: `${BASE_URL}/notes/${endPoints.getAllPagination}`,

  // screens endpoints
  FETCH_SCREENS: `${BASE_URL}/screen/${endPoints.getAllScreensWithPagination}`,
  ADD_SCREEN: `${BASE_URL}/screen/${endPoints.add}`,
  EDIT_SCREEN: `${BASE_URL}/screen/${endPoints.edit}`,
  DELETE_SCREEN: `${BASE_URL}/screen/${endPoints.delete}`,

  // pipelines endpoints
  FETCH_PIPELINES: `${BASE_URL}/pipeline/${endPoints.getAll}`,
  FETCH_PIPELINES_WITHOUT_PAGINATION: `${BASE_URL}/pipeline/${endPoints.getAll}`,
  ADD_PIPELINE: `${BASE_URL}/pipeline/${endPoints.add}`,
  EDIT_PIPELINE: `${BASE_URL}/pipeline/${endPoints.edit}`,
  DELETE_PIPELINE: `${BASE_URL}/pipeline/${endPoints.delete}`,

  // permissions
  GET_PERMISSIONS: `${BASE_URL}/permission/${endPoints.getAllPagination}`,
  ADD_PERMISSION: `${BASE_URL}/permission/${endPoints.add}`,
  EDIT_PERMISSION: `${BASE_URL}/permission/${endPoints.edit}`,
  DELETE_PERMISSION: `${BASE_URL}/permission/${endPoints.delete}`,

  // user access endpoints
  FETCH_USER_ACCESS: `${BASE_URL}/userscreenaccess/${endPoints.getRoleAccess}`,
  ADD_USER_ACCESS: `${BASE_URL}/userscreenaccess/${endPoints.add}`,

  // roles
  GET_ROLES_PAGINATION: `${BASE_URL}/user-role/${endPoints.getAllPagination}`,
  ADD_ROLE: `${BASE_URL}/user-role/${endPoints.add}`,
  EDIT_ROLE: `${BASE_URL}/user-role/${endPoints.edit}`,
  DELETE_ROLE: `${BASE_URL}/user-role/${endPoints.delete}`,

  // Lead source
  GET_LEAD_SOURCE_PAGINATION: `${BASE_URL}/leadsource/${endPoints.getAllPagination}`,
  GET_LEAD_SOURCE_WITHOUT_PAGINATION: `${BASE_URL}/leadsource/${endPoints.getAll}`,
  ADD_LEAD_SOURCE: `${BASE_URL}/leadsource/${endPoints.add}`,
  EDIT_LEAD_SOURCE: `${BASE_URL}/leadsource/${endPoints.edit}`,
  DELETE_LEAD_SOURCE: `${BASE_URL}/leadsource/${endPoints.delete}`,

  // Lead status
  GET_LEAD_STATUS_PAGINATION: `${BASE_URL}/leadstatus/${endPoints.getAllPagination}`,
  GET_LEAD_STATUS_WITHOUT_PAGINATION: `${BASE_URL}/leadstatus/${endPoints.getAll}`,
  ADD_LEAD_STATUS: `${BASE_URL}/leadstatus/${endPoints.add}`,
  EDIT_LEAD_STATUS: `${BASE_URL}/leadstatus/${endPoints.edit}`,
  DELETE_LEAD_STATUS: `${BASE_URL}/leadstatus/${endPoints.delete}`,

  // activities
  GET_ACTIVITIES_TYPE: `${BASE_URL}/activityType/${endPoints.getAll}`,
  ADD_ACTIVITY: `${BASE_URL}/activity/${endPoints.add}`,
  EDIT_ACTIVITY: `${BASE_URL}/activity/${endPoints.edit}`,
  DELETE_ACTIVITY: `${BASE_URL}/activity/${endPoints.delete}`,
  ACTIVATE_ACTIVITY: `${BASE_URL}/activity/${endPoints.activityComplete}`,
  FETCH_ACTIVITIES_PAGINATION: `${BASE_URL}/activity/${endPoints.getAllPagination}`,
  GET_ALL_ACTIVITIES: `${BASE_URL}/activity/${endPoints.getAll}`,
  GET_ALL_COUNTS: `${BASE_URL}/activity/${endPoints.allActivityCount}`,

  // Custom fields
  ADD_CUSTOM_FIELDS: `${BASE_URL}/custom/${endPoints.add}`,
  GET_CUSTOM_FIELDS: `${BASE_URL}/custom/${endPoints.getAll}`,

  // Mylist
  ADD_MYLIST: `${BASE_URL}/mylist/${endPoints.add}`,
  GET_MYLIST: `${BASE_URL}/mylist/${endPoints.getAll}`,
  DELETE_MYLIST: `${BASE_URL}/mylist/${endPoints.delete}`,
  GET_MYLISTCONTACT_BY_MYLISTID: `${BASE_URL}/mylist/getll-mylistcontact-by-mylistId`,
  GET_MYLISTCONTACT_BY_MULTI_MYLISTID: `${BASE_URL}/mylist/getall-mylistcontact-by-multi-MylistId`,

  // other
  GET_PERMISSIONS_BY_ROLE_ID: `${BASE_URL}/userscreenaccess/${endPoints.getPermissionsByRoleId}`,
  GET_ROLES: `${BASE_URL}/user-role/${endPoints.getAll}`,
  FETCH_SCREENS_WITHOUT_PAGINATION: `${BASE_URL}/user-screen-access/${endPoints.getAllScreens}`,
  FETCH_SCREENS_WITH_PERMISSION: `${BASE_URL}/screen/${endPoints.getAllScreensWithPermission}`,
  ADD_PREFERENCE: `${BASE_URL}/preference/${endPoints.savePreference}`,
  GET_PREFERENCE: `${BASE_URL}/preference/${endPoints.getPreference}`,
  GET_ALL_CUSTOM_FIELDS: `${BASE_URL}/custom/${endPoints.getAllCustomFields}`,

  // Product
  GET_ALL_PAGINATION_PRODUCT: `product/${endPoints.getAllPagination}`,
  ADD_PRODUCT: `product/${endPoints.add}`,
  EDIT_PRODUCT: `product/${endPoints.edit}`,
  GET_BY_ID_PRODUCT: `product/${endPoints.getbyid}`,
  BULK_DELETE_PRODUCT: `product/${endPoints.bulkDelete}`,
  DELETE_PRODUCT: `product/${endPoints.delete}`,
};

export default API_URLS;
