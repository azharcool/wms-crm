import { PER_PAGE } from "constants/constants";
import { IResponse } from "constants/interfaces";
import { IPipelineRequest } from "pages/admin/settings/screens/pipelines/query/useApiAction";
import { IResponsePipeline } from "pages/admin/settings/screens/pipelines/query/useFetchPipelines";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

async function savePipeline(body: IPipelineRequest): Promise<IResponse> {
  return body?.id
    ? client.put(API_URLS.EDIT_PIPELINE, body)
    : client.post(API_URLS.ADD_PIPELINE, body);
}

async function removePipeline(pipelineId: number): Promise<IResponse> {
  return client.delete(`${API_URLS.DELETE_PIPELINE}/${pipelineId}`);
}

async function fetchPipelines(
  pageNo?: number,
  pageLimit?: number,
  isPagination?: boolean,
): Promise<IResponsePipeline> {
  const url = isPagination
    ? `${API_URLS.FETCH_PIPELINES}?page=${pageNo}&pageSize=${
        pageLimit || PER_PAGE
      }`
    : `${API_URLS.FETCH_PIPELINES_WITHOUT_PAGINATION}`;
  return client.get(url);
}

export { fetchPipelines, removePipeline, savePipeline };
