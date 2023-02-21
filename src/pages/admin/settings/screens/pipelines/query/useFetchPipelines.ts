/**
 * @format
 */
import { useQuery } from "react-query";
import { fetchPipelines } from "services/pipeline.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IPipeline {
  id: number;
  stage: string;
  createdOn: Date;
  updatedOn?: any;
}

export interface IResponsePipeline {
  data: IPipeline[];
  message?: IPipeline[];
  totalDocs: number;
  limit: number;
  statusCode: number;
  statuscode?: number;
}

async function getPipelines(
  pageNo?: number,
  pageLimit = 10,
  isPagination = true,
): Promise<IResponsePipeline | undefined> {
  try {
    const response: IResponsePipeline = await fetchPipelines(
      pageNo,
      pageLimit,
      isPagination,
    );
    if (response.statusCode === 200) {
      return response;
    }
    return {
      data: [],
      totalDocs: 0,
      limit: 10,
      statusCode: 500,
    };
  } catch (error) {
    return Promise.reject(error);
  }
}

const useFetchPipelines = (
  pageNo?: number,
  pageLimit = 10,
  isPagination = true,
  enabled = true,
) => {
  const cacheKey = [QueryKeys.pipelines];
  return useQuery(
    cacheKey,
    () => {
      return getPipelines(pageNo, pageLimit, isPagination);
    },
    {
      enabled,
    },
  );
};

export { useFetchPipelines };
