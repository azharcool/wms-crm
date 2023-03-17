import { IAddProductRequestRoot } from "types/catalog/products/addProductRequest";
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
): Promise<any> {
  const URL = `${API_URLS.ADD_PRODUCT}`;
  return client.post(URL, request);
}
