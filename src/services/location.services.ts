import { IResponse } from "constants/interfaces";
import { AddLocationRequestRoot } from "types/warehouse/location/addLocationRequest";
import { GetAllLocationResponseRoot } from "types/warehouse/location/getAllLocationResponse";
import { GetByIdLocationResponseRoot } from "types/warehouse/location/getByIdLocationResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function addLocation(
  request: AddLocationRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.ADD_LOCATION}`;
  return client.post(URL, request);
}

export async function editLocation(
  request: AddLocationRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_LOCATION}`;
  return client.put(URL, request);
}

export async function getAllLocation() {
  const URL = `${API_URLS.GET_ALL_LOCATION}`;
  return client.get(URL);
}

export async function getAllPaginationLocation(
  restUrl: string,
): Promise<GetAllLocationResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_LOCATION}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getByIdLocation(
  restUrl: string,
): Promise<GetByIdLocationResponseRoot> {
  let URL = `${API_URLS.GET_BY_ID_LOCATION}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function deleteLocation(
  id: number,
  warehouseId: number,
): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_LOCATION}/${id}?warehouseId=${warehouseId}`;
  return client.delete(URL);
}

export async function bulkDeleteLocation(ids: string): Promise<IResponse> {
  const URL = `${API_URLS.BULK_DELETE_LOCATION}?id=${ids}`;
  return client.delete(URL);
}
