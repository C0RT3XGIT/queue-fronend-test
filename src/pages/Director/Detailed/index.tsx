import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IDirector, IMovie, IMovieDetailed } from "types/movies";
import { updateMovieDetails } from "api/movies";
import SpinnerBackdrop from "components/SpinnerBackdrop";
import { getDirectorDetails } from "api/directors";

const DirectorDetailed = () => {
  const { id } = useParams();

  const [directorDetails, setDirectorDetails] = useState<IDirector>(null);
  const [loading, setLoading] = useState(false);

  const handleUpdateDirectorDetails = (data: IMovie) => {
    updateMovieDetails(id, data).then(() => {
      alert("Director details updated !");
    });
  };

  useEffect(() => {
    setLoading(true);
    getDirectorDetails(id)
      .then(({ data }) => {
        setDirectorDetails(data.director);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <SpinnerBackdrop />;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={2} my={2}>
        <Typography variant="h5" py={3}>
          Director Details
        </Typography>
        <Card variant="outlined" sx={{ maxWidth: 375 }}>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              First Name: {directorDetails?.first_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Last Name: {directorDetails?.last_name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DirectorDetailed;
