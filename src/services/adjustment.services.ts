import { IAddAdjustmentRequestRoot } from "types/setting/adjustment/addAdjustmentRequest";
import { IAddAdjustmentResponseRoot } from "types/setting/adjustment/addAdjustmetRespone";
import { IGetAdjustmentResponseRoot } from "types/setting/adjustment/getAdjustmentResponse";
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

export async function addAdjustment(
  request: IAddAdjustmentRequestRoot,
): Promise<IAddAdjustmentResponseRoot> {
  const URL = `${API_URLS.ADD_ADJUSTMENT}`;
  return client.post(URL, request);
}
