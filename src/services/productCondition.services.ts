import { IResponse } from "constants/interfaces";
import { IAddAdjustmentResponseRoot } from "types/setting/adjustment/addAdjustmetRespone";
import { IAddProductConditionRequestRoot } from "types/setting/product-condition/addProductConditionRequest";
import { AddProductConditionResponseRoot } from "types/setting/product-condition/addProductConditionResponse";
import { GetAllProductConditionPaginationResponseRoot } from "types/setting/product-condition/getAllProductConditionPaginationResponse";
import { GetAllProductConditionRoot } from "types/setting/product-condition/getAllProductConditionResponse";
import { GetByIdProductConditionResponseRoot } from "types/setting/product-condition/getByIdProductConditionResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function getAllProductCondition(): Promise<GetAllProductConditionRoot> {
  const URL = `${API_URLS.GET_ALL_PRODUCT_CONDITION}`;
  return client.get(URL);
}

export async function getAllPaginationProductCondition(
  restUrl: string,
): Promise<GetAllProductConditionPaginationResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PRODUCT_CONDITION}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getByIdProductCondition(
  id: number,
): Promise<GetByIdProductConditionResponseRoot> {
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
  request: IAddProductConditionRequestRoot,
): Promise<AddProductConditionResponseRoot> {
  const URL = `${API_URLS.EDIT_PRODUCT_CONDITION}`;
  return client.put(URL, request);
}

export async function deleteProductCondition(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_PRODUCT_CONDITION}/${id}`;
  return client.delete(URL);
}
