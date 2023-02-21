import { useQuery } from "react-query";
import { getMyListContactByMyListId } from "services/myList.service";
import { QueryKeys } from "utils/QueryKeys";

const useFetchMyListContactByListId = (ids: string) => {
  const cacheKey = [QueryKeys.myContactList, ids];
  return useQuery(cacheKey, () => getMyListContactByMyListId(ids), {
    enabled: Boolean(ids),
  });
};

export default useFetchMyListContactByListId;
