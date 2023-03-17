// import { IAddProductRequestRoot } from "types/catalog/products/addProductRequest";
import { IGetBrandResponseRoot } from "types/catalog/brands/getBrandResponse";
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

// async function getAllBrand(): Promise<IGetBrandResponseRoot> {
//   const url = `${API_URLS.GET_ALL_BRAND}`;
//   return client.get(url);
// }
// http://localuser02-001-site2.etempurl.com/api/brand/getall

// export async function addBrand(
//   request: IAddProductRequestRoot,
// ): Promise<IGetBrandResponseRoot> {
//   const URL = `${API_URLS.ADD_PRODUCT}`;
//   return client.post(URL, request);
// }

// export { getAllDataBrand };
