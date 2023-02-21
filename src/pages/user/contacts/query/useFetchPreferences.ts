/**
 * @format
 */
import useDecodedData from "hooks/useDecodedData";
import { useQuery } from "react-query";
import { getPreference } from "services/contacts.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IPreference {
  id: number;
  userId: number;
  preferenceName: string;
  preferences: string;
  status: number;
}

export interface IData {
  data: IPreference[];
  statusCode: number;
}

async function fetchPreference(userId: number): Promise<IData> {
  try {
    const response: any = await getPreference(userId);
    if (response.statusCode === 200) {
      return response;
    }
    return {
      data: [],
      statusCode: 404,
    };
  } catch (error) {
    return Promise.reject(error);
  }
}

const useFetchPreferences = () => {
  const cacheKey = [QueryKeys.preferences];
  const decode = useDecodedData();

  return useQuery(
    cacheKey,
    () => {
      return fetchPreference(decode?.id);
    },
    {
      enabled: true,
    },
  );
};

export { useFetchPreferences };
