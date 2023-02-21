import { PER_PAGE } from "constants/constants";
import { IResponse } from "constants/interfaces";
import { ILeadStatusRequest } from "pages/admin/settings/screens/lead-status/query/useApiAction";
import { IResponseLeadStatus } from "pages/admin/settings/screens/lead-status/query/useFetchLeadStatuses";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

async function saveLeadStatus(body: ILeadStatusRequest): Promise<IResponse> {
  return body?.id
    ? client.put(API_URLS.EDIT_LEAD_STATUS, body)
    : client.post(API_URLS.ADD_LEAD_STATUS, body);
}

async function removeLeadStatus(leadStatus: number): Promise<IResponse> {
  return client.delete(`${API_URLS.DELETE_LEAD_STATUS}/${leadStatus}`);
}

async function fetchLeadStatuses(
  pageNo: number,
  pageLimit: number,
  isPagination = true,
): Promise<IResponseLeadStatus> {
  const url = isPagination
    ? `${API_URLS.GET_LEAD_STATUS_PAGINATION}?page=${pageNo + 1}&pageSize=${
        pageLimit || PER_PAGE
      }`
    : `${API_URLS.GET_LEAD_STATUS_WITHOUT_PAGINATION}`;

  return client.get(url);
}

export { fetchLeadStatuses, removeLeadStatus, saveLeadStatus };
