import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getMovieDetails } from "api/movies";
import { IMovieDetailed } from "types/movies";
import SpinnerBackdrop from "components/SpinnerBackdrop";

const MovieDetailed = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState<IMovieDetailed>(null);
  const [loading, setLoading] = useState(false);

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
    <Card variant="outlined" sx={{ maxWidth: 375, marginTop: 2 }}>
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
      <CardActions>
        <Button size="small" variant="contained">
          Update details
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieDetailed;
