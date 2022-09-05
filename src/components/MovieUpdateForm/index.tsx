import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IMovieDetailed, IMovie } from "../../types/movies";
import { FormEvent } from "react";
import { useForm } from "react-hook-form";

interface IMovieUpdateFormProps {
  movie: IMovieDetailed;
  handleFormSubmit: (data: any) => void;
}

const MovieUpdateForm = ({
  movie,
  handleFormSubmit,
}: IMovieUpdateFormProps) => {
  const { register, handleSubmit } = useForm<IMovie>();
  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Typography variant="h5" pb={3}>
        Movie Details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            id="name"
            label="Name"
            defaultValue={movie?.name}
            fullWidth
            {...register("name")}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            id="release-year"
            label="Release Year"
            defaultValue={movie?.release_year}
            {...register("release_year")}
          />
        </Grid>
      </Grid>
      <Box py={2}>
        <Button type="submit" variant="outlined">
          Update
        </Button>
      </Box>
    </Box>
  );
};

export default MovieUpdateForm;
