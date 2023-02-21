import { PER_PAGE } from "constants/constants";
import { IResponse } from "constants/interfaces";
import { ILeadSourceRequest } from "pages/admin/settings/screens/lead-source/query/useApiAction";
import { IResponseLeadSource } from "pages/admin/settings/screens/lead-source/query/useFetchLeadSources";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

async function saveLeadSource(body: ILeadSourceRequest): Promise<IResponse> {
  return body?.id
    ? client.put(API_URLS.EDIT_LEAD_SOURCE, body)
    : client.post(API_URLS.ADD_LEAD_SOURCE, body);
}

async function removeLeadSource(leadSource: number): Promise<IResponse> {
  return client.delete(`${API_URLS.DELETE_LEAD_SOURCE}/${leadSource}`);
}

async function fetchLeadSources(
  pageNo: number,
  pageLimit: number,
  isPagination = true,
): Promise<IResponseLeadSource> {
  const url = isPagination
    ? `${API_URLS.GET_LEAD_SOURCE_PAGINATION}?page=${pageNo + 1}&pageSize=${
        pageLimit || PER_PAGE
      }`
    : `${API_URLS.GET_LEAD_SOURCE_WITHOUT_PAGINATION}`;

  return client.get(url);
}

export { fetchLeadSources, removeLeadSource, saveLeadSource };
