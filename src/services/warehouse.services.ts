import { IResponse } from "constants/interfaces";
import { IAddWarehouseRequestRoot } from "types/warehouse/addWarehouseRequest";
import { EditWarehouseRequestRoot } from "types/warehouse/editWarehouseRequestRoot";
import { IGetByIdWarehouseResponseRoot } from "types/warehouse/getByIdWarehouseResponse";
import { IGetWarehouseResponseRoot } from "types/warehouse/getWarehouseResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function addWarehouse(
  request: IAddWarehouseRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.ADD_WAREHOUSE}`;
  return client.post(URL, request);
}

export async function editWarehouse(
  request: EditWarehouseRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_WAREHOUSE}`;
  return client.put(URL, request);
}

export async function getAllWarehouse(): Promise<IGetWarehouseResponseRoot> {
  const URL = `${API_URLS.GET_ALL_WAREHOUSE}`;
  return client.get(URL);
}

export async function getAllPaginationWarehouse(
  restUrl: string,
): Promise<IGetWarehouseResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_WAREHOUSE}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getByIdWarehouse(
  id: number,
): Promise<IGetByIdWarehouseResponseRoot> {
  const URL = `${API_URLS.GET_BY_ID_WAREHOUSE}?id=${id}`;
  return client.get(URL);
}

export async function deleteWarehouse(id?: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_WAREHOUSE}/${id}`;
  return client.delete(URL);
}

export async function bulkDeleteWarehouse(ids: string): Promise<IResponse> {
  const URL = `${API_URLS.BULK_DELETE_WAREHOUSE}/${ids}`;
  return client.delete(URL);
}
