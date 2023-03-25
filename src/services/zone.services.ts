import { IResponse } from "constants/interfaces";
import { AddZoneRequestRoot } from "types/warehouse/zone/addZoneRequest";
import { GetAllZoneResponseRoot } from "types/warehouse/zone/getAllZoneResponse";
import { GetByIdZoneResponseRoot } from "types/warehouse/zone/getByIdZoneResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function addZone(request: AddZoneRequestRoot): Promise<IResponse> {
  const URL = `${API_URLS.ADD_ZONE}`;
  return client.post(URL, request);
}

export async function editZone(
  request: AddZoneRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_ZONE}`;
  return client.put(URL, request);
}

export async function getAllZone(
  restUrl: string,
): Promise<GetAllZoneResponseRoot> {
  let URL = `${API_URLS.GET_ALL_ZONE}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getAllPaginationZone(
  restUrl: string,
): Promise<GetAllZoneResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_ZONE}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getByIdZone(
  restUrl: string,
): Promise<GetByIdZoneResponseRoot> {
  let URL = `${API_URLS.GET_BY_ID_ZONE}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function deleteZone(id: number,warehouseId:number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_ZONE}/${id}?warehouseId=${warehouseId}`;
  return client.delete(URL);
}

export async function bulkDeleteZone(ids: string): Promise<IResponse> {
  const URL = `${API_URLS.BULK_DELETE_ZONE}?id=${ids}`;
  return client.delete(URL);
}
