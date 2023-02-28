// const { BASE_URL } = process.env;
const BASE_URL = "https://localuser02-001-site1.etempurl.com/api"; // "http://ecallcrm-001-site1.atempurl.com/api";
const config = {
  IMAGE_BASE_URL: BASE_URL,
  BASE_URL,
  MAPBOX_URL_API: "https://api.mapbox.com/geocoding/v5/mapbox.places/",
  MAPBOX_TOKEN:
    "pk.eyJ1IjoiZGVla3NoYW1laHRhMTI1IiwiYSI6ImNrcWV6OWE0bDBjcmMydXF1enZqMjd5MDMifQ.hFB7SI_kojKYfNQ42c62BA",
  MAPBOX_OTHER_URL:
    "cachebuster=1566806258853&autocomplete=true&language=en&limit=10&types=place,postcode,address,region,district&country=us",
};

export const SCREEN_CODES = {
  COMMON: "common",
  CONTACTS: "contact_01",
  CONTACT_DETAILS: "contact_details_01",
  SETTINGS: "setting_01",
  WAREHOUSE:"warehouse_01",
  CALENDAR: "calendar_01",
  INBOX: "inbox_01",
  CARD: "card_01",
  DEALS: "deals_01",
};

export const ACCESS_CODES = {
  // settings
  ROLL: "role_01",
  SCREEN: "screens_01",
  SCREEN_CONTROL: "control_01",
  SCREEN_ACCESS: "screen_access_01",
  LEAD_SOURCE: "lead_source_01",
  LEAD_STATUS: "lead_status_01",
  PIPELINE_LEAD: "pipeline_lead_01",
  CUSTOM_FIELD: "custom_field_01",
  MY_TEAM: "my_team_01",

  // contacts
  CREATE_LIST: "create_list_01",
  ADD_CONTACTS: "add_contact_01",
  MY_LIST: "my_list_01",
  COLUMNS: "columns_01",
  FILTER: "filter_01",
  UPLOAD_FILE: "upload_file_01",
  FILTER_LEAD: "filter_lead_01",
  FILTER_ACTION: "filter_action_01",
  FILTER_BY_USER: "filter_by_user",
};

export default config;
