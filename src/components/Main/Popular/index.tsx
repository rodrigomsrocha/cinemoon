import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { movieApi } from "../../../services/api";
import { Carrousel } from "../Carroussel";

interface Movie {
  title: string;
  backdrop_path: string;
  id: string;
}

export function Popular() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getTopRated = async () => {
      const { data } = await movieApi.get("/movie/popular");
      const movies = data.results.map((result) => {
        return {
          id: result.id,
          backdrop_path: `https://image.tmdb.org/t/p/w300/${result.backdrop_path}`,
          title: result.title,
        };
      });
      setMovies(movies);
    };
    getTopRated();
  }, []);

  return (
    <VStack w="full" align="flex-start">
      <Carrousel heading="Popular" movies={movies} />
    </VStack>
  );
}
