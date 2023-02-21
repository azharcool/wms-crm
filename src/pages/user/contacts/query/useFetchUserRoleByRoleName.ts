import { useQuery } from "react-query";
import { getUserByUserRoleName } from "services/roles.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IUserRoleByRoleIdRoot {
  statusCode: number;
  data: UserRoleByRoleIdData[];
}

export interface UserRoleByRoleIdData {
  id: number;
  roleId: number;
  roleName: string;
  fullName: string;
  address: string;
  email: string;
  password: string;
  mobileNumber: string;
  status: number;
  createdOn: Date;
  updatedOn: null;
}

const useFetchUserRoleByRoleName = (role = "admin", enabled = true) => {
  const cacheKey = [QueryKeys.userRoles];
  return useQuery(cacheKey, () => getUserByUserRoleName(role), {
    enabled,
  });
};

export { useFetchUserRoleByRoleName };
