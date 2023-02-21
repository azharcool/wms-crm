interface ISessionData {
  accessToken: string;
  documentId: string;
  isFirstLogin?: boolean;
  isWizardPassed?: boolean;
  refreshToken: string;
  username?: string;
  userRole: string;
}

export enum CookieNames {
  ACCESS_TOKEN = "fs.token",
  REFRESH_TOKEN = "fs.refreshToken",
  USER_ID = "fs.userId",
  USER_ROLE = "fs.userRole",
  AFFILIATE_ID = "fs.affiliateId",
  IS_AFFILIATE = "fs.isAffiliate",
}

export const setCookieItem = (
  cName: string,
  cValue: string,
  expDays?: string,
) => {
  const cookieDetails = `${cName}=${cValue};`;
  if (expDays) {
    const expires = `expires=${expDays};`;
    document.cookie = `${cookieDetails} ${expires} path=/`;
  } else {
    document.cookie = `${cookieDetails} path=/`;
  }
};

export const getCookieItem = (cName: string): string => {
  const match = document.cookie.match(new RegExp(`(^| )${cName}=([^;]+)`));
  if (match) return match[2];
  return "";
};

export const removeCookieItem = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export function getTokenExpiry() {
  const addTenDays = 240 * 60 * 60 * 1000;
  const currentDate = new Date();
  const futureDate = new Date(currentDate.getTime() + addTenDays);
  return futureDate.toUTCString();
}

export function getRefreshTokenExpiry() {
  const addTenDays = 240 * 60 * 60 * 1000;
  const currentDate = new Date();
  const futureDate = new Date(currentDate.getTime() + addTenDays);
  return futureDate.toUTCString();
  // return new Date(2147483647 * 1000).toUTCString();
}

export const setSession = (sessionData: ISessionData) => {
  const { accessToken, documentId, refreshToken, userRole } = sessionData;

  const tokenExpiry: string = getTokenExpiry();
  setCookieItem(CookieNames.ACCESS_TOKEN, accessToken, tokenExpiry);
  setCookieItem(CookieNames.USER_ID, documentId, tokenExpiry);
  setCookieItem(CookieNames.REFRESH_TOKEN, refreshToken, tokenExpiry);
  setCookieItem(CookieNames.USER_ROLE, userRole, tokenExpiry);
};

export const clearSession = (redirectToHome = false) => {
  removeCookieItem(CookieNames.ACCESS_TOKEN);
  removeCookieItem(CookieNames.USER_ID);
  removeCookieItem(CookieNames.REFRESH_TOKEN);
  removeCookieItem(CookieNames.USER_ROLE);
  if (redirectToHome) window.location.href = "/";
};
