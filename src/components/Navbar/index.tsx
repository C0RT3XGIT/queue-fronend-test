import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

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
const Navbar = () => {
  const navigate = useNavigate();

  const handleHeaderClick = () => {
    navigate("/movies");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={handleHeaderClick}
          >
            Queue Movies Project
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                variant="outlined"
                key={page.name}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to={page.route} style={{ textDecoration: "none" }}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>
          <Button color="success" variant="contained">
            <Link to="/movies/create" style={{ textDecoration: "none" }}>
              Add new movie
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
