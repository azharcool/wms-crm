import client from "utils/ApiClient";
import { IAddBundleRequestRoot } from "../types/catalog/bundles/addBundleRequest";
import {
  IDeleteBundleByIdResponseRoot,
  IGetBundleResponseRoot,
  IGetByIdBundleResponseRoot,
} from "../types/catalog/bundles/getBundleResponse";

import API_URLS from "./endPoints";

export async function getAllPaginationBundle(
  restUrl: string,
): Promise<IGetBundleResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_BUNDLE}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function addBundle(request: IAddBundleRequestRoot): Promise<any> {
  const URL = `${API_URLS.ADD_BUNDLE}`;
  return client.post(URL, request);
}

export async function getBundleById(
  request: string,
): Promise<IGetByIdBundleResponseRoot> {
  const URL = `${API_URLS.GET_BY_ID_BUNDLE}?${request}`;
  return client.get(URL);
}

export async function deleteBundleById(
  id: number,
): Promise<IDeleteBundleByIdResponseRoot> {
  const URL = `${API_URLS.DELETE_BUNDLE}/${id}`;
  return client.delete(URL);
}

export async function bulkDeleteBundle(
  ids: string,
): Promise<IDeleteBundleByIdResponseRoot> {
  const URL = `${API_URLS.BULK_DELETE_BUNDLE}/${ids}`;
  return client.delete(URL);
}
