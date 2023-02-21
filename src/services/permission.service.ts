import { PER_PAGE } from "constants/constants";
import { IResponse } from "constants/interfaces";
import { IPermissionRequest } from "pages/admin/settings/screens/permissions/query/useApiAction";
import { IResponsePermission } from "pages/admin/settings/screens/permissions/query/useFetchPermissions";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

async function savePermission(body: IPermissionRequest): Promise<IResponse> {
  return body?.id
    ? client.put(API_URLS.EDIT_PERMISSION, body)
    : client.post(API_URLS.ADD_PERMISSION, body);
}

async function removePermission(userId: number): Promise<IResponse> {
  return client.delete(`${API_URLS.DELETE_PERMISSION}/${userId}`);
}

async function fetchPermissions(
  pageNo: number,
  pageLimit = 10,
): Promise<IResponsePermission> {
  const url = `${API_URLS.GET_PERMISSIONS}?page=${pageNo + 1}&pageSize=${
    pageLimit || PER_PAGE
  }`;
  return client.get(url);
}

async function fetchPermissionsByRoleId(
  roleId: number,
): Promise<IResponsePermission> {
  const url = `${API_URLS.GET_PERMISSIONS_BY_ROLE_ID}?id=${roleId}`;
  return client.get(url);
}

export {
  fetchPermissions,
  fetchPermissionsByRoleId,
  removePermission,
  savePermission,
};
