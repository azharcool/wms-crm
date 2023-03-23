import { IResponse } from "constants/interfaces";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function addZone(request: any): Promise<any> {
  const URL = `${API_URLS.ADD_ZONE}`;
  return client.post(URL, request);
}

export async function editZone(request: any): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_ZONE}`;
  return client.put(URL, request);
}

export async function getAllZone() {
  const URL = `${API_URLS.GET_ALL_ZONE}`;
  return client.get(URL);
}

export async function getAllPaginationZone(restUrl: string) {
  let URL = `${API_URLS.GET_ALL_PAGINATION_ZONE}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getByIdZone(id: number) {
  const URL = `${API_URLS.GET_BY_ID_ZONE}?id=${id}`;
  return client.get(URL);
}

export async function deleteZone(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_ZONE}/${id}`;
  return client.delete(URL);
}

export async function bulkDeleteZone(ids: string): Promise<IResponse> {
  const URL = `${API_URLS.BULK_DELETE_ZONE}?id=${ids}`;
  return client.delete(URL);
}
