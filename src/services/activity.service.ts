import { PER_PAGE } from "constants/constants";
import { IResponse } from "constants/interfaces";
import { IActivitiesResponse } from "pages/user/contacts/details/query/useFetchActivities";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

async function fetchActivitiesTypes(): Promise<IResponse> {
  return client.get(`${API_URLS.GET_ACTIVITIES_TYPE}`);
}

async function deleteActivity(id: number): Promise<IResponse> {
  return client.delete(`${API_URLS.DELETE_ACTIVITY}/${id}`);
}
async function completeActivity(id: number): Promise<IResponse> {
  return client.put(`${API_URLS.ACTIVATE_ACTIVITY}/${id}`);
}

async function getAllActivitiesByContactId(id: number): Promise<IResponse> {
  ///
  return client.get(`${API_URLS.GET_ALL_ACTIVITIES}/${id}`);
}

async function totalCounts(id: number): Promise<IResponse> {
  ///
  return client.get(`${API_URLS.GET_ALL_COUNTS}?contactId=${id}`);
}

async function saveActivity(values: any): Promise<IResponse> {
  return values?.id
    ? client.put(`${API_URLS.EDIT_ACTIVITY}`, values)
    : client.post(`${API_URLS.ADD_ACTIVITY}`, values);
}

async function fetchActivities(
  pageNo: number,
  pageLimit: number,
  contactId: number,
  restUrl?: string,
): Promise<IActivitiesResponse> {
  let url = `${API_URLS.FETCH_ACTIVITIES_PAGINATION}?page=${
    pageNo + 1
  }&pageSize=${pageLimit || PER_PAGE}&contactId=${contactId}`;
  if (restUrl) {
    url = `${url}${restUrl}`;
  }
  return client.get(url);
}

export {
  completeActivity,
  deleteActivity,
  fetchActivities,
  fetchActivitiesTypes,
  getAllActivitiesByContactId,
  saveActivity,
  totalCounts,
};
