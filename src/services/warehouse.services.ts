import { IResponse } from "constants/interfaces";
import { IAddWarehouseRequestRoot } from "types/warehouse/addWarehouseRequest";
import { IAddWarehouseResponseRoot } from "types/warehouse/addWarehouseResponse";
import { IGetByIdWarehouseResponseRoot } from "types/warehouse/getByIdWarehouseResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function addWarehouse(
  request: IAddWarehouseRequestRoot,
): Promise<IAddWarehouseResponseRoot> {
  const URL = `${API_URLS.ADD_WAREHOUSE}`;
  return client.post(URL, request);
}

export async function editWarehouse(request: any): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_WAREHOUSE}`;
  return client.put(URL, request);
}

export async function getAllWarehouse() {
  const URL = `${API_URLS.GET_ALL_WAREHOUSE}`;
  return client.get(URL);
}

export async function getAllPaginationWarehouse(restUrl: string) {
  let URL = `${API_URLS.GET_ALL_PAGINATION_WAREHOUSE}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getByIdWarehouse(id: number):Promise<IGetByIdWarehouseResponseRoot> {
  const URL = `${API_URLS.GET_BY_ID_WAREHOUSE}?id=${id}`;
  return client.get(URL);
}

export async function deleteWarehouse(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_WAREHOUSE}/${id}`;
  return client.delete(URL);
}

export async function bulkDeleteWarehouse(ids: string): Promise<IResponse> {
  const URL = `${API_URLS.BULK_DELETE_WAREHOUSE}?id=${ids}`;
  return client.delete(URL);
}
