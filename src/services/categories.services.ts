import { IAddCategoriesRequestRoot } from "types/catalog/catagories/addCategoriesRequest";
import { IAddCategoriesResponseRoot } from "types/catalog/catagories/addCategoriesResponse";
import { IGetProductResponseRoot } from "types/catalog/products/getProductResponse";

import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function getAllPaginationCategories(
  restUrl: string,
): Promise<IGetProductResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_CATEGORIES}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function addCategory(
  request: IAddCategoriesRequestRoot,
): Promise<IAddCategoriesResponseRoot> {
  const URL = `${API_URLS.ADD_CATEGORY}`;
  return client.post(URL, request);
}
