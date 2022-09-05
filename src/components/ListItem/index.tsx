import React from "react";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { ListItem as Item } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface IMovieItemProps {
  id: string;
  count: number;
  primaryText: string;
  secondaryText?: string | number;
  detailsRoute: string;
}

const ListItem = ({
  primaryText,
  secondaryText,
  count,
  detailsRoute,
  id,
}: IMovieItemProps) => {
  const navigate = useNavigate();

  const handleDetailsClick = (id: string) => {
    navigate(`/${detailsRoute}/${id}`);
  };

  return (
    <>
      <Item alignItems="flex-start">
        <ListItemAvatar>
          <Typography variant="h3">{count}</Typography>
        </ListItemAvatar>
        <ListItemText
          primary={primaryText}
          secondaryTypographyProps={{ component: "div" }}
          secondary={secondaryText}
        />

        <Button variant="contained" onClick={() => handleDetailsClick(id)}>
          Details
        </Button>
      </Item>
      <Divider variant="inset" />
    </>
  );
};

export default ListItem;
