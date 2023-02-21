/**
 * @format
 */
import { useQuery } from "react-query";
import { fetchActivitiesTypes } from "services/activity.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IActivityType {
  id: number;
  activityTypeName: string;
  status: number;
  createdOn: string;
  updatedOn?: any;
}

export interface IContactsResponse {
  data?: IActivityType[];
  statusCode: number;
  totalDocs?: number;
}

async function getActivitiesTypes(): Promise<IContactsResponse> {
  try {
    const response: any = await fetchActivitiesTypes();
    if (response.statusCode === 200) {
      return response;
    }
    return {
      statusCode: 404,
      totalDocs: 0,
    };
  } catch (error) {
    return Promise.reject(error);
  }
}

const useFetchActivitiesTypes = (enabled = true) => {
  const cacheKey = [QueryKeys.activitiesType];
  return useQuery(
    cacheKey,
    () => {
      return getActivitiesTypes();
    },
    {
      enabled,
    },
  );
};

export { useFetchActivitiesTypes };
