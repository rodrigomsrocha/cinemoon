import { Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { resourceLimits } from "worker_threads";
import { movieApi, ratingApi } from "../services/api";
import { Main } from "./components/Main";
import { MovieSlide } from "./components/MovieSlide";

interface MovieProps {
  id: string;
  title: string;
  genres: {
    id: number;
    name: number;
  }[];
  rating: string;
  backdrop: string;
}

interface HomeProps {
  movies: MovieProps[];
}

export default function Home(props: HomeProps) {
  return (
    <Box w="full">
      <MovieSlide movies={props.movies} />
      <Main />
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await movieApi("/movie/popular");

  const movies = await Promise.all(
    data.results.slice(0, 6).map(async (result) => {
      const { data: details } = await movieApi(`/movie/${result.id}`);
      const { data: imdbDetails } = await ratingApi(`/?i=${details.imdb_id}`);

      return {
        id: result.id,
        title: result.title,
        genres: [...details.genres],
        rating: imdbDetails.imdbRating,
        backdrop: `https://image.tmdb.org/t/p/original/${details.backdrop_path}`,
      };
    })
  );

  return {
    props: {
      movies,
    },
  };
};
