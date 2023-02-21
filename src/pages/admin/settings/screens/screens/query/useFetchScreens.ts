/**
 * @format
 */
import { IPermission } from "pages/admin/settings/screens/permissions/query/useFetchPermissions";
import { useQuery } from "react-query";
import { fetchScreens } from "services/screen.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IScreen {
  id: number;
  screenName: string;
  screenCode: string;
  screenUrl: string;
  createdOn: Date;
  updatedOn?: any;
  screenPermission?: IPermission[];
}

export interface IResponseScreen {
  data: IScreen[];
  message?: IScreen[];
  totalDocs: number;
  limit: number;
  statusCode: number;
  statuscode?: number;
}

async function getScreens(
  pageNo: number,
  pageLimit = 10,
  isPagination = true,
): Promise<IResponseScreen | undefined> {
  try {
    const response: IResponseScreen = await fetchScreens(
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

const useFetchScreens = (
  pageNo: number,
  pageLimit = 10,
  isPagination = true,
) => {
  const cacheKey = [QueryKeys.screens];
  return useQuery(
    cacheKey,
    () => {
      return getScreens(pageNo, pageLimit, isPagination);
    },
    {
      enabled: true,
    },
  );
};

export { useFetchScreens };
