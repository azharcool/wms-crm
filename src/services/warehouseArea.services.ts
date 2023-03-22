import { IResponse } from "constants/interfaces";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function addWarehouseArea(request: any): Promise<any> {
  const URL = `${API_URLS.ADD_WAREHOUSEAREA}`;
  return client.post(URL, request);
}

export async function editWarehouseArea(request: any): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_WAREHOUSEAREA}`;
  return client.put(URL, request);
}

export async function getAllWarehouseArea() {
  const URL = `${API_URLS.GET_ALL_WAREHOUSEAREA}`;
  return client.get(URL);
}

export async function getAllPaginationWarehouseArea(restUrl: string) {
  let URL = `${API_URLS.GET_ALL_PAGINATION_WAREHOUSEAREA}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getByIdWarehouseArea(id: number) {
  const URL = `${API_URLS.GET_BY_ID_WAREHOUSEAREA}?id=${id}`;
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
