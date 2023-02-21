import { IResponse } from "constants/interfaces";
import { ICustomFields } from "pages/admin/settings/screens/custom-fields/query/useApiAction";
import client from "utils/ApiClient";
import API_URLS from "./endPoints";

async function saveCustomFields(values: ICustomFields): Promise<IResponse> {
  return client.post(`${API_URLS.ADD_CUSTOM_FIELDS}`, values);
}

export { saveCustomFields };
