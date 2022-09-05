import React from "react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { IMovie } from "types/movies";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface IMovieItemProps {
  count: number;
  movie: IMovie;
}

const MovieItem = ({ movie, count }: IMovieItemProps) => {
  const navigate = useNavigate();

  const handleDetailsClick = (id: string) => {
    navigate(`/movies/${id}`);
  };

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Typography variant="h3">{count}</Typography>
        </ListItemAvatar>
        <ListItemText
          primary={movie?.name}
          secondaryTypographyProps={{ component: "div" }}
          secondary={`Release year: ${movie?.release_year}`}
        />

        <Button
          variant="contained"
          onClick={() => handleDetailsClick(movie._id)}
        >
          Details
        </Button>
      </ListItem>
      <Divider variant="inset" />
    </>
  );
};

export default MovieItem;
