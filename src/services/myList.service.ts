import { IResponse } from "constants/interfaces";
import { AddMyListRoot } from "pages/user/contacts/components/types/AddMyListRequest";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

export function getAllMyList(): Promise<IResponse> {
  return client.get(API_URLS.GET_MYLIST);
}

export function getMyListContactByMyListId(id: string): Promise<IResponse> {
  return client.get(
    `${API_URLS.GET_MYLISTCONTACT_BY_MULTI_MYLISTID}?listid=${id}`,
  );
}

export function saveMyList(body: AddMyListRoot): Promise<IResponse> {
  return client.post(API_URLS.ADD_MYLIST, body);
}

export function deleteMyList(id: number): Promise<IResponse> {
  return client.delete(`${API_URLS.DELETE_MYLIST}/${id}`);
}
