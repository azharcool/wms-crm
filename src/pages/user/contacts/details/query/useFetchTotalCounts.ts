/**
 * @format
 */
import { useQuery } from "react-query";
import { totalCounts } from "services/activity.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IAllCount {
  collaboratorsCount: number;
  dealsCount: number;
  taskCount: number;
  appointmentCount: number;
  campaignsCount: number;
  formEntriesCount: number;
  completedCount: number;
  callsCount: number;
  todayCount: number;
}

export interface IActivitiesResponse {
  data?: IAllCount;
  statusCode: number;
}

async function getAllCounts(contactId: number): Promise<IActivitiesResponse> {
  try {
    const response: any = await totalCounts(contactId);
    if (response.statusCode === 200) {
      return response;
    }
    return {
      statusCode: 404,
    };
  } catch (error) {
    return Promise.reject(error);
  }
}

const useFetchTotalCounts = (contactId: number) => {
  const cacheKey = [QueryKeys.allCounts, contactId];
  return useQuery(
    cacheKey,
    () => {
      return getAllCounts(contactId);
    },
    {
      enabled: true,
    },
  );
};

export { useFetchTotalCounts };
