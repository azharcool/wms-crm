import { PER_PAGE } from "constants/constants";
import { IResponse } from "constants/interfaces";
import { IRoleRequest } from "pages/admin/settings/screens/roles/query/useApiAction";
import { IResponseRole } from "pages/admin/settings/screens/roles/query/useFetchRoles";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

async function saveRole(body: IRoleRequest): Promise<IResponse> {
  return body?.id
    ? client.put(API_URLS.EDIT_ROLE, body)
    : client.post(API_URLS.ADD_ROLE, body);
}

async function removeRole(role: number): Promise<IResponse> {
  return client.delete(`${API_URLS.DELETE_ROLE}/${role}`);
}

async function getRoles(): Promise<IResponseRole> {
  return client.get(`${API_URLS.GET_ROLES}`);
}

async function fetchRoles(
  pageNo: number,
  pageLimit: number,
): Promise<IResponseRole> {
  const url = `${API_URLS.GET_ROLES_PAGINATION}?page=${pageNo + 1}&pageSize=${
    pageLimit || PER_PAGE
  }`;

  return client.get(url);
}



export { fetchRoles, getRoles, removeRole, saveRole };
