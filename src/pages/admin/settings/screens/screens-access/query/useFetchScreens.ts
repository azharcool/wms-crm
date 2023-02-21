/**
 * @format
 */
import { useQuery } from "react-query";
import { fetchScreens } from "services/screen.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IAccess {
  id: number;
  screenName: string;
  screenCode: string;
  screenUrl: string;
  createdOn: Date;
  updatedOn?: any;
}

export interface IResponseAccess {
  data: IAccess[];
  message?: IAccess[];
  statusCode: number;
}

async function getScreens(): Promise<IResponseAccess | undefined> {
  try {
    const response: IResponseAccess = await fetchScreens(0, 0, false, "access");
    if (response.statusCode === 200) {
      return response;
    }
    return {
      data: [],
      statusCode: 500,
    };
  } catch (error) {
    return Promise.reject(error);
  }
}

const useFetchScreens = () => {
  const cacheKey = [QueryKeys.screensAccess];
  return useQuery(
    cacheKey,
    () => {
      return getScreens();
    },
    {
      enabled: true,
    },
  );
};

export { useFetchScreens };
