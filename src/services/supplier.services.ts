import { IResponse } from "constants/interfaces";
import { AddBankAccountRoot } from "types/catalog/supplier/addBankAccountRequest";
import { AddBillingAddressRoot } from "types/catalog/supplier/addBillingAddressRequest";
import { AddShippingAddressRoot } from "types/catalog/supplier/addShippingAddressRequest";
import { AddSupplierRequestRoot } from "types/catalog/supplier/addSupplierRequest";
import { EditBillingRoot } from "types/catalog/supplier/editBillingAddressRequest";
import { GetAllBankAccountRoot } from "types/catalog/supplier/getAllBankAccountResponse";
import { GetAllBillingAddressRoot } from "types/catalog/supplier/getAllBillingAddress";
import { GetAllShippingAddressRoot } from "types/catalog/supplier/getAllShippingAddress";
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
  const URL = `${API_URLS.DELETE_SUPPLIER}/${id}`;
  return client.delete(URL);
}

export async function buldDeleteSupplier(ids: string): Promise<IResponse> {
  const URL = `${API_URLS.BULK_DELETE_SUPPLIER}/${ids}`;
  return client.delete(URL);
}

export async function addShippingAddress(
  request: AddShippingAddressRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.ADD_SHIPPING_ADDRESS}`;
  return client.post(URL, request);
}

export async function editShippingAddress(
  request: AddShippingAddressRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_SHIPPING_ADDRESS}`;
  return client.put(URL, request);
}

export async function deleteShippingAddress(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_SHIPPING_ADDRESS}?id=${id}`;
  return client.delete(URL);
}

export async function getAllShippingAddress(
  id: number,
): Promise<GetAllShippingAddressRoot> {
  const URL = `${API_URLS.GET_ALL_SHIPPING_ADDRESS}?supplierId=${id}`;
  return client.get(URL);
}

export async function addBillingAddress(
  request: AddBillingAddressRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.ADD_BILLING_ADDRESS}`;
  return client.post(URL, request);
}

export async function editBillingAddress(
  request: EditBillingRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.EDIT_BILLING_ADDRESS}`;
  return client.put(URL, request);
}

export async function deleteBillingAddress(id: number): Promise<IResponse> {
  const URL = `${API_URLS.DELETE_BILLING_ADDRESS}?id=${id}`;
  return client.delete(URL);
}

export async function getAllBillingAddress(
  id: number,
): Promise<GetAllBillingAddressRoot> {
  const URL = `${API_URLS.GET_ALL_BILLING_ADDRESS}?supplierId=${id}`;
  return client.get(URL);
}

export async function addBankAccount(
  request: AddBankAccountRoot,
): Promise<IResponse> {
  const URL = `${API_URLS.ADD_BANK_ACCOUNT}`;
  return client.post(URL, request);
}

export async function getAllBankAccount(
  id: number,
): Promise<GetAllBankAccountRoot> {
  const URL = `${API_URLS.GET_ALL_BANK_ACCOUNT}?supplierId=${id}`;
  return client.get(URL);
}
