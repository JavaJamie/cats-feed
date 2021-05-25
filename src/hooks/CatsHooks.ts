import axios from 'axios';
import { useInfiniteQuery } from "react-query";
import { ICat } from '../interfaces';
import { BASE_CATS_API } from '../util/Constants';
import { CatsQueryKeys } from "../util/QueryKeys";

export function useSearchCats() { 
    const result = useInfiniteQuery<Array<ICat>>(
        CatsQueryKeys.GET_CATS,
        async ({ pageParam = 0 }) => {
            const res = await axios.get(`${BASE_CATS_API}search?${new URLSearchParams({ order: 'DESC', limit: "50", page: pageParam })}`);
            return res.data;
        },
        {
            getNextPageParam: (lastPage, pages) => lastPage.length ? pages.length : undefined
        }
    );

    return result;
}