import { GetAllSupplierRoot } from "types/catalog/supplier/getAllSupplierResponse";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export async function getAllSupplier(): Promise<GetAllSupplierRoot> {
  const URL = `${API_URLS.GET_ALL_SUPPLIER}`;
  return client.get(URL);
}
