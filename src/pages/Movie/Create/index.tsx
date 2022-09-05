import MovieActionForm from "components/MovieActionForm";
import Box from "@mui/material/Box";
import { IMovieCreate } from "types/movies";
import { createMovie } from "api/movies";
import SpinnerBackdrop from "components/SpinnerBackdrop";
import { useState } from "react";

const MovieCreate = () => {
  const [loading, setLoading] = useState(false);

  const handleMovieCreate = (movieDetails: IMovieCreate) => {
    setLoading(true);
    createMovie(movieDetails)
      .then(() => {
        alert("Movie Created");
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <SpinnerBackdrop />;
  }
  return (
    <Box p={3}>
      <MovieActionForm handleFormSubmit={handleMovieCreate} />
    </Box>
  );
};
export default MovieCreate;
