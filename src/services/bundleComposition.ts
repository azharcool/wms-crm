import { IResponse } from "constants/interfaces";
import { AddBundlCompositionRequestRoot } from "types/catalog/bundleComposition/addBundleCompostionRequest";
import { GetBundleCompositionResponseRoot } from "types/catalog/bundleComposition/getBundleCompostionResponse";
import { GetByBundleIdBundleCompositionRoot } from "types/catalog/bundleComposition/getByBundleIdBundleComposition";
import { GetByIdBundleComponsitionRoot } from "types/catalog/bundleComposition/getByIdBundleCompositionResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function getAllByBundleIdBundleComposition(
  id: number,
): Promise<GetByBundleIdBundleCompositionRoot> {
  const URL = `${API_URLS.GET_ALL_BY_BUNDLE_ID_BUNDLE_COMPOSITION}?bundleId=${id}`;
  return client.get(URL);
}

export async function getAllPaginationBundleComposition(
  restUrl: string,
): Promise<GetBundleCompositionResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_BUNDLE_COMPOSITION}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function addBundleComposition(
  request: AddBundlCompositionRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.ADD_BUNDLE_COMPOSITION}`;
  return client.post(URL, request);
}

export async function editBundleComposition(
  request: AddBundlCompositionRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_BUDLE_COMPOSITION}`;
  return client.put(URL, request);
}

export async function getByIdBundleComposition(
  id: number,
): Promise<GetByIdBundleComponsitionRoot> {
  const URL = `${API_URLS.GET_BY_ID_BUNDLE_COMPOSITION}?id=${id}`;
  return client.get(URL);
}

export async function deleteBundleCompById(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_BUNDLE_COMPOSITION}/${id}`;
  return client.delete(URL);
}
