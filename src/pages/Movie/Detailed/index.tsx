import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { getMovieDetails, updateMovieDetails } from "api/movies";
import { IMovie, IMovieDetailed } from "types/movies";
import SpinnerBackdrop from "components/SpinnerBackdrop";
import MovieActionForm from "components/MovieActionForm";

const MovieDetailed = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState<IMovieDetailed>(null);
  const [loading, setLoading] = useState(false);

  const handleUpdateMovieDetails = (data: IMovie) => {
    updateMovieDetails(id, data).then(() => {
      console.log(11);
    });
  };

  useEffect(() => {
    setLoading(true);
    getMovieDetails(id)
      .then(({ data }) => {
        setMovieDetails(data.movie);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <SpinnerBackdrop />;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={2} my={2}>
        <Card variant="outlined" sx={{ maxWidth: 375 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {movieDetails?.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Release year: {movieDetails?.release_year}
            </Typography>
            <Typography variant="subtitle1" component="div">
              Directed by:{" "}
              {movieDetails?.director.first_name +
                " " +
                movieDetails?.director.last_name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={5} my={2}>
        <MovieActionForm
          movie={movieDetails}
          handleFormSubmit={handleUpdateMovieDetails}
        />
      </Grid>
    </Grid>
  );
};

export default MovieDetailed;
