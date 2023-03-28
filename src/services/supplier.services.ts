import { IResponse } from "constants/interfaces";
import { AddSupplierRequestRoot } from "types/catalog/supplier/addSupplierRequest";
import { GetAllSupplierRoot } from "types/catalog/supplier/getAllSupplierResponse";
import { GetByIdSupplierResponseRoot } from "types/catalog/supplier/getByIdSupplierResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function getAllSupplierWithoutPagination(): Promise<GetAllSupplierRoot> {
  const URL = `${API_URLS.GET_ALL_SUPPLIER_WITHOUT_PAGINATION}`;
  return client.get(URL);
}

export async function getAllSupplierWithPagination(
  restUrl: string,
): Promise<GetAllSupplierRoot> {
  let URL = `${API_URLS.GET_ALL_SUPPLIER_WITH_PAGINATION}`;
  if (restUrl) {
    URL = `${URL}?${restUrl}`;
  }
  return client.get(URL);
}

export async function addSupplier(
  request: AddSupplierRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.ADD_SUPPLIER}`;
  return client.post(URL, request);
}

export async function editSupplier(
  request: AddSupplierRequestRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_SUPPLIER}`;
  return client.put(URL, request);
}

export async function getByIdSupplier(
  id: number,
): Promise<GetByIdSupplierResponseRoot> {
  const URL = `${API_URLS.GET_BY_ID_SUPPLIER}?id=${id}`;
  return client.get(URL);
}

export async function deleteSupplier(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_PRODUCT}/${id}`;
  return client.delete(URL);
}

export async function buldDeleteSupplier(ids: string): Promise<IResponse> {
  const URL = `${API_URLS.BULK_DELETE_PRODUCT}/${ids}`;
  return client.delete(URL);
}
