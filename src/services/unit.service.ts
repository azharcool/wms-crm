import { IResponse } from "constants/interfaces";
import { GetAllPaginationUnitResponseRoot } from "types/catalog/unit/getAllPaginationUnitResponse";
import { GetAllUnitResponseRoot } from "types/catalog/unit/getAllUnitResponse";
import { GetByUnitNumberUnitResponseRoot } from "types/catalog/unit/getByUnitNumberUnitResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function getAllPaginationUnit(
  restUrl: string,
): Promise<GetAllPaginationUnitResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_UNIT}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getAllUnit(): Promise<GetAllUnitResponseRoot> {
  const URL = `${API_URLS.GET_ALL_UNIT}`;
  return client.get(URL);
}

export async function getByUnitNumberUnit(
  id: number,
): Promise<GetByUnitNumberUnitResponseRoot> {
  const URL = `${API_URLS.GET_BY_UNITNUMBER_UNIT}?unitNumber=${id}`;

  return client.get(URL);
}

export async function deleteUnit(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_UNIT}/${id}`;
  return client.delete(URL);
}

export async function bulkDeleteUnit(ids: string): Promise<IResponse> {
  const URL = `${API_URLS.BULK_DELETE_UNIT}/${ids}`;
  return client.delete(URL);
}
