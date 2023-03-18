import { IResponse } from "constants/interfaces";
import { IAddProductRequestRoot } from "types/catalog/products/addProductRequest";
import { IAddProductResponseRoot } from "types/catalog/products/addProductResponse";
import { IGetProductResponseRoot } from "types/catalog/products/getProductResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function getAllPaginationProduct(
  restUrl: string,
): Promise<IGetProductResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_PRODUCT}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function addProduct(
  request: IAddProductRequestRoot,
): Promise<IAddProductResponseRoot> {
  const URL = `${API_URLS.ADD_PRODUCT}`;
  return client.post(URL, request);
}

export async function deleteProduct(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_PRODUCT}/${id}`;
  return client.delete(URL);
}

export async function buldDeleteProduct(ids: string): Promise<IResponse> {
  const URL = `${API_URLS.BULK_DELETE_PRODUCT}/${ids}`;
  return client.delete(URL);
}
