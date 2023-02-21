/**
 * @format
 */
import { useQuery } from "react-query";
import { fetchNotes } from "services/contacts.service";
import { QueryKeys } from "utils/QueryKeys";

export interface INotes {
  id: number;
  contactId: number;
  userId: number;
  notesdescription: string;
  status: number;
  createdOn: Date;
  updatedOn?: any;
}

export interface IContactsResponse {
  data?: INotes[];
  statusCode: number;
  totalDocs?: number;
}

async function getNotes(
  pageNo: number,
  pageLimit: number,
  contactId: number,
): Promise<IContactsResponse> {
  try {
    const response: any = await fetchNotes(pageNo, pageLimit, contactId);
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

const useFetchNotes = (
  pageNo: number,
  pageLimit: number,
  contactId: number,
) => {
  const cacheKey = [QueryKeys.notes, contactId];
  return useQuery(
    cacheKey,
    () => {
      return getNotes(pageNo, pageLimit, contactId);
    },
    {
      enabled: true,
    },
  );
};

export { useFetchNotes };
