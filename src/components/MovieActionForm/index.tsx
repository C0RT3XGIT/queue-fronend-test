import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IMovieDetailed, IMovie, IDirector, IMovieCreate } from "types/movies";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { movieActionSchema } from "validations/forms";
import { useEffect, useState } from "react";
import { getDirectors } from "api/directors";
import Select from "react-select";

interface IMovieActionFormProps {
  movie?: IMovieDetailed;
  handleFormSubmit: (data: IMovieCreate) => void;
}

interface IDropdownOption {
  value: string;
  label: string;
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

  const [directors, setDirectors] = useState<IDirector[]>([]);
  const [dropdownValue, setDropdownValue] = useState<IDropdownOption>(null);

  const getDropdownOptions = (
    directorsList: IDirector[]
  ): IDropdownOption[] => {
    return directorsList.map((item) => ({
      value: item._id,
      label: item.first_name + " " + item.last_name,
    }));
  };

  const findItemDropdownOptions = (directors: IDirector[], id: string) => {
    return getDropdownOptions(directors).find((item) => item.value === id);
  };

  const handleLocalFormSubmit = (formValues: IMovie) => {
    const payload = {
      ...formValues,
      director: dropdownValue.value,
    };
    handleFormSubmit(payload);
  };
  useEffect(() => {
    getDirectors().then(({ data }) => {
      setDirectors((prevState) => {
        movie?.director
          ? setDropdownValue(
              findItemDropdownOptions(data.directors, movie?.director?._id)
            )
          : setDropdownValue(getDropdownOptions(data.directors)[0]);
        return [...prevState, ...data.directors];
      });
    });
  }, []);

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(handleLocalFormSubmit)}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
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
        <Grid item xs={12} sm={3}>
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
        <Grid item xs={12} sm={3}>
          <Select
            options={getDropdownOptions(directors)}
            value={dropdownValue}
            onChange={(value) => setDropdownValue(value)}
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
