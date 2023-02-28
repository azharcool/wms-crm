import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";
import DashboardLayout from "components/dashboard-container";
import { useFetchRolePermissions } from "components/dashboard-container/query/useFetchPermissions";
import TextField from "components/textfield";
import ErrorMessages from "constants/ErrorMessages";
import { IDropdown } from "constants/interfaces";
import { useFetchRoles } from "pages/admin/settings/screens/team/query/useFetchRoles";
import { useEffect, useMemo, useState } from "react";
import palette from "theme/palette";
import { IScreen } from "../screens/query/useFetchScreens";
import AccessAccordion from "./components/AccessAccordion";
import { IScreenAccessRequest, useApiActions } from "./query/useApiAction";
import { useFetchScreens } from "./query/useFetchScreens";

function ScreenAccess() {
  const [roles, setRoles] = useState<IDropdown[]>([]);
  const [roleId, setRoleId] = useState<number>(0);
  const [roleIdError, setRoleIdError] = useState<string>("");
  const [data, setData] = useState<IScreenAccessRequest>({
    roleId: 0,
    screens: [],
  });
  const { data: rolePermissions, refetch } = useFetchRolePermissions(
    roleId,
    false,
  );

  const [selectedScreenIds, setSelectedScreenIds] = useState<number[]>([]);

  const { trySave } = useApiActions();

  const { data: screensData } = useFetchScreens();
  const { data: roleData } = useFetchRoles();

  const screens = useMemo(() => screensData?.data, [screensData]);

  useEffect(() => {
    if (roleId) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleId]);

  useEffect(() => {
    if (rolePermissions) {
      const oldScreensPermissions: any[] = [];
      const oldRolePermissions: any = { roleId: 0, screens: [] };
      const oldPermissions: any = [];

      rolePermissions?.data?.map((permission: any) => {
        const { screen } = permission;
        if (!screen) return false;
        permission.permissions?.map((item: any) => {
          oldPermissions.push({ permissionId: item?.id });
          return item;
        });
        const newScreen = {
          screenId: screen.id,
          permissions: oldPermissions,
        };
        oldRolePermissions.roleId = roleId;
        oldScreensPermissions.push(newScreen);
        oldRolePermissions.screens = oldScreensPermissions;

        return permission;
      });
      setData(oldRolePermissions);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rolePermissions]);

  useEffect(() => {
    if (roleData?.data) {
      const tempRoles: IDropdown[] = [];
      roleData?.data?.map((item: any) => {
        tempRoles.push({ id: item.id, value: item.roleName });
        return item;
      });
      setRoles(tempRoles);
    }
  }, [roleData]);

  const handleSubmit = async () => {
    if (!roleId) {
      setRoleIdError(ErrorMessages.screensAccess.role);
      return false;
    }
    await trySave(data);
    setRoleIdError("");
    return true;
  };

  const handleSelectScreen = (id: number) => {
    let newSelectedCustomerIds: number[] = JSON.parse(
      JSON.stringify(selectedScreenIds),
    );

    if (newSelectedCustomerIds.includes(id)) {
      newSelectedCustomerIds = newSelectedCustomerIds.filter(
        (x: number) => x !== id,
      );
      const newScreenObj: any[] = [];
      newSelectedCustomerIds?.map((id) => {
        const filteredScreen: any = screens?.find(
          (screen: any) => screen.id === id,
        );
        const newPermissions: any[] = [];
        filteredScreen.screenPermission?.map((permission: any) => {
          newPermissions.push({
            permissionId: permission.id,
          });
          return permission;
        });
        newScreenObj.push({
          screenId: id,
          permissions: newPermissions,
        });
        return id;
      });
      setData({ ...data, screens: newScreenObj });

      setSelectedScreenIds(newSelectedCustomerIds);
    } else {
      newSelectedCustomerIds = [...newSelectedCustomerIds, id];
      const newScreenObj: any[] = [];
      newSelectedCustomerIds?.map((id) => {
        const filteredScreen: any = screens?.find(
          (screen: any) => screen.id === id,
        );
        const newPermissions: any[] = [];

        filteredScreen.screenPermission?.map((permission: any) => {
          newPermissions.push({
            permissionId: permission.id,
          });
          return permission;
        });
        newScreenObj.push({
          screenId: id,
          permissions: newPermissions,
        });
        return id;
      });

      setData({ ...data, screens: newScreenObj });
      setSelectedScreenIds(newSelectedCustomerIds);
    }
  };

  const handleSelectControl = (screenId: number, id: number) => {
    const isExistScreen = data?.screens?.find(
      (x: any) => x.screenId === screenId,
    );

    if (isExistScreen) {
      const { permissions } = isExistScreen;
      const newData = JSON.parse(JSON.stringify(data));

      const isExistPermission = permissions?.find(
        (x: any) => x.permissionId === id,
      );

      const filteredData = newData?.screens?.filter(
        (x: any) => x.screenId !== screenId,
      );

      if (permissions?.length === 0) {
        const newPerm = [{ permissionId: id }];
        const newPermissions = {
          screenId,
          permissions: newPerm,
        };
        const newScreens = [...filteredData, newPermissions];
        setData({ ...data, screens: newScreens });
        return true;
      }

      if (isExistPermission) {
        const filteredPermissions = permissions.filter(
          (x: any) => x.permissionId !== id,
        );
        const newPermissions = {
          screenId,
          permissions: filteredPermissions,
        };

        const newScreens = [...filteredData, newPermissions];
        setData({ ...data, screens: newScreens });
        return true;
      }

      const newPerm = { permissionId: id };
      const newPermissions = {
        screenId,
        permissions: [...permissions, newPerm],
      };
      const newScreens = [...filteredData, newPermissions];
      setData({ ...data, screens: newScreens });
    }
    return false;
  };

  const handleRoleSelect = (event: any) => {
    if (event.target.value) {
      setRoleId(event.target.value);
      setData({ ...data, roleId: event.target.value });
      setRoleIdError("");
    } else {
      setRoleId(0);
    }
  };

  return (
    <DashboardLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Card sx={{ p: 3 }}>
            <Typography sx={{ mb: 3 }} variant="h4">
              Screen Access
            </Typography>
            <Stack alignItems="flex-end" direction="row" gap={2}>
              <TextField
                isSelect
                error={Boolean(roleIdError)}
                helperText={roleIdError}
                label="Select Role"
                menuItems={roles}
                name="Role"
                style={{ width: "550px" }}
                value={roleId}
                onSelectHandler={handleRoleSelect}
              />
              <Box sx={{ mb: 1 }}>
                <Button
                  sx={{ backgroundColor: palette.info.main }}
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </Box>
              <Box />
            </Stack>
            <Box sx={{ mt: 2 }}>
              {screens?.map((screen: IScreen) => {
                console.log("screen", screen)
                return (
                  <Box sx={{ mt: 1 }}>
                    {screen.screenName ==="Settings" && 
                    <AccessAccordion
                      handleSelectControl={handleSelectControl}
                      handleSelectScreen={handleSelectScreen}
                      id={screen.id}
                      permissions={screen?.screenPermission || []}
                      selectedData={data}
                      selectedScreenIds={selectedScreenIds}
                      title={screen?.screenName}
                    />
                }
                  </Box>
                );
              })}
            </Box>
          </Card>
        </Container>
      </Box>
    </DashboardLayout>
  );
}

export default ScreenAccess;
