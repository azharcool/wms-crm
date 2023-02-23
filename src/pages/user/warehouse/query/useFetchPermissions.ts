/**
 * @format
 */
import { useQuery } from "react-query";
import { fetchPermissions } from "services/permission.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IPermission {
  id: number;
  permissions: string;
  permission_Description: string;
  screenName: string;
  companyId: number;
  status: number;
  screenId: number;
}

export interface IResponsePermission {
  data: IPermission[];
  totalDocs: number;
  limit: number;
  statusCode: number;
}

async function getPermissions(
  pageNo: number,
  pageLimit = 10,
): Promise<IResponsePermission | undefined> {
  try {
    const response: IResponsePermission = await fetchPermissions(
      pageNo,
      pageLimit,
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

const useFetchPermissions = (pageNo: number, pageLimit = 10) => {
  const cacheKey = [QueryKeys.permissions];
  return useQuery(
    cacheKey,
    () => {
      return getPermissions(pageNo, pageLimit);
    },
    {
      enabled: true,
    },
  );
};

export { useFetchPermissions };
