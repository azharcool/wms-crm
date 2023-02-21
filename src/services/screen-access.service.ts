import { PER_PAGE } from "constants/constants";
import { IResponse } from "constants/interfaces";
import { IScreenAccessRequest } from "pages/admin/settings/screens/screens-access/query/useApiAction";
import { IResponseScreen } from "pages/admin/settings/screens/screens/query/useFetchScreens";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

async function saveScreenAccess(
  body: IScreenAccessRequest,
): Promise<IResponse> {
  return client.post(API_URLS.ADD_USER_ACCESS, body);
}

async function removeScreenAccess(screenId: number): Promise<IResponse> {
  return client.delete(`${API_URLS.DELETE_SCREEN}/${screenId}`);
}

async function fetchScreens(
  pageNo: number,
  pageLimit: number,
  isPagination: boolean,
  from = "",
): Promise<IResponseScreen> {
  const url =
    from === "access"
      ? `${API_URLS.FETCH_SCREENS_WITH_PERMISSION}`
      : isPagination
      ? `${API_URLS.FETCH_SCREENS}?page=${pageNo}&pageSize=${
          pageLimit || PER_PAGE
        }`
      : `${API_URLS.FETCH_SCREENS_WITHOUT_PAGINATION}`;
  return client.get(url);
}

export { fetchScreens, removeScreenAccess, saveScreenAccess };
