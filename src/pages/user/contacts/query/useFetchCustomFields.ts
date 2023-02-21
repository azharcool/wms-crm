/**
 * @format
 */
import { useQuery } from "react-query";
import { getCustomFields } from "services/contacts.service";
import { QueryKeys } from "utils/QueryKeys";

export interface ICustomFields {
  id: number;
  companyId: number;
  userId: number;
  customField: string;
  formName: string;
  status: number;
}

export interface IData {
  data: ICustomFields[];
  statusCode: number;
}

async function fetchCustomFields(): Promise<IData> {
  try {
    const response: any = await getCustomFields();
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

const useFetchCustomFields = () => {
  const cacheKey = [QueryKeys.customFields];

  return useQuery(
    cacheKey,
    () => {
      return fetchCustomFields();
    },
    {
      enabled: true,
    },
  );
};

export { useFetchCustomFields };
