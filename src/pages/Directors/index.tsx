import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "components/ListItem";
import React, { useEffect, useState } from "react";
import { IDirector } from "types/movies";
import { getDirectors } from "api/directors";
import SpinnerBackdrop from "components/SpinnerBackdrop";

const Directors = () => {
  const [directors, setDirectors] = useState<IDirector[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDirectors()
      .then(({ data }) => {
        setDirectors(data.directors);
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
        {directors &&
          directors.map((item, index) => (
            <ListItem
              id={item._id}
              count={index + 1}
              key={item._id}
              primaryText={item.first_name + " " + item.last_name}
              detailsRoute="directors"
            />
          ))}
      </List>
    </Box>
  );
};
export default Directors;
