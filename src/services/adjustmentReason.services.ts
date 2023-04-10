import { IResponse } from "constants/interfaces";
import { IAddAdjustmentRequestRoot } from "types/setting/adjustment/addAdjustmentRequest";
import { IAddAdjustmentResponseRoot } from "types/setting/adjustment/addAdjustmetRespone";
import { IGetAdjustmentResponseRoot } from "types/setting/adjustment/getAdjustmentResponse";
import { GetByIdAdjustmentRoot } from "types/setting/adjustment/getByIdAdjustmentResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function getAllAdjustmentReason(
  restUrl: string,
): Promise<IGetAdjustmentResponseRoot> {
  let URL = `${API_URLS.GET_ALL_ADJUSTMENT_REASON}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}
export async function getAllAdjustmentReasonWithoutPagination(): Promise<IGetAdjustmentResponseRoot> {
  const URL = `${API_URLS.GET_ALL_ADJUSTMENT_REASON}`;
  return client.get(URL);
}

export async function getAllPaginationAdjustmentReason(
  restUrl: string,
): Promise<IGetAdjustmentResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_ADJUSTMENT_REASON}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getByIdAdjustmentReason(
  id: number,
): Promise<GetByIdAdjustmentRoot> {
  const URL = `${API_URLS.GET_BY_ID_ADJUSTMENT_REASON}?id=${id}`;
  return client.get(URL);
}

export async function addAdjustmentReason(
  request: IAddAdjustmentRequestRoot,
): Promise<IAddAdjustmentResponseRoot> {
  const URL = `${API_URLS.ADD_ADJUSTMENT_REASON}`;
  return client.post(URL, request);
}

export async function editAdjustmentReason(
  request: IAddAdjustmentRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_ADJUSTMENT_REASON}`;
  return client.put(URL, request);
}

export async function deleteAdjustmentReason(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_ADJUSTMENT_REASON}/${id}`;
  return client.delete(URL);
}

export async function bulkDeleteAdjustmentReason(
  ids: string,
): Promise<IResponse> {
  const URL = `${API_URLS.BULK_DELETE_ADJUSTMENT_REASON}/${ids}`;
  return client.delete(URL);
}
