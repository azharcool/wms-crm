/**
 * @format
 */
import { useQuery } from "react-query";
import { fetchLeadSources } from "services/leadSource.service";
import { QueryKeys } from "utils/QueryKeys";

export interface ILeadSource {
  id: number;
  roleName: string;
  leadSourceName: string;
  status: number;
}

export interface IResponseLeadSource {
  data: ILeadSource[];
  totalDocs: number;
  limit: number;
  statusCode: number;
  statuscode?: number;
}

async function getLeadSource(
  pageNo: number,
  pageLimit = 10,
  isPagination = true,
): Promise<IResponseLeadSource | undefined> {
  try {
    const response: IResponseLeadSource = await fetchLeadSources(
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

const useFetchLeadSources = (
  pageNo: number,
  pageLimit = 10,
  isPagination = true,
  enabled = true,
) => {
  const cacheKey = [QueryKeys.leadSources];
  return useQuery(
    cacheKey,
    () => {
      return getLeadSource(pageNo, pageLimit, isPagination);
    },
    {
      enabled,
    },
  );
};

export { useFetchLeadSources };
