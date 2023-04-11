import { IResponse } from "constants/interfaces";
import { IAddBrandRequestRoot } from "types/catalog/brands/addBrandRequest";
import { IGetBrandResponseRoot } from "types/catalog/brands/getBrandResponse";
import { IGetByIdBrandResponseRoot } from "types/catalog/brands/getByIdBrandResponse";
import { IAddProductResponseRoot } from "types/catalog/products/addProductResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function getAllPaginationBrand(
  restUrl: string,
): Promise<IGetBrandResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_BRAND}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getAllBrand(
  restUrl: string,
): Promise<IGetBrandResponseRoot> {
  let URL = `${API_URLS.GET_ALL_BRAND}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function addBrand(
  request: IAddBrandRequestRoot,
): Promise<IAddProductResponseRoot> {
  const URL = `${API_URLS.ADD_BRAND}`;
  return client.post(URL, request);
}

export async function getByIdBrand(
  id: number,
): Promise<IGetByIdBrandResponseRoot> {
  const URL = `${API_URLS.GET_BY_ID_BRAND}?id=${id}`;
  return client.get(URL);
}

export async function editBrand(
  data: IAddBrandRequestRoot,
): Promise<IGetBrandResponseRoot> {
  const URL = `${API_URLS.EDIT_BRAND}`;
  return client.put(URL, data);
}

export async function deleteBrand(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_BRAND}/${id}`;
  return client.delete(URL);
}

export async function bulkDeleteBrand(ids: string): Promise<IResponse> {
  const URL = `${API_URLS.BULK_DELETE_BRAND}/${ids}`;
  return client.delete(URL);
}
