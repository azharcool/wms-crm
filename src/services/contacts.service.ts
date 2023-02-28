import { PER_PAGE } from "constants/constants";
import { IResponse } from "constants/interfaces";
// import { IContactsResponse } from "pages/user/contacts/query/useFetchContacts";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

async function saveContact(body: any): Promise<IResponse> {
  return body?.id
    ? client.put(API_URLS.EDIT_CONTACT, body)
    : client.post(API_URLS.ADD_CONTACT, body);
}

async function removeContact(userId: number): Promise<IResponse> {
  return client.delete(`${API_URLS.DELETE_CONTACT}/${userId}`);
}

async function editContact(values: any): Promise<IResponse> {
  return client.put(`${API_URLS.EDIT_CONTACT}`, values);
}
async function saveAddress(values: any): Promise<IResponse> {
  return values?.id
    ? client.put(`${API_URLS.EDIT_ADDRESS}`, values)
    : client.post(`${API_URLS.ADD_ADDRESS}`, values);
}

async function savePreference(body: any): Promise<IResponse> {
  return client.post(API_URLS.ADD_PREFERENCE, body);
}

async function fetchContactsSearch(query = ""): Promise<IResponse> {
  return client.get(API_URLS.GET_CONTACT_BY_SEARCH);
}

async function getPreference(userId: any): Promise<IResponse> {
  return client.get(`${API_URLS.GET_PREFERENCE}?UserId=${userId}`);
}

async function fetchContactById(id: number): Promise<IResponse> {
  return client.get(`${API_URLS.GET_CONTACT_BY_ID}?id=${id}`);
}

async function deleteBulkContact(data: any): Promise<IResponse> {
  return client.patch(`${API_URLS.BULK_DELETE}`, data);
}

async function changeLeadOwnerByContactId(
  salesRepId: number,
  contactId: number,
): Promise<IResponse> {
  return client.put(
    `${API_URLS.UPDATE_LEAD_OWNER}?salesRepId=${salesRepId}&contactId=${contactId}`,
  );
}

async function changeLeadSourceByContactId(
  leadSourceId: number,
  contactId: number,
): Promise<IResponse> {
  return client.put(
    `${API_URLS.UPDATE_LEAD_SOURCE}?leadSourceId=${leadSourceId}&contactId=${contactId}`,
  );
}

async function saveNote(values: any): Promise<IResponse> {
  return values?.id
    ? client.put(`${API_URLS.EDIT_NOTE}`, values)
    : client.post(`${API_URLS.ADD_NOTE}`, values);
}

async function deleteNote(id: any): Promise<IResponse> {
  return client.delete(`${API_URLS.DELETE_NOTE}/${id}`);
}
async function getCustomFields(): Promise<any> {
  return client.get(`${API_URLS.GET_ALL_CUSTOM_FIELDS}`);
}

export {
  changeLeadOwnerByContactId,
  changeLeadSourceByContactId,
  deleteBulkContact,
  deleteNote,
  editContact,
  fetchContactById,
  fetchContactsSearch,
  getCustomFields,
  getPreference,
  removeContact,
  saveAddress,
  saveContact,
  saveNote,
  savePreference,
};
