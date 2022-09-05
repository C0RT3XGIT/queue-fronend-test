import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material";

const pages = [
  {
    name: "Movies",
    route: "/movies",
  },
  {
    name: "Directors",
    route: "/directors",
  },
];

const StyledLink = styled(Link)({
  textDecoration: "none",
});

const Navbar = () => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate("/movies");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <StyledLink to="/movies">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Queue Movies Project
            </Typography>
          </StyledLink>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                variant="outlined"
                key={page.name}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <StyledLink to={page.route}>{page.name}</StyledLink>
              </Button>
            ))}
          </Box>
          <Button
            color="secondary"
            variant="contained"
            style={{ marginRight: 10 }}
          >
            <StyledLink to="/movies/create">New movie</StyledLink>
          </Button>
          <Button color="success" variant="contained">
            <StyledLink to="/directors/create">New director</StyledLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
