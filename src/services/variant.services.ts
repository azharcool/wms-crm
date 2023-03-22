import { IAddVariantRequestRoot } from "types/catalog/variants/addVariantRequest";
import { GetAllVariantByProductIdRoot } from "types/catalog/variants/getAllVariantByProductId";
import { IGetAllVariantResponseRoot } from "types/catalog/variants/getAllVariantResponse";
import { IGetByIdVariantRoot } from "types/catalog/variants/getByIdVariantResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function getAllPaginationVariant(
  restUrl: string,
): Promise<IGetAllVariantResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_VARIANT}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function getAllVariant(): Promise<IGetAllVariantResponseRoot> {
  const URL = `${API_URLS.GET_ALL_VARIANT}`;
  return client.get(URL);
}

export async function getByIdVariant(id: number): Promise<IGetByIdVariantRoot> {
  const URL = `${API_URLS.GET_BY_ID_VARIANT}?id=${id}`;
  return client.get(URL);
}

export async function addVariant(
  request: IAddVariantRequestRoot,
): Promise<any> {
  const URL = `${API_URLS.ADD_VARIANT}`;
  return client.post(URL, request);
}

export async function getAllVariantByProductId(
  restUrl: string,
): Promise<GetAllVariantByProductIdRoot> {
  let URL = API_URLS.GET_ALL_PAGINATION_VARIANT_BY_PRODUCTID;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}
