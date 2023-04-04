import { IResponse } from "constants/interfaces";
import { AddAdjustmentRequestRoot } from "types/stock/adjustment/addAdjustmentRequest";
import { GetAllAdjustmentResponseRoot } from "types/stock/adjustment/getAllAdjustmentResponse";
import { GetByIdAddjustmentRoot } from "types/stock/adjustment/getByIdAdjustmentResponse";

import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function addAdjustment(
  request: AddAdjustmentRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.ADD_ADJUSTMENT}`;
  return client.post(URL, request);
}

export async function editAdjustment(
  request: AddAdjustmentRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_ADJUSTMENT}`;
  return client.put(URL, request);
}

export async function getAllAdjustment(): Promise<GetAllAdjustmentResponseRoot> {
  const URL = `${API_URLS.GET_ALL_ADJUSTMENT}`;
  return client.get(URL);
}

export async function getAllPaginationAdjustment(
  restUrl: string,
): Promise<GetAllAdjustmentResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_ADJUSTMENT}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getByIdAdjustment(
  id: number,
): Promise<GetByIdAddjustmentRoot> {
  const URL = `${API_URLS.GET_BY_ID_ADJUSTMENT}?id=${id}`;

  return client.get(URL);
}

export async function deleteAdjustment(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_ADJUSTMENT}/${id}`;
  return client.delete(URL);
}

export async function bulkDeleteAdjustment(ids: string): Promise<IResponse> {
  const URL = `${API_URLS.BULK_DELETE_ADJUSTMENT}?id=${ids}`;
  return client.delete(URL);
}
