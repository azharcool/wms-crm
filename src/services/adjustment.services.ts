import { IResponse } from "constants/interfaces";
import { IAddAdjustmentRequestRoot } from "types/setting/adjustment/addAdjustmentRequest";
import { IAddAdjustmentResponseRoot } from "types/setting/adjustment/addAdjustmetRespone";
import { IGetAdjustmentResponseRoot } from "types/setting/adjustment/getAdjustmentResponse";
import { GetByIdAdjustmentRoot } from "types/setting/adjustment/getByIdAdjustmentResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function getAllAdjustment(
  restUrl: string,
): Promise<IGetAdjustmentResponseRoot> {
  let URL = `${API_URLS.GET_ALL_ADJUSTMENT}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getByIdAdjustment(
  id: number,
): Promise<GetByIdAdjustmentRoot> {
  const URL = `${API_URLS.GET_BY_ID_BRAND}?id=${id}`;
  return client.get(URL);
}

export async function addAdjustment(
  request: IAddAdjustmentRequestRoot,
): Promise<IAddAdjustmentResponseRoot> {
  const URL = `${API_URLS.ADD_ADJUSTMENT}`;
  return client.post(URL, request);
}

export async function editAdjustment(
  request: IAddAdjustmentRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_ADJUSTMENT}`;
  return client.put(URL, request);
}

export async function deleteAdjustment(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_ADJUSTMENT}/${id}`;
  return client.delete(URL);
}
