/**
 * @format
 */
import { useQuery } from "react-query";
import { fetchPermissionsByRoleId } from "services/permission.service";
import { QueryKeys } from "utils/QueryKeys";

export interface IResponseRolePermissions {
  data: any[];

  statusCode: number;
}

async function getPermissions(
  roleId: number,
): Promise<IResponseRolePermissions | undefined> {
  try {
    const response: any = await fetchPermissionsByRoleId(roleId);
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

const useFetchRolePermissions = (roleId: number, enabled = true) => {
  const cacheKey = [QueryKeys.rolePermissions];
  return useQuery(
    cacheKey,
    () => {
      return getPermissions(roleId);
    },
    {
      enabled,
    },
  );
};

const useFetchRolePermissionsInit = (roleId: number, enabled = true) => {
  const cacheKey = [QueryKeys.rolePermissionsInit];
  return useQuery(
    cacheKey,
    () => {
      return getPermissions(roleId);
    },
    {
      enabled,
    },
  );
};

export { useFetchRolePermissions, useFetchRolePermissionsInit };
