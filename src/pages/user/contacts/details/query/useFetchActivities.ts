/**
 * @format
 */
import { useQuery } from "react-query";
import { fetchActivities } from "services/activity.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IActivity {
  id: number;
  contactId: number;
  userId: number;
  activityTypeId: number;
  title: string;
  descrition: string;
  activityTypeName?: string;
  assignToId: number;
  date: Date;
  time: Date;
  duration: string;
  durationCount: number;
  contactName: string;
  contactEmail: string;
  status: number;
  createdOn: string;
  updatedOn?: any;
}

export interface IActivitiesResponse {
  data?: IActivity[];
  statusCode: number;
  totalDocs?: number;
  completeCount: number;
  overDueCount: number;
  todayCount: number;
}

async function getActivities(
  pageNo: number,
  pageLimit: number,
  contactId: number,
  restUrl?: string,
): Promise<IActivitiesResponse> {
  try {
    const response: any = await fetchActivities(
      pageNo,
      pageLimit,
      contactId,
      restUrl,
    );
    if (response.statusCode === 200) {
      return response;
    }
    return {
      statusCode: 404,
      totalDocs: 0,
      completeCount: 0,
      overDueCount: 0,
      todayCount: 0,
    };
  } catch (error) {
    return Promise.reject(error);
  }
}

const useFetchActivities = (
  pageNo: number,
  pageLimit: number,
  contactId: number,
  restUrl?: string,
) => {
  const cacheKey = [QueryKeys.activities, contactId];
  return useQuery(
    cacheKey,
    () => {
      return getActivities(pageNo, pageLimit, contactId, restUrl);
    },
    {
      enabled: true,
    },
  );
};

export { useFetchActivities };
