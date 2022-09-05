import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IDirector } from "types/movies";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { directorActionSchema } from "validations/forms";

interface IDirectorActionFormProps {
  director?: IDirector;
  handleFormSubmit: (data: IDirector) => void;
}

const DirectorActionForm = ({
  director,
  handleFormSubmit,
}: IDirectorActionFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDirector>({
    resolver: yupResolver(directorActionSchema),
  });
  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            error={!!errors.first_name}
            id="first-name"
            label="First Name"
            helperText={errors?.first_name?.message}
            defaultValue={director?.first_name}
            fullWidth
            {...register("first_name")}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            error={!!errors.last_name}
            id="last-name"
            label="Last name"
            helperText={errors?.last_name?.message}
            fullWidth
            defaultValue={director?.last_name}
            {...register("last_name")}
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

export default DirectorActionForm;
