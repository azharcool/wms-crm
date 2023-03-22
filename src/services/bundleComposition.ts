import client from "utils/ApiClient";
import { IAddCompositionbundleRootRequest } from "types/catalog/bundleCompo/addBundleCompoRequest";
import { IDeleteBundleByIdResponseRoot } from "types/catalog/bundles/getBundleResponse";
import { IGetBundleCompoResponseRoot } from "../types/catalog/bundleCompo/getBundleCompostionResponse";
import API_URLS from "./endPoints";




export async function getAllPaginationBundleComposition(
  restUrl: string,
): Promise<IGetBundleCompoResponseRoot> {
  let URL = `${API_URLS.GET_ALL_PAGINATION_BUNDLE_COMPOSITION}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function addBundleComposition(request: IAddCompositionbundleRootRequest): Promise<any> {
    const URL = `${API_URLS.ADD_BUNDLE_COMPOSITION}`;
    return client.post(URL, request);
  }

  export async function deleteBundleCompById(
    id: number,
  ): Promise<IDeleteBundleByIdResponseRoot> {
    const URL = `${API_URLS.DELETE_BUNDLE_COMPOSITION}/${id}`;
    return client.delete(URL);
  }