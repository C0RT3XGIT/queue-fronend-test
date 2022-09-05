import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IDirector } from "types/movies";
import { updateDirectorDetails, getDirectorDetails } from "api/directors";
import SpinnerBackdrop from "components/SpinnerBackdrop";
import DirectorActionForm from "components/DirectorActionForm";

const DirectorDetailed = () => {
  const { id } = useParams();

  const [directorDetails, setDirectorDetails] = useState<IDirector>(null);
  const [loading, setLoading] = useState(true);

  const handleUpdateDirectorDetails = (directorData: IDirector) => {
    setLoading(true);
    updateDirectorDetails(id, directorData)
      .then(() => {
        setDirectorDetails((prevState) => ({
          ...prevState,
          ...directorData,
        }));
        alert("Director details updated !");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
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
      <Grid item xs={12} sm={5} my={2}>
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
      <Grid item xs={12} sm={7} my={2}>
        <Typography variant="h5" py={3}>
          Update Details
        </Typography>
        <DirectorActionForm
          handleFormSubmit={handleUpdateDirectorDetails}
          director={directorDetails}
        />
      </Grid>
    </Grid>
  );
};

export default DirectorDetailed;
