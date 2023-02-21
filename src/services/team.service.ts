import { PER_PAGE } from "constants/constants";
import { IResponse } from "constants/interfaces";
import { IUserRequest } from "pages/admin/settings/screens/team/query/useApiAction";
import { IResponseRole } from "pages/admin/settings/screens/team/query/useFetchRoles";
import { IResponseUser } from "pages/admin/settings/screens/team/query/useFetchUsers";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

async function saveUser(body: IUserRequest): Promise<IResponse> {
  return body?.id
    ? client.put(API_URLS.EDIT_USER, body)
    : client.post(API_URLS.ADD_USER, body);
}

async function activeInactive(userId: number): Promise<IResponse> {
  return client.post(`${API_URLS.ACTIVE_DEACTIVE}?Id=${userId}`);
}

async function removeUser(userId: number): Promise<IResponse> {
  return client.delete(`${API_URLS.DELETE_USER}/${userId}`);
}

async function getRoles(): Promise<IResponseRole> {
  return client.get(`${API_URLS.GET_ROLES}`);
}

async function fetchUsers(
  pageNo: number,
  pageLimit = 10,
): Promise<IResponseUser> {
  const url = `${API_URLS.FETCH_USERS}?page=${pageNo + 1}&pageSize=${
    pageLimit || PER_PAGE
  }`;
  return client.get(url);
}

export { activeInactive, fetchUsers, getRoles, removeUser, saveUser };
