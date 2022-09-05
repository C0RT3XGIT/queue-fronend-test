import MovieActionForm from "components/MovieActionForm";
import Box from "@mui/material/Box";
import { IMovie } from "types/movies";

const MovieCreate = () => {
  const handleMovieCreate = (movieDetails: IMovie) => {
    console.log(movieDetails);
  };

  return (
    <Box p={3}>
      <MovieActionForm handleFormSubmit={handleMovieCreate} />
    </Box>
  );
};
export default MovieCreate;
