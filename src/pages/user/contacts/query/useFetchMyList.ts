import { useQuery } from "react-query";
import { getAllMyList } from "services/myList.service";
import { QueryKeys } from "utils/QueryKeys";
import { GetAllMyListResponseRoot } from "../components/types/getAllMyListResponse";

const useFetchMyList = () => {
  const cacheKey = [QueryKeys.myList];
  return useQuery<GetAllMyListResponseRoot>(cacheKey, () => getAllMyList());
};

export default useFetchMyList;
