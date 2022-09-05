import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IMovieDetailed, IMovie } from "types/movies";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { movieActionSchema } from "validations/movies";

interface IMovieActionFormProps {
  movie?: IMovieDetailed;
  handleFormSubmit: (data: IMovie) => void;
}

const MovieActionForm = ({
  movie,
  handleFormSubmit,
}: IMovieActionFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IMovie>({
    resolver: yupResolver(movieActionSchema),
  });
  console.log(errors);
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
            error={!!errors.name}
            id="name"
            label="Name"
            helperText={errors?.name?.message}
            defaultValue={movie?.name}
            fullWidth
            {...register("name")}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            error={!!errors.release_year}
            id="release-year"
            label="Release Year"
            helperText={errors?.release_year?.message}
            fullWidth
            defaultValue={movie?.release_year}
            {...register("release_year")}
          />
        </Grid>
      </Grid>
      <Box py={2}>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default MovieActionForm;
