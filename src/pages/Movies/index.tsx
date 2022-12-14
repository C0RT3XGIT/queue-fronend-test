import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "components/ListItem";
import { IMovie } from "types/movies";
import { getMovies } from "api/movies";
import SpinnerBackdrop from "components/SpinnerBackdrop";

const Movies = (): JSX.Element => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovies()
      .then(({ data }) => {
        setMovies(data.movies);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <SpinnerBackdrop />;
  }

  return (
    <Box>
      <List sx={{ width: "100%" }}>
        {movies &&
          movies.map((item, index) => (
            <ListItem
              detailsRoute="movies"
              count={index + 1}
              primaryText={item.name}
              secondaryText={item.release_year}
              id={item._id}
              key={item._id}
            />
          ))}
      </List>
    </Box>
  );
};

export default Movies;
