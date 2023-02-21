/**
 * @format
 */
import { useQuery } from "react-query";
import { fetchLeadStatuses } from "services/leadStatus.service";
import { QueryKeys } from "utils/QueryKeys";

export interface ILeadStatus {
  id: number;
  roleName: string;
  status: number;
}

export interface IResponseLeadStatus {
  data: ILeadStatus[];
  totalDocs: number;
  limit: number;
  statusCode: number;
  statuscode?: number;
}

async function getLeadStatus(
  pageNo: number,
  pageLimit = 10,
  isPagination = true,
): Promise<IResponseLeadStatus | undefined> {
  try {
    const response: IResponseLeadStatus = await fetchLeadStatuses(
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

const useFetchLeadStatuses = (
  pageNo: number,
  pageLimit = 10,
  isPagination = true,
  enabled = true,
) => {
  const cacheKey = [QueryKeys.leadStatuses];
  return useQuery(
    cacheKey,
    () => {
      return getLeadStatus(pageNo, pageLimit, isPagination);
    },
    {
      enabled,
    },
  );
};

export { useFetchLeadStatuses };
