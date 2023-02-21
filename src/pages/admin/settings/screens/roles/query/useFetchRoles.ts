/**
 * @format
 */
import { useQuery } from "react-query";
import { fetchRoles } from "services/roles.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IRole {
  id: number;
  roleName: string;
  status: number;
}

export interface IResponseRole {
  data: IRole[];
  totalDocs: number;
  limit: number;
  statusCode: number;
  statuscode?: number;
}

async function getRole(
  pageNo: number,
  pageLimit = 10,
): Promise<IResponseRole | undefined> {
  try {
    const response: IResponseRole = await fetchRoles(pageNo, pageLimit);
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

const useFetchRoles = (pageNo: number, pageLimit = 10) => {
  const cacheKey = [QueryKeys.roles];
  return useQuery(
    cacheKey,
    () => {
      return getRole(pageNo, pageLimit);
    },
    {
      enabled: true,
    },
  );
};

export { useFetchRoles };
