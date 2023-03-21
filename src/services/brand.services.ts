// import { IAddProductRequestRoot } from "types/catalog/products/addProductRequest";
import { IAddBrandRequestRoot } from "types/catalog/brands/addBrandRequest";
import { IGetBrandResponseRoot } from "types/catalog/brands/getBrandResponse";
import { IGetByIdBrandResponseRoot } from "types/catalog/brands/getByIdBrandResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function getAllBrand(
  restUrl: string,
): Promise<IGetBrandResponseRoot> {
  let URL = `${API_URLS.GET_ALL_BRAND}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function addBrandAction(
  body: IAddBrandRequestRoot,
): Promise<IGetBrandResponseRoot> {
  const URL = `${API_URLS.ADD_BRAND}`;
  return client.post(URL, body);
}

export async function getByIdBrand(
  id: number,
): Promise<IGetByIdBrandResponseRoot> {
  const URL = `${API_URLS.GET_BY_ID_BRAND}?id=${id}`;
  return client.get(URL);
}

export async function putBrandDetail(
  body: IAddBrandRequestRoot,
): Promise<IGetBrandResponseRoot> {
  const URL = `${API_URLS.PUT_BRAND}`;
  return client.put(URL, body);
}
