export const PER_PAGE = 10;
export const NAME_REGEX = /^(?=.*[a-z])[a-zA-Z0-9' -]*$/;
export const NAME_REGEX_2 = /^[a-zA-Z]{2}[a-zA-Z0-9' -]*$/;
export const NAME_REGEX_3 = /^(?=.*[a-z])[a-zA-Z' -]*$/;
export const USERNAME_REGEX = /^[a-zA-Z]{1}[a-zA-Z0-9 -]*$/;
export const ONLY_ALPHABETS_SPACES = /[^a-zA-Z\s]/gi;
export const ONLY_TEXT = /^[a-zA-Z\s]*[a-zA-Z][a-zA-Z\s]*$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,128})/;
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const URL_REGEX =
  /^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;

export const US_PHONE_NUMBER_REGEX =
  /^((\()?[1-9]{1}[0-9]{2}(\))?)[\s-]?[0-9]{3}[\s-]?[0-9]{4}$/;
export const FACEBOOK_URL_REGEX =
  /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-.]*\/)*([\w\-.]*)/;
export const INSTAGRAM_URL_REGEX =
  /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/gim;
export const LINKEDIN_URL_REGEX =
  /((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^/]+\/(([\w|\d-&#?=])+\/?){1,}))$/gm;
export const TWITTER_URL_REGEX =
  /(https:\/\/twitter.com\/(?![a-zA-Z0-9_]+\/)([a-zA-Z0-9_]+))/;

export const ADMIN_ROLE = "Admin";
