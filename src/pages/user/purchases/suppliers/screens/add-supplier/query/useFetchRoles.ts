/**
 * @format
 */
import { useQuery } from "react-query";
import { getRoles } from "services/roles.service";
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
}

async function fetchRoles(): Promise<IResponseRole | undefined> {
  try {
    const response: IResponseRole = await getRoles();
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

const useFetchRoles = () => {
  const cacheKey = [QueryKeys.roles];
  return useQuery(
    cacheKey,
    () => {
      return fetchRoles();
    },
    {
      enabled: true,
    },
  );
};

export { useFetchRoles };
