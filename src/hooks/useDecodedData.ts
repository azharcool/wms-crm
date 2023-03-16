/**
 * @format
 */
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { IUserState } from "redux/user/auth";

import { RootState } from "../redux/store";

function useDecodedData(): any {
  const userInfo: IUserState = useSelector((state: RootState) => state.user);
  const { token } = userInfo;
  let decoded: any = null;
  try {
    decoded = token && jwtDecode(token);
  } catch (e) {
    //
  }

  return decoded;
}

export default useDecodedData;
