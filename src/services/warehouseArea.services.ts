import { IResponse } from "constants/interfaces";
import { AddWarehouseAreaRequestRoot } from "types/warehouse/area/addWarehouseAreaRequest";
import { GetAllWarehouseAreaResponseRoot } from "types/warehouse/area/getAllWarehouseAreaResponse";
import { GetByIdWarehouseAreaRoot } from "types/warehouse/area/getByIdWarehouseResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function addWarehouseArea(
  request: AddWarehouseAreaRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.ADD_WAREHOUSEAREA}`;
  return client.post(URL, request);
}

export async function editWarehouseArea(
  request: AddWarehouseAreaRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_WAREHOUSEAREA}`;
  return client.put(URL, request);
}

export async function getAllWarehouseArea(
  restUrl: string,
): Promise<GetAllWarehouseAreaResponseRoot> {
  let URL = `${API_URLS.GET_ALL_WAREHOUSEAREA}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getAllPaginationWarehouseArea(
  restUrl: string,
): Promise<GetAllWarehouseAreaResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_WAREHOUSEAREA}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getByIdWarehouseArea(
  restUrl: string,
): Promise<GetByIdWarehouseAreaRoot> {
  let URL = `${API_URLS.GET_BY_ID_WAREHOUSEAREA}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function deleteWarehouseArea(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_WAREHOUSEAREA}/${id}`;
  return client.delete(URL);
}

export async function bulkDeleteWarehouseArea(ids: string): Promise<IResponse> {
  const URL = `${API_URLS.BULK_DELETE_WAREHOUSEAREA}?id=${ids}`;
  return client.delete(URL);
}
