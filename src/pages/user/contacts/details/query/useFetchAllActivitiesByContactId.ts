/**
 * @format
 */
import { useQuery } from "react-query";
import { getAllActivitiesByContactId } from "services/activity.service";
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
  userName?: string;
  assignToName?: string;
}

export interface IActivitiesResponse {
  data?: IActivity[];
  statusCode: number;
  totalDocs?: number;
}

async function getActivities(contactId: number): Promise<IActivitiesResponse> {
  try {
    const response: any = await getAllActivitiesByContactId(contactId);
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

const useFetchAllActivitiesByContactId = (contactId: number) => {
  const cacheKey = [QueryKeys.getAllActivities, contactId];
  return useQuery(
    cacheKey,
    () => {
      return getActivities(contactId);
    },
    {
      enabled: true,
    },
  );
};

export { useFetchAllActivitiesByContactId };
