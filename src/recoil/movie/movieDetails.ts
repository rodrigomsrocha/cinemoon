import { selector } from "recoil";
import { movieApi, ratingApi } from "../../services/api";
import { movieIdState } from "./movieId";

export const movieDetailsState = selector({
  key: "movieDetailsState",
  get: async ({ get }) => {
    const movieId = get(movieIdState);
    if (!movieId) return;

    const { data: movie } = await movieApi.get(`/movie/${movieId}`);
    const { data: posterData } = await movieApi.get(`/movie/${movieId}/images`);
    const { data: providers } = await movieApi.get(
      `/movie/${movieId}/watch/providers`
    );
    console.log(providers);

    const { data: rating } = await ratingApi.get(`/?i=${movie.imdb_id}`);

    return {
      poster: `https://image.tmdb.org/t/p/w200/${posterData.posters[0].file_path}`,
      title: movie.original_title,
      synopsis: movie.overview,
      runtime: movie.runtime,
      rating: rating.imdbRating,
      genres: movie.genres.map((genre) => {
        return genre.name;
      }),
      providers: providers.results["US"]?.flatrate?.map((provider) => {
        return {
          provider_logo: `https://image.tmdb.org/t/p/original/${provider.logo_path}`,
          provider_name: provider.provider_name,
        };
      }),
    };
  },
});
