import { MovieInfo, Movies } from "../types"
import { fetchMovieInfo, fetchMovies } from "./fetchFunction"
import { useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from "./queryKeys";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export const useFetchMovies = (search: string, mode: 'now-playing' | 'top-rated') => {
    return useInfiniteQuery([queryKeys.movies, search, mode], ({ pageParam = 1 }) => fetchMovies(search, pageParam, mode), {
        getNextPageParam: (lastPage: Movies) => {
            if (lastPage.page < lastPage.total_pages) {
                return lastPage.page + 1
            }
            return undefined
        },
        refetchOnWindowFocus: false
    })
}

export const useFetchMovieInfo = () => {
    const params = useParams();
    const [movieInfo, setMovieInfo] = useState<MovieInfo | null>(null);
    const [error, setError] = useState<Error | string>('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchMovieInfo(params.id)
            .then((res) => setMovieInfo(res))
            .catch((error) => {
                if (error instanceof Error) {
                    setError(error)
                } else {
                    setError('Something went wrong')
                }
            })
            .finally(() => setLoading(false))

    }, [params.id])

    return {
        movieInfo,
        loading,
        error,
    }
}