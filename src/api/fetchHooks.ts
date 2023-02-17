import { Movies } from "../types"
import { fetchMovies } from "./fetchFunction"
import { useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from "./queryKeys";

export const useFetchMovies = (search: string) => {
    return useInfiniteQuery([queryKeys.movies, search], ({ pageParam = 1 }) => fetchMovies(search, pageParam), {
        getNextPageParam: (lastPage: Movies) => {
            if (lastPage.page < lastPage.total_pages) {
                return lastPage.page + 1
            }
            return undefined
        },
        refetchOnWindowFocus: false
    })
}