import DirectorActionForm from "components/DirectorActionForm";
import Box from "@mui/material/Box";
import { IDirector } from "types/movies";
import { createDirector } from "api/directors";
import SpinnerBackdrop from "components/SpinnerBackdrop";
import { useState } from "react";

const MovieCreate = () => {
  const [loading, setLoading] = useState(false);

  const handleDirectorCreate = (directorDetails: IDirector) => {
    setLoading(true);
    createDirector(directorDetails)
      .then(() => {
        alert("Director Created");
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <SpinnerBackdrop />;
  }
  return (
    <Box p={3}>
      <DirectorActionForm handleFormSubmit={handleDirectorCreate} />
    </Box>
  );
};
export default MovieCreate;
