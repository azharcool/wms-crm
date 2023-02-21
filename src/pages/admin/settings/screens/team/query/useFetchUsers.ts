/**
 * @format
 */
import { useQuery } from "react-query";
import { fetchUsers } from "services/team.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IUser {
  id: number;
  roleId: number;
  fullName: string;
  address: string;
  email: string;
  password: string;
  mobileNumber: string;
  status: number;
  roleName: string;
  createdOn: Date;
  updatedOn?: any;
}

export interface IResponseUser {
  data: IUser[];
  totalDocs: number;
  limit: number;
  statusCode: number;
}

async function getUsers(
  pageNo: number,
  pageLimit = 10,
): Promise<IResponseUser | undefined> {
  try {
    const response: IResponseUser = await fetchUsers(pageNo, pageLimit);
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

const useFetchUsers = (pageNo: number, pageLimit = 10) => {
  const cacheKey = [QueryKeys.users];
  return useQuery(
    cacheKey,
    () => {
      return getUsers(pageNo, pageLimit);
    },
    {
      enabled: true,
    },
  );
};

export { useFetchUsers };
