/**
 * @format
 */
import { useSelector } from "react-redux";
import { IUserState } from "redux/user/auth";

import { RootState } from "../redux/store";

function useUserInfo(): any {
  const userInfo: IUserState = useSelector((state: RootState) => state.user);
  return userInfo;
}

export default useUserInfo;
