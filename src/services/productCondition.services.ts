import { IResponse } from "constants/interfaces";
import { IAddAdjustmentRequestRoot } from "types/setting/adjustment/addAdjustmentRequest";
import { IAddAdjustmentResponseRoot } from "types/setting/adjustment/addAdjustmetRespone";
import { GetByIdAdjustmentRoot } from "types/setting/adjustment/getByIdAdjustmentResponse";
import { IAddProductConditionRequestRoot } from "types/setting/product-condition/addProductCondition";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function getAllProductCondition(
  restUrl: string,
): Promise<IAddProductConditionRequestRoot> {
  let URL = `${API_URLS.GET_ALL_PRODUCT_CONDITION}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getByIdProductCondition(
  id: number,
): Promise<GetByIdAdjustmentRoot> {
  const URL = `${API_URLS.GET_BY_ID_PRODUCT_CONDITION}?id=${id}`;
  return client.get(URL);
}

export async function addProductCondition(
  request: IAddProductConditionRequestRoot,
): Promise<IAddAdjustmentResponseRoot> {
  const URL = `${API_URLS.ADD_PRODUCT_CONDITION}`;
  return client.post(URL, request);
}

export async function editProductCondition(
  request: IAddAdjustmentRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_PRODUCT_CONDITION}`;
  return client.put(URL, request);
}

export async function deleteProductCondition(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_PRODUCT_CONDITION}/${id}`;
  return client.delete(URL);
}
