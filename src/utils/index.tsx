import { ADMIN_ROLE } from "constants/constants";
import jwtDecode from "jwt-decode";
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from "moment-timezone";
import { store } from "redux/store";

export const getStatus = (status: number) => {
  switch (status) {
    case 0:
      return "Created";
    case 1:
      return "Active";
    case 2:
      return "Inactive";
    case 3:
      return "Deleted";
    default:
      return "";
  }
};

export const isScreenAccessible = (screenCode: string) => {
  const state = store.getState();
  const { user, common } = state;
  if (!user.token) return false;
  const decodedToken: any = jwtDecode(user.token);
  const { permissions } = common;
  console.log("permission", JSON.stringify(permissions, null, 2));
  if (decodedToken.RoleName === ADMIN_ROLE || screenCode === "common") {
    return true;
  }
  const screenPermission = permissions?.find(
    (x: any) => x.screenCode === screenCode,
  );

  return !!screenPermission;
};

export const logoURL =
  "https://stordel.com/wp-content/uploads/2023/01/%D8%B4%D8%B9%D8%A7%D8%B1-%D8%A7%D9%84%D8%B4%D8%B1%D9%83%D8%A9-1-05-1536x768.png";

export const isControlAccessible = (code: string, screenCode: string) => {
  const state = store.getState();
  const { user, common } = state;
  const decodedToken: any = jwtDecode(user.token);
  const { permissions } = common;
  const screenPermission = permissions?.find(
    (x: any) => x.screenCode === screenCode,
  );

  if (decodedToken.RoleName === ADMIN_ROLE) {
    return true;
  }
  if (screenPermission) {
    const isExist = screenPermission?.permissions?.find((x: any) => {
      if (x) {
        if (x.permissionCode === code) {
          return true;
        }
      }
      return false;
    });
    return !!isExist;
  }

  return false;
};

export const dateFormatter = (d: any, hasDate?: boolean) => {
  if (hasDate) {
    return `${moment(d).format("MM/DD/YYYY")}`;
  }

  return `${moment(d).format("MM/DD/YYYY, h:mm:ss A")}`;
};

const getTimeZone = (t: string, d: string) => {
  const timeZone = moment(d).tz(t).format("ha z");
  const zone = timeZone.split(" ");
  return zone[1].toUpperCase();
};

export const timeDuration = (duration = 15) => {
  const x = duration;
  const times = [];
  let tt = 0;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; tt <= 8 * 60; i++) {
    const hh = Math.floor(tt / 60);
    const mm = tt % 60;
    // eslint-disable-next-line prefer-template
    const duration = ("0" + (hh % 12)).slice(-2) + ":" + ("0" + mm).slice(-2);
    times[i] = { id: tt.toString(), value: duration };
    tt += x;
  }

  return times;
};

export function formatPhoneNumber(phoneNumberString: string) {
  const cleaned = `${phoneNumberString}`.replace(/\D/g, "");
  const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    const intlCode = match[1] ? "+1 " : "";
    return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
  }
  return phoneNumberString || "";
}

export function capitalizeFirstLetter(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function generateRandomNumber(digit: number) {
  // return String(new Date().getTime()).slice(length);
  return Math.random().toFixed(digit).split(".")[1];
}
