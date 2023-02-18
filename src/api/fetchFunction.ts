import { Credits, Movie, MovieInfo, Movies } from "../types";
import axios from 'axios';
import { creditsUrl, movieUrl, NOW_PLAYING_BASE_URL, SEARCH_BASE_URL } from "../config";

export const basicFetch = async <returnType>(endPoint: string): Promise<returnType> => {
    try {
        const { data } = await axios.get(endPoint);
        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Something went wrong!');
        }
    }
}

// Fetch functions
export const fetchMovies = async (search = "", page = 1): Promise<Movies> => {
    const endpoint = search ? `${SEARCH_BASE_URL}${search}&page=${page}` : `${NOW_PLAYING_BASE_URL}&page=${page}`;
    return await basicFetch<Movies>(endpoint)
}

export const fetchMovieInfo = async (movieId = ""): Promise<MovieInfo> => {
    const movieEndpoint: string = movieUrl(movieId);
    const creditEndpoint: string = creditsUrl(movieId);

    const movie = await basicFetch<Movie>(movieEndpoint);
    const credit = await basicFetch<Credits>(creditEndpoint);

    // Get the directors only
    const directors = credit.crew.filter((member) => member.job === 'Director');

    return {
        movie,
        directors,
        cast: credit.cast
    }
}