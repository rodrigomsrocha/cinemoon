import axios from "axios";

export const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.NEXT_PUBLIC_MOVIE_API_KEY,
  },
});

export const ratingApi = axios.create({
  baseURL: "http://www.omdbapi.com",
  params: {
    apikey: process.env.NEXT_PUBLIC_RATING_API_KEY,
  },
});
